import { Outlet } from 'react-router'
import { Footer } from '../Components/Shared/Footer/Footer'
import { Header } from '../Components/Shared/Header/Header'

export const PublicLayout = () => {
  return (
    <>
      <header className="shrink-0">
        <Header />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="shrink-0">
        <Footer />
      </footer>
    </>
  )
}
