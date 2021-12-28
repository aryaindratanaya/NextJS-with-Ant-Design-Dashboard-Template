import { createContext, useContext } from 'react'

import { useRouter } from 'next/router'

import toast from 'libs/utils/toast'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const router = useRouter()

  const authenticate = (data) => {
    const { username, password, remember } = data

    if (username === 'admin' && password === 'admin' && remember) {
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
    router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
