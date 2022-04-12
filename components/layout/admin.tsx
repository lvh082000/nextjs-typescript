import { Auth } from '@/components/common'
import { useAuth } from '@/hooks'
import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

export function AdminLayout({ children }: LayoutProps) {
  const { logout } = useAuth()

  const router = useRouter()

  async function handleLogoutClick() {
    try {
      await logout()
      router.push('/login')
    } catch (error) {}
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Side bar</div>

      <button onClick={handleLogoutClick}>Logout</button>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </Auth>
  )
}
