import styles from '@/styles/signin.module.css'
import React, { useEffect } from 'react'
import { NextPage } from 'next'
import SignHeader from '@/components/SignHeader'
import { LoginForm } from '@/types/sign'
import useSignUpForm from '@/hooks/useSignUpForm'
import useTogglePassword from '@/hooks/useTogglePassword'
import Input from '@/components/atomicComponents/Input'
import { useRouter } from 'next/router'
import { emailPattern, passwordPattern } from '@/utils/regexPatterns'
import { useCheckDuplicateEmail } from '@/libs/client/useCheckDuplicateEmail'
import { useAuth } from '@/contexts/AuthProvider'

const SignUp: NextPage = () => {
  const { register, handleSubmit, errors, password, email } = useSignUpForm()
  const { showPassword, toggleShowPassword } = useTogglePassword()

  const { user, signUp } = useAuth(false)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/folder')
    }
  })

  const onValid = async (data: LoginForm) => {
    try {
      signUp(data)
      await router.push('/folder')
    } catch (error) {
      console.log(error)
    }
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
                validate: {
                  asyncValidation: async (value: string) => {
                    const response = await useCheckDuplicateEmail(value)
                    if (response === true) {
                      return true
                    }
                    if (response.status === 409) {
                      return '이메일이 이미 사용 중입니다.'
                    }
                    if (response.status === 500) {
                      return '서버 오류가 발생했습니다. 나중에 다시 시도해주세요.'
                    }
                    return `${response.status}: ${response.message}`
                  },
                },
              }}
              error={errors.email?.message}
            />
            <Input
              label="비밀번호"
              name="password"
              type={showPassword.password ? 'text' : 'password'}
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
            <Input
              label="비밀번호 확인"
              type={showPassword.passwordCheck ? 'text' : 'password'}
              name="passwordCheck"
              register={register}
              validationRules={{
                required: '패스워드 확인을 입력해주세요.',
                validate: (value: string) =>
                  value === password || '비밀번호가 일치하지 않습니다.',
              }}
              error={errors.passwordCheck?.message}
              toggleShowPassword={() => toggleShowPassword('passwordCheck')}
              showPasswordButton={true}
            />
          </div>
          <input type="submit" value="회원가입" />
        </form>
      </div>
    </main>
  )
}

export default SignUp
