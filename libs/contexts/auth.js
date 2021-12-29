import { createContext, useContext } from 'react'
import { useCookies } from 'react-cookie'

import { useRouter } from 'next/router'

import toast from 'libs/utils/toast'
import config from 'config'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const router = useRouter()
  const [_, setCookie, removeCookie] = useCookies([config.COOKIE_NAME])

  const isAuth = true

  const authenticate = (data) => {
    const { username, password, remember } = data

    if (username === 'admin' && password === 'admin' && remember) {
      setCookie('access_token', 'justanotherrandomstring', {
        path: '/',
      })

      toast({ message: 'Hi, *User Name*!' })
      router.push('/dashboard')
    } else {
      toast({
        type: 'error',
        message: 'Oops!',
        description: 'Username and password do not match',
      })
    }
  }

  const logout = () => {
    removeCookie('access_token')
    router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
