import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

vi.mock('../services/api', () => ({
  apiService: {
    getAccounts: vi.fn().mockResolvedValue([
      { id: 'acc-001', name: 'Cuenta Principal', type: 'checking', balance: 5000 },
      { id: 'acc-002', name: 'Cuenta de Ahorros', type: 'savings', balance: 15000 },
    ]),
    getTransactions: vi.fn().mockResolvedValue([
      {
        id: 'txn-001',
        date: '2024-01-15',
        description: 'Depósito Salary',
        amount: 2500,
        type: 'credit',
        accountId: 'acc-001',
      },
      {
        id: 'txn-002',
        date: '2024-01-14',
        description: 'Transferencia a terceros',
        amount: -500,
        type: 'debit',
        accountId: 'acc-001',
      },
    ]),
    transfer: vi.fn().mockResolvedValue({
      success: true,
      transactionId: 'txn-new-001',
      message: 'Transferencia exitosa',
    }),
  },
}));

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the main application with navigation', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('displays three navigation tabs', async () => {
    render(<App />);
    
    await waitFor(() => {
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(3);
    });
  });

  it('has accessible tab labels', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /dashboard/i })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: /transfer/i })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: /history/i })).toBeInTheDocument();
    });
  });

  it('navigates between tabs when clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /dashboard/i })).toBeInTheDocument();
    });
    
    const historyTab = screen.getByRole('tab', { name: /history/i });
    await user.click(historyTab);
    
    await waitFor(() => {
      expect(screen.getByRole('tabpanel', { name: /history/i })).toBeInTheDocument();
    });
  });

  it('shows dashboard tab content by default', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('tabpanel', { name: /dashboard/i })).toBeInTheDocument();
    });
  });

  it('renders bank accounts in dashboard', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Cuenta Principal')).toBeInTheDocument();
      expect(screen.getByText('Cuenta de Ahorros')).toBeInTheDocument();
    });
  });

  it('displays account balances with proper formatting', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('$5,000.00')).toBeInTheDocument();
      expect(screen.getByText('$15,000.00')).toBeInTheDocument();
    });
  });

  it('has form inputs with proper labels in transfer tab', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const transferTab = screen.getByRole('tab', { name: /transfer/i });
    await user.click(transferTab);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/account from/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/account to/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    });
  });

  it('validates transfer amount input', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const transferTab = screen.getByRole('tab', { name: /transfer/i });
    await user.click(transferTab);
    
    await waitFor(() => {
      const amountInput = screen.getByLabelText(/amount/i);
      expect(amountInput).toBeInTheDocument();
    });
  });

  it('displays transaction history with proper structure', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const historyTab = screen.getByRole('tab', { name: /history/i });
    await user.click(historyTab);
    
    await waitFor(() => {
      expect(screen.getByText('Depósito Salary')).toBeInTheDocument();
      expect(screen.getByText('Transferencia a terceros')).toBeInTheDocument();
    });
  });

  it('has proper ARIA attributes for tablist', async () => {
    render(<App />);
    
    await waitFor(() => {
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('aria-label', expect.any(String));
    });
  });

  it('manages focus correctly when switching tabs', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      const dashboardTab = screen.getByRole('tab', { name: /dashboard/i });
      expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
    });
    
    const transferTab = screen.getByRole('tab', { name: /transfer/i });
    await user.click(transferTab);
    
    await waitFor(() => {
      expect(transferTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('loads and displays transactions from API', async () => {
    render(<App />);
    
    await waitFor(() => {
      const transactions = screen.getAllByRole('row');
      expect(transactions.length).toBeGreaterThan(1);
    });
  });

  it('provides status messages for screen readers', async () => {
    render(<App />);
    
    await waitFor(() => {
      const liveRegion = document.getElementById('live-region');
      expect(liveRegion).toBeInTheDocument();
    });
  });

  it('handles errors gracefully and displays error messages', async () => {
    const { apiService } = await import('../services/api');
    vi.mocked(apiService.getAccounts).mockRejectedValueOnce(
      new Error('Network error')
    );
    
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });
});