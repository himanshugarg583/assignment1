import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { RootLayout } from '@/app/layouts/RootLayout'
import { PageTransition } from '@/components/PageTransition'
import { CursorGlow } from '@/components/CursorGlow'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ScrollProgress } from '@/components/ScrollProgress'
import { useLenis } from '@/hooks/useLenis'

const Home = lazy(() => import('@/app/pages/Home'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<RootLayout />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  useLenis()

  return (
    <BrowserRouter>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center text-white">
            Loading...
          </div>
        }
      >
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  )
}
