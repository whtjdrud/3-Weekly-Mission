import styles from '@/styles/signin.module.css'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import SignHeader from '@/components/SignHeader'
import useTogglePassword from '@/hooks/useTogglePassword'
import useSignUpForm from '@/hooks/useSignUpForm'
import { LoginForm } from '@/types/sign'
import Input from '@/components/atomicComponents/Input'
import { emailPattern, passwordPattern } from '@/utils/regexPatterns'
import { withAuth } from '@/contexts/AuthProvider'
import {
  EMAIL_FORMAT_INVALID,
  EMAIL_IS_EMPTY,
  PASSWORD_FORMAT_INVALID,
  PASSWORD_IS_EMPTY,
} from '@/constants/errorMessage'
import { useLoginUser } from '@/libs/client/useLoginUser'

const Login: NextPage = () => {
  const router = useRouter()
  const { register, handleSubmit, errors } = useSignUpForm()
  const { showPassword, toggleShowPassword } = useTogglePassword()

  const onValid = async (data: LoginForm) => {
    await useLoginUser(data)
    await router.push('/folder')
  }

  return (
    <main className={styles.main}>
      <SignHeader />
      <div className={styles.sign_box}>
        <form
          id="sign_form"
          className={styles.sign_form}
          onSubmit={handleSubmit(onValid)}
        >
          <div className={styles.sign_box_inputs}>
            <Input
              label="이메일"
              type="text"
              name="email"
              register={register}
              validationRules={{
                required: EMAIL_IS_EMPTY,
                pattern: {
                  value: emailPattern,
                  message: EMAIL_FORMAT_INVALID,
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
                required: PASSWORD_IS_EMPTY,
                pattern: {
                  value: passwordPattern,
                  message: PASSWORD_FORMAT_INVALID,
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
export const getServerSideProps = withAuth(
  async (context, user) => {
    return { props: {} }
  },
  { reverseRedirect: true },
)
export default Login
