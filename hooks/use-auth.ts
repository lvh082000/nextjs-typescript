import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'
import { authApi } from '@/api'

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile

  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60000,
    revalidateOnFocus: false,
    ...options,
  })

  async function login() {
    await authApi.login({
      username: 'test',
      password: '123123',
    })

    // reset profile
    await mutate()
  }

  async function logout() {
    await authApi.logout()
    // remove data
    await mutate({}, false)
  }

  async function getProfile() {}

  return {
    profile,
    error,
    login,
    logout,
    getProfile,
  }
}
