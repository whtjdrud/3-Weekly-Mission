import React, { ChangeEventHandler } from 'react'
import styles from './input.module.css'

interface InputProps {
  type: string
  value: string
  label: string
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  error?: string
}
const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  label,
  onChange,
  placeholder = '',
  error = '',
}) => {
  const inputClassName = error
    ? `${styles.input} ${styles.input_error}`
    : styles.input

  return (
    <div className={styles.sign_box_input}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClassName}
      />
      <p className="error_msg">{error}</p>
    </div>
  )
}
export default Input
