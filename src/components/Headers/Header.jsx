import Cricket from "../Main Section/Cricket";
import PropTypes from 'prop-types';


const Header = ({handleClickCoin,coins,handleClickAllPlayers}) => {
    return (
       <div className=" container mx-auto  ">
            {/* navbar */}
                <nav className="flex justify-between items-center bg-white py-5 px-2 md:px-0 sticky top-0 backdrop-blur-md z-50 ">
                    <div >
                        <img className="md:w-15" src="https://i.ibb.co.com/vP7zvTX/logo.png" alt="" />
                    </div>
                    <div className="flex items-center gap-5">
                        <ul className="md:flex md:gap-4 hidden ">
                            <li className="hover:bg-lime-300 p-2 rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Home</a></li>
                            <li className="hover:bg-lime-300 p-2 rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Fixture</a></li>
                            <li className="hover:bg-lime-300 p-2 rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Teams</a></li>
                            <li className="hover:bg-lime-300 p-2 rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Schedules</a></li>
                        </ul>
                        {/* button */}
                        <button  className="btn flex gap-1 items-center"><span >{coins}</span>Coin <img src="https://i.ibb.co.com/KLkNFWp/coin.png" alt="" /></button>
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" block md:hidden m-2"><i className="fa-solid fa-bars text-2xl"></i></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1]  shadow">
                                <li className="hover:bg-lime-300  rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Home</a></li>
                                <li className="hover:bg-lime-300  rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Fixture</a></li>
                                <li className="hover:bg-lime-300  rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Teams</a></li>
                                <li className="hover:bg-lime-300  rounded-lg"><a className="text-base font-normal text-[#131313B3]" href="">Schedules</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            {/*Banner section */}
            <div className="relative overflow-hidden px-3">
                <img className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl bg-[#131313]" src="https://i.ibb.co.com/k11RYNk/bg-shadow.png" alt="" />
                <div className="absolute overflow-hidden top-0 left-0 right-0 bottom-0 max-w-screen-sm lg:max-w-screen-lg mx-auto py-6 md:py-10  text-center">
                    <img className=" w-28 md:w-60 md:h-50 inline-block mb-2" src="https://i.ibb.co.com/9h6MFfM/banner-main.png" alt="" />
                    <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold md:mt-5">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-[#FFFFFFB3] text-sm md:text-2xl font-medium mt-2 md:my-4 Inter-font">Beyond Boundaries Beyond Limits</p>
                    <button onClick={handleClickCoin} className="btn border bg-[#E7FE29]  text-black text-base  mt-4 md:mt-4">Claim Free Credit</button>
                </div>
            </div>
            {/* main section er cricket component */}
            <Cricket handleClickAllPlayers={handleClickAllPlayers} ></Cricket>
       </div>

    );
};

Header.propTypes = {
    handleClickCoin:PropTypes.func,
    coins:PropTypes.number,
    handleClickAllPlayers:PropTypes.func
};
export default Header;