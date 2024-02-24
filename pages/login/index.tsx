import styles from '@/styles/signin.module.css'
import React, { useEffect } from 'react'
import { NextPage } from 'next'
import useMutation from '@/libs/client/useMutation'
import { useRouter } from 'next/router'
import SignHeader from '@/components/SignHeader'
import useTogglePassword from '@/hooks/useTogglePassword'
import useSignUpForm from '@/hooks/useSignUpForm'
import { LoginForm } from '@/types/sign'
import Input from '@/components/atomicComponents/Input'
import { emailPattern, passwordPattern } from '@/utils/regexPatterns'
import axios from 'axios'

const Login: NextPage = () => {
  const router = useRouter()
  const { register, handleSubmit, errors } = useSignUpForm()
  const { showPassword, toggleShowPassword } = useTogglePassword()

  const onValid = async (data: LoginForm) => {
    const response = await axios.post(
      'https://bootcamp-api.codeit.kr/api/sign-in',
      data,
    )
    const { accessToken, refreshToken } = response.data.data

    const expires = new Date()
    expires.setDate(expires.getDate() + 1)

    //localtest로 인해 HttpOnly; Secure는 삭제
    document.cookie = `access_token=${accessToken}; Path=/; Expires=${expires.toUTCString()};`
    document.cookie = `refresh_token=${refreshToken}; Path=/; Expires=${expires.toUTCString()};`
    sessionStorage.setItem('accessToken', accessToken)

    router.push('/folder')
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
