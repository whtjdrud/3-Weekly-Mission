import React, { ChangeEventHandler, useState } from 'react'
import styles from './input.module.css'

interface PasswordInputProps {
  value: string
  label: string
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  error?: string
}
const PasswordInput: React.FC<PasswordInputProps> = ({
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

  const [showPassword, setShowPassword] = useState(false)
  const eyeButtonClassName = showPassword
    ? `${styles.eyeButton} ${styles.eyeOff}`
    : `${styles.eyeButton} ${styles.eyeOn}`
  return (
    <div className={styles.sign_box_input}>
      <label htmlFor={name}>{label}</label>
      <input
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClassName}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        type="button"
        className={eyeButtonClassName}
      />
      <p className="error_msg">{error}</p>
    </div>
  )
}
export default PasswordInput
