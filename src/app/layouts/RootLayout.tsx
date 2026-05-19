import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Helmet>
        <title>EG trans | Road Freight & Warehousing</title>
        <meta
          name="description"
          content="EG trans provides road freight, warehousing, and distribution services across Australia with real-time visibility."
        />
      </Helmet>
      <Navbar />
      <main className="pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
