
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer Section/Footer'
import Header from './components/Headers/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coins, setCoins] = useState(0)
  const [allPlayers, setAllPlayers] =useState([])

  const handleClickAllPlayers =(players)=>{
    setAllPlayers(...allPlayers, players)
  }
  console.log(allPlayers)
  // claim free credit button
    const handleClickCoin =()=>{
       setCoins(coins + 4500000)
       toast.success('Credit added to you Account',{
        position: 'top-center',
       })
    }


  return (
    <>
      <Header coins={coins} handleClickCoin ={handleClickCoin} handleClickAllPlayers={handleClickAllPlayers} allPlayers={allPlayers} ></Header>
      {/* footer section er footer component */}
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
