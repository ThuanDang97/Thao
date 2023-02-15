import { ErrorBoundary } from '@components/ErrorBoundary'
import { Spinner } from '@components/Spinner'
import { AppProvider } from '@contexts/AppContext'
import { render } from '@testing-library/react'
import { ReactNode, Suspense } from 'react'

export const customRender = (component: ReactNode) => {
  return render(
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <AppProvider>{component}</AppProvider>
      </Suspense>
    </ErrorBoundary>,
  )
}

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'
export { customRender as render }
