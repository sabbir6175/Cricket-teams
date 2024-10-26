
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer Section/Footer'
import Header from './components/Headers/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './components/Main Section/Button';
import Banner from './components/Headers/Banner';

function App() {
  
  const [coins, setCoins] = useState(0)
  // choose players 
  const[selected, setSelected] = useState([]);
  // button active
  const [isActive, setIsActive] = useState({
    cart : true,
    status :"Available"
  })

// claim free credit button
   const handleClickCoin =()=>{
    setCoins(coins + 4500000)
    toast.success('Credit added to you Account',{
     position: 'top-center',
    })
 }

    // button active function
    const handleToggleButton = (status) => {
      if(status === "Available"){
        setIsActive({
            cart : true,
            status :"Available"
          })
      }
      else{
        setIsActive({
            cart : false,
            status :"Selected"
          })
      }
    }
  // console.log(isActive)
// choose players function
const handleClickAllPlayers = (player) => {
  const isExist = selected.find(prevSelect => prevSelect.players_id === player.players_id );
  const isPlayerExist = selected.length === 6 ;
    if(coins < player.bidding_price){
      toast.error('!Not enough money to buy this player.Claim some Credit'
        , {
          position: "top-center",
          autoClose: 2000
          }
      );
    }
    else if(!isExist && !isPlayerExist){
      toast.success(`Congrats! ${player.players_name} is now in your squad`
        , {
          position: "top-center",
          autoClose: 2000
          }
      );
        setSelected([...selected, player])
        setCoins(coins - player.bidding_price )
    }
  
    else if(selected.length === 6){
      setSelected(selected)
      setCoins(coins)
      toast.error('Sorry, your player purchase limit has expired !'
        , {
          position: "top-center",
          autoClose: 2000
          }
      )
    }
    else{
      toast.warn(`Player ${player.players_name}  already selected`, {
          position: "top-center",
          autoClose: 2000
          }
      )
    }
  
  }
  // deleted players function
  const handleDelete =(id, players_name) =>{
    const newPlayers = selected.filter(player => player.players_id !== id)
    setSelected(newPlayers);

    toast.success(`players ${players_name} remove`,{
      position: "top-center",
      autoClose: 2000
      
    }
  )
  }
  //add more button 
  const handleAddToMore =(status) => {
    if(status === "Available"){
      setIsActive(
        {
          cart : true,
          status :"Available"
        }
      )
    }
    else{
      setIsActive(
        {
          cart : false,
          status :"Selected"
        }
      )
    }
  }
  
  return (
    <>
     <div className='container mx-auto '>
          <Header coins={coins} ></Header>
          <Banner handleClickCoin ={handleClickCoin}></Banner>
      </div>
            <Button 
              isActive={isActive} 
              handleToggleButton={handleToggleButton} 
              handleClickAllPlayers={handleClickAllPlayers}
              selected ={selected}
              handleDelete={handleDelete}
              handleAddToMore={handleAddToMore}
            ></Button>
        
              {/* footer section er footer component */}
              <Footer></Footer>
       
       
      <ToastContainer />
    </>
  )
}

export default App
