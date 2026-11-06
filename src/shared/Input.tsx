import React from 'react';
import './Input.scss';

export interface InputProps {
  /** Tipo de input según HTML spec */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
  /** Nombre del campo para el formulario */
  name: string;
  /** Valor actual del input */
  value?: string;
  /** Placeholder visible */
  placeholder?: string;
  /** Etiqueta visible para el usuario */
  label: string;
  /** Descripción adicional debajo del input */
  description?: string;
  /** Indica si el campo es obligatorio */
  required?: boolean;
  /** Indica si el campo está deshabilitado */
  disabled?: boolean;
  /** Indica si el campo es de solo lectura */
  readOnly?: boolean;
  /** Indica si el valor es inválido */
  invalid?: boolean;
  /** Mensaje de error a mostrar */
  errorMessage?: string;
  /** Patrón de validación regex */
  pattern?: string;
  /** Longitud mínima */
  minLength?: number;
  /** Longitud máxima */
  maxLength?: number;
  /** Valor mínimo para inputs numéricos */
  min?: number | string;
  /** Valor máximo para inputs numéricos */
  max?: number | string;
  /** Paso para inputs numéricos */
  step?: number | string;
  /** Autocomplete attribute */
  autoComplete?: string;
  /** Autofocus al montar */
  autoFocus?: boolean;
  /** ID único del input */
  id?: string;
  /** ID del contenedor para aria-describedby */
  describedById?: string;
  /** Indica si el input tiene ayuda contextual */
  ariaHelpText?: string;
  /** Callback al cambiar el valor */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback al perder el foco */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback al obtener el foco */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback al presionar teclas */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Clase CSS adicional */
  className?: string;
  /** Estilos inline adicionales */
  style?: React.CSSProperties;
  /** Test id para testing */
  testId?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  value,
  placeholder,
  label,
  description,
  required = false,
  disabled = false,
  readOnly = false,
  invalid = false,
  errorMessage,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  step,
  autoComplete,
  autoFocus = false,
  id,
  describedById,
  ariaHelpText,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  className = '',
  style,
  testId,
}) => {
  const inputId = id || `input-${name}`;
  const errorId = `${inputId}-error`;
  const descriptionId = describedById || `${inputId}-description`;
  const helpTextId = ariaHelpText ? `${inputId}-help` : undefined;

  const hasError = invalid || (errorMessage && errorMessage.length > 0);
  const describedBy = [
    description ? descriptionId : null,
    hasError ? errorId : null,
    helpTextId,
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  const getInputClasses = (): string => {
    const classes = ['input__field'];
    if (hasError) classes.push('input__field--error');
    if (disabled) classes.push('input__field--disabled');
    return classes.join(' ');
  };

  return (
    <div
      className={`input ${hasError ? 'input--invalid' : ''} ${disabled ? 'input--disabled' : ''} ${className}`}
      style={style}
      data-testid={testId}
    >
      <label htmlFor={inputId} className="input__label">
        {label}
        {required && <span className="input__required" aria-hidden="true"> *</span>}
      </label>

      {description && !hasError && (
        <p id={descriptionId} className="input__description">
          {description}
        </p>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={getInputClasses()}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        aria-invalid={hasError}
        aria-required={required}
        aria-describedby={describedBy || undefined}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        {...(helpTextId && { 'aria-describedby': `${describedBy} ${helpTextId}`.trim() })}
      />

      {hasError && errorMessage && (
        <p id={errorId} className="input__error" role="alert" aria-live="polite">
          {errorMessage}
        </p>
      )}

      {ariaHelpText && !hasError && (
        <p id={helpTextId} className="input__help">
          {ariaHelpText}
        </p>
      )}
    </div>
  );
};

Input.displayName = 'Input';