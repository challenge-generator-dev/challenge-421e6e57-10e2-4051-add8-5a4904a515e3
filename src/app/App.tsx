import { useState, useEffect } from 'react';
import AccountDashboard from '@/features/AccountDashboard';
import TransferForm from '@/features/TransferForm';
import TransactionHistory from '@/features/TransactionHistory';
import '@/styles/global.scss';
import { announce } from '../main';

type Tab = 'dashboard' | 'transfer' | 'history';

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [userBalance, setUserBalance] = useState<number>(1000);
  const [transactions, setTransactions] = useState<Array<{id: string, amount: number, date: string, description: string}>>([]);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = () => {
      try {
        // In a real app, this would be an API call
        setUserBalance(1500);
        setTransactions([
          { id: '1', amount: 500, date: '2023-05-01', description: 'Deposit' },
          { id: '2', amount: -200, date: '2023-05-02', description: 'Transfer to Savings' }
        ]);
        announce('Datos de cuenta cargados');
      } catch (error) {
        announce('Error al cargar datos de la cuenta');
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleTransfer = (amount: number, recipient: string) => {
    if (amount <= 0) {
      announce('Error: El monto debe ser mayor a cero');
      return;
    }

    if (amount > userBalance) {
      announce('Error: Fondos insuficientes');
      return;
    }

    try {
      const newTransaction = {
        id: Date.now().toString(),
        amount: -amount,
        date: new Date().toISOString().split('T')[0],
        description: `Transfer to ${recipient}`
      };

      setUserBalance(prev => prev - amount);
      setTransactions(prev => [newTransaction, ...prev]);
      announce(`Transferencia de ${amount} realizada a ${recipient}`);
    } catch (error) {
      announce('Error al realizar la transferencia');
      console.error('Transfer failed:', error);
    }
  };

  return (
    <div className="app-container" role="application" aria-label="Aplicación de banca personal">
      <header className="app-header" role="banner">
        <h1>Banca Personal</h1>
      </header>

      <nav className="app-nav" role="navigation" aria-label="Navegación principal">
        <ul role="menubar">
          <li role="none">
            <button
              role="menuitem"
              aria-selected={activeTab === 'dashboard'}
              aria-controls="dashboard-panel"
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              aria-selected={activeTab === 'transfer'}
              aria-controls="transfer-panel"
              onClick={() => setActiveTab('transfer')}
            >
              Transferencia
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              aria-selected={activeTab === 'history'}
              aria-controls="history-panel"
              onClick={() => setActiveTab('history')}
            >
              Historial
            </button>
          </li>
        </ul>
      </nav>

      <main className="app-main" role="main">
        <div
          id="dashboard-panel"
          role="region"
          aria-labelledby="dashboard-heading"
          hidden={activeTab !== 'dashboard'}
        >
          <h2 id="dashboard-heading">Resumen de Cuenta</h2>
          <AccountDashboard balance={userBalance} />
        </div>

        <div
          id="transfer-panel"
          role="region"
          aria-labelledby="transfer-heading"
          hidden={activeTab !== 'transfer'}
        >
          <h2 id="transfer-heading">Realizar Transferencia</h2>
          <TransferForm onTransfer={handleTransfer} />
        </div>

        <div
          id="history-panel"
          role="region"
          aria-labelledby="history-heading"
          hidden={activeTab !== 'history'}
        >
          <h2 id="history-heading">Historial de Transacciones</h2>
          <TransactionHistory transactions={transactions} />
        </div>
      </main>

      <footer className="app-footer" role="contentinfo">
        <p>© 2023 Banca Personal. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;