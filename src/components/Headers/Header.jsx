
import PropTypes from 'prop-types';


const Header = ({coins}) => {
   
    return (
      
        <div className='sticky top-0 backdrop-blur-md z-10' >
            <nav className="flex justify-between items-center pt-5 px-2 md:px-0 ">
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
       </div>
       
    );
};

Header.propTypes = {
    coins:PropTypes.number,
    // handleClickCoin:PropTypes.func
    
    
};
export default Header;