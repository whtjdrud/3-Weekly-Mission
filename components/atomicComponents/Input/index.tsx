import React from 'react'
import styles from '@/styles/signin.module.css'

interface InputProps {
  label: string
  name: string
  type: string
  register: any
  validationRules: object
  error?: string
  toggleShowPassword?: () => void
  showPasswordButton?: boolean
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  register,
  validationRules,
  error,
  toggleShowPassword,
  showPasswordButton = false,
}) => {
  return (
    <div className={styles.sign_box_input}>
      <label htmlFor={label}>{label}</label>
      <input
        {...register(name, validationRules)}
        type={type}
        placeholder={label}
        className={styles.input}
      />
      {showPasswordButton && (
        <button
          onClick={toggleShowPassword}
          type="button"
          className={`${styles.eyeButton} ${type === 'text' ? styles.eyeOff : styles.eyeOn}`}
        />
      )}
      {error && <p className="error_msg">{error}</p>}
    </div>
  )
}

export default Input
