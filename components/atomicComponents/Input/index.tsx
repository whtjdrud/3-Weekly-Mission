import React from 'react'
import styles from '@/styles/signin.module.css'
import { InputProps } from '@/types/common'

const Input = ({
  label,
  name,
  type,
  register,
  validationRules,
  error,
  toggleShowPassword,
  showPasswordButton = false,
}: InputProps) => {
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
