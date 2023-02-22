import Header from '../components/Header'
import { Login } from '../components/Login'

export default function Home() {
  return (
    <>
      <main className='container w-full max-w-screen-lg mx-auto mr-auto my-0'>
        <Header />
        <Login />
      </main>
    </>
  )
}
