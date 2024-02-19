import styles from '@/styles/signin.module.css'
import React from 'react'
import { NextPage } from 'next'
import useMutation from '@/libs/client/useMutation'
import SignHeader from '@/components/SignHeader'
import { SignUpForm } from '@/types/sign'
import useSignUpForm from '@/hooks/useSignUpForm'
import useTogglePassword from '@/hooks/useTogglePassword'
import Input from '@/components/atomicComponents/Input'

const SignUp: NextPage = () => {
  const { register, handleSubmit, errors, password } = useSignUpForm()
  const { showPassword, toggleShowPassword } = useTogglePassword()

  const [enter, { loading, data, error }] = useMutation(
    'https://bootcamp-api.codeit.kr/api/sign-in',
  )

  const onValid = (data: SignUpForm) => {}

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
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: '올바른 이메일 형식이 아닙니다.',
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
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: '영문, 숫자 조합 8자 이상 입력해주세요.',
                },
              }}
              error={errors.password?.message}
              toggleShowPassword={() => toggleShowPassword('password')}
              showPasswordButton={true}
            />
            <Input
              label="비밀번호 확인"
              type={showPassword.passwordchk ? 'text' : 'password'}
              name="passwordcheck"
              register={register}
              validationRules={{
                required: '패스워드 확인을 입력해주세요.',
                validate: (value: string) =>
                  value === password || '비밀번호가 일치하지 않습니다.',
              }}
              error={errors.passwordCheck?.message}
              toggleShowPassword={() => toggleShowPassword('passwordchk')}
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
