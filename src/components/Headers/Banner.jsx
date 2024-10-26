import PropTypes from 'prop-types';
const Banner = ({handleClickCoin}) => {
    return (
            <section className='container mx-auto'>
                <div className="relative overflow-hidden px-3 pt-5">
                    <img className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl bg-[#131313]" src="https://i.ibb.co.com/k11RYNk/bg-shadow.png" alt="" />
                    <div className="absolute overflow-hidden top-0 left-0 right-0 bottom-0 max-w-screen-sm lg:max-w-screen-lg mx-auto py-6 md:py-10  text-center">
                        <img className=" w-28 md:w-60 md:h-50 inline-block mb-2" src="https://i.ibb.co.com/9h6MFfM/banner-main.png" alt="" />
                        <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold md:mt-5">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="text-[#FFFFFFB3] text-sm md:text-2xl font-medium mt-2 md:my-4 Inter-font">Beyond Boundaries Beyond Limits</p>
                        <button onClick={handleClickCoin} className="btn border bg-[#E7FE29]  text-black text-base  mt-4 md:mt-4">Claim Free Credit</button>
                    </div>
                </div>
            </section>
    );
};
Banner.propTypes = {
   
    handleClickCoin:PropTypes.func
    
    
};
export default Banner;