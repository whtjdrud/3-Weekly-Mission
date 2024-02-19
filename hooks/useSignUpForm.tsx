import { useForm } from 'react-hook-form'
import { SignUpForm } from '@/types/sign'

const useSignUpForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({ mode: 'onBlur' })

  const password = watch('password')
  const email = watch('email')

  return {
    register,
    handleSubmit,
    errors,
    password,
    email,
  }
}

export default useSignUpForm
