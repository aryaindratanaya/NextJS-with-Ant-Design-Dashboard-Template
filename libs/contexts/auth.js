import { createContext, useContext, useState } from 'react'

import { useRouter } from 'next/router'

import toast from 'libs/utils/toast'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const router = useRouter()

  const [isAuth, setAuth] = useState(false)

  const authenticate = (data) => {
    const { username, password, remember } = data
    if (username === 'admin' && password === 'admin' && remember) {
      setAuth(true)
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

  const logout = () => setAuth(false)

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
