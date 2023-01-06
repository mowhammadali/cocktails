import React , { useContext } from 'react';

// import context
import { FavoriteContext } from '../Contexts/FavoriteProvider';

// icons
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

// helpers
import { check } from '../Helper/helpers';
import { notify } from '../Helper/helpers';

const Cocktail = (props) => {

    const {idDrink , strDrink , strDrinkThumb} = props;
    const {state , dispatch} = useContext(FavoriteContext);
    
    return (
        <div className='flex flex-col gap-6 p-2 pb-4 w-[280px]
        bg-card rounded-xl shadow-xl text-lg xs:w-[300px]'>
            <img className='rounded-t-xl select-none' alt='cocktail' src={strDrinkThumb}/>
            <p className='h-[50px] text-left'>{strDrink}</p>
            <div className='flex justify-between items-center'>
                <span>Drink code: {idDrink}</span>
                {
                    check(state , idDrink)
                    ? <AiFillHeart className='text-3xl cursor-pointer text-heart'
                    onClick={() => {dispatch({type: "REMOVE" , payload: props});  notify('You removed cocktail')} }/>
                    : <AiOutlineHeart className='text-3xl cursor-pointer text-heart'
                    onClick={() => {dispatch({type: "ADD" , payload: props}); notify('You added new Cocktail')} }/>
                }
            </div>
        </div>
    );
};

export default Cocktail;