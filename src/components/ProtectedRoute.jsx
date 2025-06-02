import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { RaceBy } from '@uiball/loaders'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <h1>
        Cargando <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      </h1>
    )
  }

  if (!user) {
    return <Navigate to='/login' replace />
  }

  return <>{children}</>
}
