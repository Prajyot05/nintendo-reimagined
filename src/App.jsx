import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='app bg-black min-h-screen'>
      <NavBar />
      <div className="main">
        <HomePage />
      </div>
    </div>
  )
}

export default App
