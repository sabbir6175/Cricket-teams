import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';


const Cricket = ({handleClickAllPlayers}) => {
    const [playersData, setPlayersData] = useState([])
        useEffect(()=>{
            fetch('players.json')
                .then(res => res.json())
                .then(data => setPlayersData(data))
        },[])
    return (
        <div className=" container mx-auto pt-5  px-1">
            {/* 2 button  */}
            <div className="flex flex-col gap-3 md:flex-row justify-between items-center my-5  sticky top-28 z-50 backdrop:blur-sm ">
                <div>
                    <h1 className="text-2xl font-bold">Available Players</h1>
                </div>
                <div className="border-2 rounded-lg ">
                    <button className="px-5 py-2  border-none hover:bg-[#E7FE29] text-base font-bold ">Available</button>
                    <button className="px-5 py-2  text-base hover:bg-[#E7FE29] font-bold ">Selected <span>(0)</span></button>
                </div>
            </div>
            {/* batsman section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    playersData.map(playerData =>(
                        <div key={playerData.players_id} className="card bg-base-200 w-full shadow-xl border-2 p-5 ">
                            <figure>
                                <img
                                className="w-full h-60 bg-cover rounded-xl"
                                src={playerData.players_image}
                                alt="players_image" />
                            </figure>
                            <div className="flex gap-2 items-center my-3">
                                <i  className="fa-solid fa-user fa-fw text-xl"></i>
                                <h1 className="text-lg md:text-xl font-semibold">{playerData.players_name}</h1>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="text-gray-500 flex items-center gap-3">
                                     <i className="fa-solid fa-flag"></i>
                                    <span className="text-base font-normal ">{playerData.country}</span>
                                </div>
                                <button className="text-sm font-normal px-5 py-1 rounded-lg border-2 bg-[#1313130D]">{playerData.role}</button>
                            </div>
                            <div className="divider"></div>
                            <div >
                                <h4 className="text-base font-bold">Rating</h4>
                                <div className="flex justify-between items-center my-3">
                                    <h4 className="text-[15px] md:text-base font-medium">{playerData.batting_type}</h4>
                                    <h4 className="text-gray-500 text-[15px] md:text-base font-normal">{playerData.batting_type}</h4>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 my-2">
                                <p className="text-base font-medium ">Price:  ${playerData.bidding_price}</p>
                                <button onClick={()=>handleClickAllPlayers(playerData)} className="px-4 py-2 border-2 rounded-lg text-sm font-normal hover:bg-[#E7FE29]">Choose Player</button>
                            </div>
                        </div>
                    ))
                }
               
            </section>
            <section className=" p-5 border-2 border-white bg-transparent backdrop-blur-md rounded-2xl -mb-[200px] mt-20">
                <div className="relative overflow-hidden border-[2px] border-white rounded-[14px] ">
                    <img className="w-full h-[300px]  overflow-hidden rounded-xl bg-gray-100 " src="https://i.ibb.co.com/k11RYNk/bg-shadow.png" alt="" />
                    <div className="absolute overflow-hidden top-0 left-0 right-0 bottom-0 max-w-screen-sm lg:max-w-screen-lg mx-auto py-6 md:py-10  text-center place-content-center">
                        <h1 className=" text-xl md:text-3xl lg:text-4xl font-bold md:mt-5">Subscribe to our Newsletter</h1>
                        <p className=" text-base md:text-xl font-medium mt-2 md:my-4 Inter-font">Get the latest updates and news right in your inbox!</p>
                        
                        <div className="join my-3 place-content-center">
                            <input type="text" placeholder="Enter your email" className="input w-3/6  lg:w-full text-black input-bordered join-item" required />
                            <button className="btn text-black font-bold join-item bg-gradient-to-r from-orange-200 via-orange-300 to-red-400">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    
    );
};
Cricket.propTypes = {
    handleClickAllPlayers:PropTypes.func
};

export default Cricket;



