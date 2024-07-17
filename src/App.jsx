import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Page2 from './pages/Page2'

function App() {

  return (
    <div className='app bg-black min-h-screen'>
      <NavBar />
      <div className="main">
        <HomePage />
        <Page2 />
      </div>
    </div>
  )
}

export default App
