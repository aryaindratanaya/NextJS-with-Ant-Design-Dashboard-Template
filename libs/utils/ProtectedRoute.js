import Custom403 from 'pages/403'

import { useAuth } from 'libs/contexts/auth'

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth()

  if (isAuth) {
    return <>{children}</>
  } else {
    return <Custom403 />
  }
}
