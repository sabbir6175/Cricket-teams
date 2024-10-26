
const Footer = () => {
    return (
        <section className="bg-[#06091A] mt-10">
            <div className="container mx-auto pt-48">
                 <div className="text-center">
                    <img className="inline-block " src="https://i.ibb.co.com/6WJ7thv/logo-footer.png" alt="logo" />
                 </div>
                 <footer className="footer my-10 px-2">
                        <nav>
                            <h6 className="text-lg font-semibold mb-5 text-white">About Us</h6>
                            <p className="text-base font-normal text-[#FFFFFF99] ">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                        </nav>
                        <nav>
                            <h6 className="text-lg font-semibold mb-5 text-white ">Quick Links</h6>
                            <li className="list-disc text-white ml-3"><a className="text-base font-normal text-[#FFFFFF99] link link-hover">Home</a></li>
                            <li className="list-disc text-white ml-3"><a className="text-base font-normal text-[#FFFFFF99] link link-hover">Services</a></li>
                            <li className="list-disc text-white ml-3"><a className="text-base font-normal text-[#FFFFFF99] link link-hover">About</a></li>
                            <li className="list-disc text-white ml-3"><a className="text-base font-normal text-[#FFFFFF99] link link-hover">Contact</a></li>
                            
                        </nav>
                        <form className="">
                            <h6 className="text-lg font-semibold mb-5 text-white">Subscribe</h6>
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="text-base font-normal text-[#FFFFFF99]">Subscribe to our newsletter for the <br /> latest updates.</span>
                                </label>
                                <div className="join my-3">
                                    <input type="text" placeholder="Enter your email" className="input w-2/3 text-black input-bordered join-item" required />
                                    <button className="btn text-black font-bold join-item bg-gradient-to-r from-orange-200 via-orange-300 to-red-400">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                </footer>
                
                <div>
                    <p className="text-center font-normal text-base text-[#FFFFFF99]">@2024 Your Company All Rights Reserved.</p>
                </div>
             </div>
        </section>
    );
};

export default Footer;