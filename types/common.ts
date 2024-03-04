import { MouseEventHandler } from 'react'

export interface CloseButtonProps {
  onClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

export interface InputProps {
  label: string
  name: string
  type: string
  register: any
  validationRules: object
  error?: string
  toggleShowPassword?: () => void
  showPasswordButton?: boolean
}
