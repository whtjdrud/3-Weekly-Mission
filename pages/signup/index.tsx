import styles from '@/styles/signin.module.css'
import React, { useEffect, useState } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { NextPage } from 'next'
import useMutation from '@/libs/client/useMutation'
import { useRouter } from 'next/router'
import SignHeader from '@/components/SignHeader'

interface SignUpForm {
  email: string
  password: string
  passwordchk: string
}
const SignUp: NextPage = () => {
  const [enter, { loading, data, error }] = useMutation(
    'https://bootcamp-api.codeit.kr/api/sign-in',
  )
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({ mode: 'onBlur' })

  const router = useRouter()
  const password = watch('password')

  const onValid = (data: SignUpForm) => {
    enter(data)
  }

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
                type={showPassword.password ? 'text' : 'password'}
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
            <div className={styles.sign_box_input}>
              <label htmlFor="password">비밀번호 확인</label>
              <input
                {...register('passwordchk', {
                  required: '패스워드를 입력해주세요.',
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: '영문, 숫자 조합 8자 이상 입력해주세요.',
                  },
                  validate: (value) =>
                    value === password || '비밀번호가 일치하지 않습니다.',
                })}
                type={showPassword.passwordchk ? 'text' : 'password'}
                placeholder="password"
                className={styles.input}
              />

              <button
                onClick={() => toggleShowPassword('passwordchk')}
                type="button"
                className={`${styles.eyeButton} ${showPassword.passwordchk ? styles.eyeOff : styles.eyeOn}`}
              />
              <p className="error_msg">{errors.passwordchk?.message}</p>
            </div>
          </div>
          <input type="submit" value="회원가입" />
        </form>
      </div>
    </main>
  )
}

export default SignUp
