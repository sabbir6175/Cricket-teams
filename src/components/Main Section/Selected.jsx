import PropTypes from 'prop-types';

const Selected = ({selected, handleDelete, handleAddMoreBtn}) => {
    // console.log(typeof selected)
    return (
        <div className='px-3 mb-60'>
            <h1 className="text-[28px] font-bold text-[#131313] mb-5">Selected Players({selected.length}/6) </h1>
            <div>
                {
                selected.map(select => <div key={select.players_id} className='flex justify-between w-full items-center p-2 border-2 border-gray-400 rounded-xl mb-5'>
                    <div className='flex gap-4 items-center'>
                    <div><img className='w-[60px] md:w-[100px] h-[80px] md:h-[100px] border-2 rounded-xl' src={select.players_image} alt="" /></div>
                    <div className='space-y-2'>
                        <h1 className='text-lg md:text-2xl font-bold'>{select.players_name}</h1>
                        <p className='text-gray-500'>{select.role}</p>
                        <p className='text-gray-500'>Price: {select.bidding_price}</p>
                    </div>
                    </div>
                    <div>
                        <button onClick={() =>handleDelete(select.players_id, select.players_name)}>
                            <img src="https://img.icons8.com/color/48/delete-forever.png" alt="" />
                        </button>
                    </div>
                </div>
                )
                }
            </div>

            <div className='border-2 bg-black rounded-xl w-[200px] flex justify-center p-1'>
                <button onClick={()=>handleAddMoreBtn('Available')} className='w-[184px] h-[48px] bg-[#E7FE29] rounded-xl text-[#131313] text-[18px] m-1'>Add More Player</button>
            </div>
        </div>
    
    );
};
Selected.propTypes = {
   
    selected:PropTypes.object,
    handleDelete:PropTypes.func,
    handleAddMoreBtn:PropTypes.func
   
};

export default Selected;