import { ErrorBoundary } from '@components/ErrorBoundary'
import { Spinner } from '@components/Spinner'
import { AppProvider } from '@contexts/AppContext'
import Home from '@pages/Home'
import { Suspense } from 'react'

// Components
import './App.css'

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <AppProvider>
          <Home />
        </AppProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
