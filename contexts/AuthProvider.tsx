import axiosInstance from '@/libs/axiosInstance'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { User } from '@/types/user'

export function withAuth(
  gssp: (
    context: GetServerSidePropsContext,
    user: User,
  ) => Promise<GetServerSidePropsResult<any>>,
  options: { reverseRedirect?: boolean } = {},
) {
  return async (
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<any>> => {
    try {
      const accessToken = context.req.cookies.accessToken

      if (!accessToken) {
        if (options.reverseRedirect) {
          return await gssp(context, {
            id: '',
            email: '',
            imageSource: '',
            name: '',
          })
        }
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      }

      const userResponse = await axiosInstance.get('/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      const {
        id,
        email,
        image_source: imageSource,
        name,
      } = userResponse.data[0]

      if (!id || !email || !imageSource || !name) {
        throw new Error('Invalid user object')
      }

      const user = { id, email, imageSource, name }

      if (options.reverseRedirect) {
        return {
          redirect: {
            destination: '/folder',
            permanent: false,
          },
        }
      }

      return await gssp(context, user)
    } catch (error) {
      console.error('Authentication error:', error)
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
  }
}
