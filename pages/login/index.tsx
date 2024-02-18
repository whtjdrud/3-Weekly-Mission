import styles from '@/styles/signin.module.css'
import React, { useState } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { NextPage } from 'next'

interface LoginForm {
  email: string
  password: string
}
const Login: NextPage = () => {
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onBlur' })

  const onValid = (data: LoginForm) => {
    setSubmitting(true)
    fetch('/api/sign-in', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => setSubmitting(false))
  }

  const onInvalid = (errors: FieldErrors) => {}

  return (
    <main className={styles.main}>
      <div className={styles.sign_box}>
        <form
          id="sign_form"
          className={styles.signForm}
          onSubmit={handleSubmit(onValid, onInvalid)}
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
                type="password"
                placeholder="password"
                className={styles.input}
              />
              <p className="error_msg">{errors.password?.message}</p>
            </div>
          </div>
          <input type="submit" value={submitting ? 'Loading' : '로그인'} />
        </form>
      </div>
    </main>
  )
}

export default Login
