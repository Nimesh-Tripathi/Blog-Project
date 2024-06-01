import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authservice from './Appwrite/Auth'
import { login , logout} from './store/authSlice'
import { Header , Footer } from './Components/Index'

function App() {

  const [loading , setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect ( () => {
    authservice.getCurrentUser()
    .then( (userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setloading(false))
  },[])



  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
      <Header></Header>
      <Footer></Footer>
      </div>
    </div>
  ) : (null)

 

  

 
}

export default App
