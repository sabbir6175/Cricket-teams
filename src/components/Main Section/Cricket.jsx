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
        <div className=" container mx-auto pt-5  px-1 pb-60 z-50">
            {/* 2 button  */}
            <div>
                <h1 className="text-2xl font-bold my-5">Available Players</h1>
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
           
        </div>
    
    );
};
Cricket.propTypes = {
    handleClickAllPlayers:PropTypes.func,
   
};

export default Cricket;



