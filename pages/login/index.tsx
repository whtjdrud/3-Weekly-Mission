import styles from '@/styles/signin.module.css'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import SignHeader from '@/components/SignHeader'
import useTogglePassword from '@/hooks/useTogglePassword'
import useSignUpForm from '@/hooks/useSignUpForm'
import { LoginForm } from '@/types/sign'
import Input from '@/components/atomicComponents/Input'
import { emailPattern, passwordPattern } from '@/utils/regexPatterns'
import { useAuth } from '@/contexts/AuthProvider'
import { useEffect } from 'react'

const Login: NextPage = () => {
  const router = useRouter()
  const { register, handleSubmit, errors } = useSignUpForm()
  const { showPassword, toggleShowPassword } = useTogglePassword()
  const { user, login } = useAuth(false)

  useEffect(() => {
    if (user) {
      router.push('/folder')
    }
  })
  const onValid = async (data: LoginForm) => {
    login(data)
  }

  return (
    <main className={styles.main}>
      <SignHeader />
      <div className={styles.sign_box}>
        <form
          id="sign_form"
          className={styles.signForm}
          onSubmit={handleSubmit(onValid)}
        >
          <div className={styles.sign_box_inputs}>
            <Input
              label="이메일"
              type="text"
              name="email"
              register={register}
              validationRules={{
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: emailPattern,
                  message: '올바른 이메일 형식이 아닙니다.',
                },
              }}
              error={errors.email?.message}
            />
            <Input
              label="비밀번호"
              type={showPassword.password ? 'text' : 'password'}
              name="password"
              register={register}
              validationRules={{
                required: '패스워드를 입력해주세요.',
                pattern: {
                  value: passwordPattern,
                  message: '영문, 숫자 조합 8자 이상 입력해주세요.',
                },
              }}
              error={errors.password?.message}
              toggleShowPassword={() => toggleShowPassword('password')}
              showPasswordButton={true}
            />
          </div>
          <input type="submit" value="로그인" />
        </form>
      </div>
    </main>
  )
}

export default Login
