import '../../../src/main'

import PropTypes from 'prop-types';
import Cricket from './Cricket';
import Selected from './selected';
const Button = ({ handleToggleButton, isActive, handleClickAllPlayers , selected ,handleAddMoreBtn , handleDelete }) => {
  console.log(typeof selected)
    return (
       <section className='container mx-auto'>
            <div className=" my-5 ">
            {/* sticky top-28 z-50 backdrop:blur-sm  */}
                <div className=" flex justify-center md:justify-end ">
                    <div className=" border-2 rounded-lg my-5">
                        <button onClick={()=>handleToggleButton("Available")} className={`px-5 py-3 border-none  text-base font-bold ${isActive.cart ? 'active' : 'unActive'} `}>Available</button>
                        <button onClick={()=>handleToggleButton("Selected")}  className={`px-5 py-3 text-base  font-bold ${isActive.cart ? 'unActive' : 'active'}`}>Selected({selected.length})</button>
                    </div>
                 </div>
                {isActive.cart ? <Cricket  handleClickAllPlayers={handleClickAllPlayers}></Cricket> : <Selected selected={selected} handleDelete={handleDelete} handleAddMoreBtn={handleAddMoreBtn} ></Selected> }
             </div>
       </section>
    );
};
Button.propTypes = {
    handleToggleButton:PropTypes.func,
    isActive:PropTypes.object,
    handleClickAllPlayers:PropTypes.func,
    handleAddMoreBtn:PropTypes.func,
    handleDelete:PropTypes.func,
    selected:PropTypes.object.isRequired
   
};

export default Button;