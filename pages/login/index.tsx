import styles from '@/styles/signin.module.css'
import React, { useEffect } from 'react'
import { NextPage } from 'next'
import useMutation from '@/libs/client/useMutation'
import { useRouter } from 'next/router'
import SignHeader from '@/components/SignHeader'
import useTogglePassword from '@/hooks/useTogglePassword'
import useSignUpForm from '@/hooks/useSignUpForm'
import { LoginForm } from '@/types/sign'

const Login: NextPage = () => {
  const [enter, { loading, data, error }] = useMutation(
    'https://bootcamp-api.codeit.kr/api/sign-in',
  )
  const router = useRouter()
  const { register, handleSubmit, errors } = useSignUpForm()
  const { showPassword, toggleShowPassword } = useTogglePassword()

  const onValid = (data: LoginForm) => {
    enter(data)
  }

  useEffect(() => {
    if (data?.data?.accessToken) {
      sessionStorage.setItem('accessToken', data.data.accessToken)
      router.push('/folder')
    }
  }, [data, router])

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
            <div className={styles.sign_box_input}>
              <label htmlFor="email">이메일</label>
              <input
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                })}
                type="text"
                placeholder="Email"
                className={styles.input}
              />
              <p className="error_msg">{errors.email?.message}</p>
            </div>
            <div className={styles.sign_box_input}>
              <label htmlFor="password">비밀번호</label>
              <input
                {...register('password', {
                  required: '패스워드를 입력해주세요.',
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: '영문, 숫자 조합 8자 이상 입력해주세요.',
                  },
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                className={styles.input}
              />
              <button
                onClick={() => toggleShowPassword('password')}
                type="button"
                className={`${styles.eyeButton} ${showPassword.password ? styles.eyeOff : styles.eyeOn}`}
              />
              <p className="error_msg">{errors.password?.message}</p>
            </div>
          </div>
          <input type="submit" value="로그인" />
        </form>
      </div>
    </main>
  )
}

export default Login
