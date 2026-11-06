import React from 'react';
import './Alert.scss';

export type AlertSeverity = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  /** Mensaje principal de la alerta */
  message: string;
  /** Título opcional para la alerta */
  title?: string;
  /** Severidad que determina el estilo visual */
  severity?: AlertSeverity;
  /** Indica si la alerta se puede cerrar */
  dismissible?: boolean;
  /** Callback ejecutado al cerrar la alerta */
  onDismiss?: () => void;
  /** Indica si la alerta es visible */
  visible?: boolean;
  /** Indica si la alerta tiene rol de live region para announce */
  isLiveRegion?: boolean;
  /** Personalización del rol de aria */
  ariaRole?: 'alert' | 'status' | 'log' | 'marquee' | 'timer';
  /** Nivel de verbosidad de aria-live */
  ariaLive?: 'polite' | 'assertive' | 'off';
  /** ID único para referenciación */
  id?: string;
  /** Acciones adicionales como botones */
  action?: React.ReactNode;
  /** Clase CSS adicional */
  className?: string;
  /** Estilos inline adicionales */
  style?: React.CSSProperties;
  /** Test id para testing */
  testId?: string;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  title,
  severity = 'info',
  dismissible = false,
  onDismiss,
  visible = true,
  isLiveRegion = false,
  ariaRole,
  ariaLive = 'polite',
  id,
  action,
  className = '',
  style,
  testId,
}) => {
  if (!visible) {
    return null;
  }

  const alertId = id || `alert-${Math.random().toString(36).substr(2, 9)}`;

  const getIcon = (): React.ReactNode => {
    const iconClasses = 'alert__icon';
    const icons: Record<AlertSeverity, React.ReactNode> = {
      success: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      error: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      ),
      warning: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      info: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    };
    return icons[severity];
  };

  const getAriaAttributes = (): React.AriaAttributes => {
    const attributes: React.AriaAttributes = {};

    if (isLiveRegion || severity === 'error') {
      attributes['role'] = ariaRole || (severity === 'error' ? 'alert' : 'status');
      attributes['aria-live'] = ariaLive;
    } else if (ariaRole) {
      attributes['role'] = ariaRole;
    }

    return attributes;
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div
      id={alertId}
      className={`alert alert--${severity} ${dismissible ? 'alert--dismissible' : ''} ${className}`}
      style={style}
      data-testid={testId}
      {...getAriaAttributes()}
    >
      <div className="alert__content">
        {getIcon()}
        <div className="alert__body">
          {title && <p className="alert__title">{title}</p>}
          <p className="alert__message">{message}</p>
        </div>
      </div>

      <div className="alert__actions">
        {action && <div className="alert__action">{action}</div>}
        {dismissible && (
          <button
            type="button"
            className="alert__close"
            onClick={handleDismiss}
            aria-label={`Cerrar ${title || 'alerta'}`}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';