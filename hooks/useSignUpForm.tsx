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

  return {
    register,
    handleSubmit,
    errors,
    password,
  }
}

export default useSignUpForm
