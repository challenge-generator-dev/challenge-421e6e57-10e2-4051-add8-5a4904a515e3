import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TransferForm } from './TransferForm';

describe('TransferForm - Pruebas de Accesibilidad ARIA', () => {
  const renderComponent = () => {
    return render(<TransferForm onSubmit={jest.fn()} />);
  };

  describe('Atributos ARIA en el formulario', () => {
    it('debe tener role="form" en el elemento del formulario', () => {
      renderComponent();
      const form = screen.getByRole('form');
      expect(form).toBeInTheDocument();
    });

    it('debe tener aria-labelledby con referencia al título del formulario', () => {
      renderComponent();
      const form = screen.getByRole('form');
      const title = screen.getByText(/transferencia/i);
      expect(form).toHaveAttribute('aria-labelledby', title.id);
    });

    it('debe tener aria-describedby con referencia a las instrucciones', () => {
      renderComponent();
      const form = screen.getByRole('form');
      const instructions = screen.getByText(/completa los datos/i);
      expect(form).toHaveAttribute('aria-describedby', instructions.id);
    });
  });

  describe('Atributos ARIA en campos de entrada', () => {
    it('debe tener aria-required="true" en los campos obligatorios', () => {
      renderComponent();
      const accountInput = screen.getByLabelText(/cuenta origen/i);
      const amountInput = screen.getByLabelText(/monto/i);
      expect(accountInput).toHaveAttribute('aria-required', 'true');
      expect(amountInput).toHaveAttribute('aria-required', 'true');
    });

    it('debe tener aria-invalid="false" inicialmente en campos válidos', () => {
      renderComponent();
      const accountInput = screen.getByLabelText(/cuenta origen/i);
      const amountInput = screen.getByLabelText(/monto/i);
      expect(accountInput).toHaveAttribute('aria-invalid', 'false');
      expect(amountInput).toHaveAttribute('aria-invalid', 'false');
    });

    it('debe tener aria-invalid="true" cuando el campo tiene error de validación', async () => {
      const user = userEvent.setup();
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(amountInput, '-50');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        expect(amountInput).toHaveAttribute('aria-invalid', 'true');
      });
    });

    it('debe tener aria-describedby pointing a mensajes de error', async () => {
      const user = userEvent.setup();
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(amountInput, '0');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        const errorMessage = screen.getByText(/el monto debe ser mayor/i);
        expect(amountInput).toHaveAttribute('aria-describedby', errorMessage.id);
      });
    });
  });

  describe('Atributos ARIA en botones', () => {
    it('debe tener aria-disabled="true" cuando el formulario es inválido', () => {
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      expect(submitButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('debe tener aria-disabled="false" cuando el formulario es válido', async () => {
      const user = userEvent.setup();
      renderComponent();
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '1000');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await waitFor(() => {
        expect(submitButton).toHaveAttribute('aria-disabled', 'false');
      });
    });

    it('debe tener aria-pressed cuando el botón está en proceso de carga', async () => {
      const mockSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 100)));
      const user = userEvent.setup();
      render(<TransferForm onSubmit={mockSubmit} />);
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '1000');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      expect(submitButton).toHaveAttribute('aria-pressed', 'true');
    });
  });

  describe('Regiones ARIA y live regions', () => {
    it('debe tener una region aria-live para mensajes de error', () => {
      renderComponent();
      const liveRegion = screen.getByRole('alert');
      expect(liveRegion).toBeInTheDocument();
      expect(liveRegion).toHaveAttribute('aria-live', 'polite');
    });

    it('debe tener aria-atomic="true" en la region de errores', () => {
      renderComponent();
      const liveRegion = screen.getByRole('alert');
      expect(liveRegion).toHaveAttribute('aria-atomic', 'true');
    });

    it('debe mostrar errores en la region live despues de validacion fallida', async () => {
      const user = userEvent.setup();
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      const liveRegion = screen.getByRole('alert');
      await waitFor(() => {
        expect(liveRegion).toHaveTextContent(/hay errores en el formulario/i);
      });
    });
  });

  describe('Navegacion por teclado y focus', () => {
    it('debe mantener el orden de tabulacion logico entre campos', async () => {
      const user = userEvent.setup();
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.tab();
      const firstInput = screen.getByLabelText(/cuenta origen/i);
      expect(document.activeElement).toBe(firstInput);
      await user.tab();
      const secondInput = screen.getByLabelText(/cuenta destino/i);
      expect(document.activeElement).toBe(secondInput);
      await user.tab();
      const amountInput = screen.getByLabelText(/monto/i);
      expect(document.activeElement).toBe(amountInput);
      await user.tab();
      expect(document.activeElement).toBe(submitButton);
    });

    it('debe mover el foco al primer campo con error despues de validacion fallida', async () => {
      const user = userEvent.setup();
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        const firstInput = screen.getByLabelText(/cuenta origen/i);
        expect(document.activeElement).toBe(firstInput);
      });
    });
  });

  describe('Etiquetas y relaciones ARIA', () => {
    it('debe tener labels asociados correctamente con htmlFor o aria-label', () => {
      renderComponent();
      expect(screen.getByLabelText(/cuenta origen/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/cuenta destino/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/monto/i)).toBeInTheDocument();
    });

    it('debe tener aria-describedby para texto de ayuda', () => {
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      const helpText = screen.getByText(/monto minimo/i);
      expect(amountInput).toHaveAttribute('aria-describedby', helpText.id);
    });
  });

  describe('Manejo de estados invalidos', () => {
    it('debe announciar el error de cuenta origen cuando esta vacio', async () => {
      const user = userEvent.setup();
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(amountInput, '100');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      const liveRegion = screen.getByRole('alert');
      await waitFor(() => {
        expect(liveRegion).toHaveTextContent(/cuenta origen es requerido/i);
      });
    });

    it('debe announciar el error de monto invalido', async () => {
      const user = userEvent.setup();
      renderComponent();
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '99999999');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      const liveRegion = screen.getByRole('alert');
      await waitFor(() => {
        expect(liveRegion).toHaveTextContent(/monto excede el saldo disponible/i);
      });
    });
  });

  describe('Verificacion de roles ARIA', () => {
    it('debe tener role="group" para cada seccion del formulario', () => {
      renderComponent();
      const groups = screen.getAllByRole('group');
      expect(groups.length).toBeGreaterThan(0);
    });

    it('debe tener role="status" para el mensaje de exito', async () => {
      const mockSubmit = jest.fn(() => Promise.resolve());
      const user = userEvent.setup();
      render(<TransferForm onSubmit={mockSubmit} />);
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '1000');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        const statusRegion = screen.getByRole('status');
        expect(statusRegion).toHaveTextContent(/transferencia exitosa/i);
      });
    });
  });
});