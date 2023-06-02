import './App.css'
import Infopage from './components/InfoPage'
import LoginPage from './components/LoginPage'

function App() {


  return (
    <>
      <main className="flex h-screen lg:p-10 p-12 lg:gap-2 gap-4 xl:gap-6">
        <Infopage></Infopage>
        <LoginPage></LoginPage>
      </main>
    </>
  )
}

export default App
