import React from 'react';
import './Button.scss';

export interface ButtonProps {
  /** Texto visible del botón */
  children: React.ReactNode;
  /** Tipo de botón según HTML spec */
  type?: 'button' | 'submit' | 'reset';
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Tamaño del botón */
  size?: 'small' | 'medium' | 'large';
  /** Estado deshabilitado del botón */
  disabled?: boolean;
  /** Carga de estado async */
  loading?: boolean;
  /** Icono opcional al inicio */
  startIcon?: React.ReactNode;
  /** Icono opcional al final */
  endIcon?: React.ReactNode;
  /** Etiqueta accesible para tecnologías de asistencia */
  ariaLabel?: string;
  /** Descripción adicional para aria-describedby */
  ariaDescribedBy?: string;
  /** Indica si el botón controla un elemento expandido */
  ariaExpanded?: boolean;
  /** Indica si el botón tiene un popup asociado */
  ariaHasPopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  /** ID del elemento que el botón controla */
  ariaControls?: string;
  /** Indica el comportamiento de pressed para toggle buttons */
  ariaPressed?: boolean;
  /** Callback ejecutado al hacer click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback ejecutado al enfocar */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** Callback ejecutado al perder el foco */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** Clase CSS adicional */
  className?: string;
  /** Estilos inline adicionales */
  style?: React.CSSProperties;
  /** Test id para testing */
  testId?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  ariaLabel,
  ariaDescribedBy,
  ariaExpanded,
  ariaHasPopup,
  ariaControls,
  ariaPressed,
  onClick,
  onFocus,
  onBlur,
  className = '',
  style,
  testId,
}) => {
  const isDisabled = disabled || loading;

  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    loading && 'btn--loading',
    isDisabled && 'btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  const getAriaAttributes = (): React.AriaAttributes => {
    const attributes: React.AriaAttributes = {};

    if (ariaLabel) {
      attributes['aria-label'] = ariaLabel;
    }

    if (ariaDescribedBy) {
      attributes['aria-describedby'] = ariaDescribedBy;
    }

    if (ariaExpanded !== undefined) {
      attributes['aria-expanded'] = ariaExpanded;
    }

    if (ariaHasPopup) {
      attributes['aria-haspopup'] = ariaHasPopup;
    }

    if (ariaControls) {
      attributes['aria-controls'] = ariaControls;
    }

    if (ariaPressed !== undefined) {
      attributes['aria-pressed'] = ariaPressed;
    }

    if (loading) {
      attributes['aria-busy'] = true;
      attributes['aria-live'] = 'polite';
    }

    return attributes;
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={handleClick}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      data-testid={testId}
      {...getAriaAttributes()}
    >
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="31.4 31.4"
            />
          </svg>
        </span>
      )}
      {!loading && startIcon && (
        <span className="btn__icon btn__icon--start" aria-hidden="true">
          {startIcon}
        </span>
      )}
      <span className="btn__text">{children}</span>
      {!loading && endIcon && (
        <span className="btn__icon btn__icon--end" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  );
};

Button.displayName = 'Button';