import type { Account, Transaction, TransferRequest, TransferResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

class ApiService {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }
    return response.json();
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      return this.handleResponse<T>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network request failed', 0, error);
    }
  }

  async getAccounts(): Promise<Account[]> {
    return this.request<Account[]>('/accounts');
  }

  async getAccountById(accountId: string): Promise<Account> {
    return this.request<Account>(`/accounts/${accountId}`);
  }

  async getTransactions(accountId?: string): Promise<Transaction[]> {
    const endpoint = accountId 
      ? `/transactions?accountId=${encodeURIComponent(accountId)}` 
      : '/transactions';
    return this.request<Transaction[]>(endpoint);
  }

  async getTransactionById(transactionId: string): Promise<Transaction> {
    return this.request<Transaction>(`/transactions/${transactionId}`);
  }

  async transfer(transferRequest: TransferRequest): Promise<TransferResponse> {
    return this.request<TransferResponse>('/transfers', {
      method: 'POST',
      body: JSON.stringify(transferRequest),
    });
  }

  async getBalance(accountId: string): Promise<{ balance: number }> {
    return this.request<{ balance: number }>(`/accounts/${accountId}/balance`);
  }

  setAuthToken(token: string): void {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  clearAuthToken(): void {
    const { 'Content-Type': contentType, ...headers } = this.defaultHeaders;
    this.defaultHeaders = headers;
  }
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const apiService = new ApiService();
export default apiService;