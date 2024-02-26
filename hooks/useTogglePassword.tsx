import { useState } from 'react'

const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordCheck: false,
  })

  const toggleShowPassword = (field: keyof typeof showPassword) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }))
  }

  return { showPassword, toggleShowPassword }
}
export default useTogglePassword
