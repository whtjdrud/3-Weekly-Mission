import { useState } from 'react'

const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordchk: false,
  })

  const toggleShowPassword = (field: 'password' | 'passwordchk') => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }))
  }

  return { showPassword, toggleShowPassword }
}
export default useTogglePassword
