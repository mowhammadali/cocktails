import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

// import context
import { FavoriteContext } from '../Contexts/FavoriteProvider';

import Cocktail from './Cocktail';

const Favorites = () => {

    const {state} = useContext(FavoriteContext);

    return (
        <div className='text-center my-20'>
            {
                state.favoriteItems.length 
                ? 
                    <>
                        <h1 className='text-3xl select-none'>Favorites</h1>
                        <div className="w-full flex flex-wrap justify-center 
                        gap-y-24 gap-x-8 my-20 px-8">
                            {state.favoriteItems.map(item => <Cocktail key={item.idDrink} {...item}/>)}
                        </div>
                    </>
                : 
                    <div className='flex flex-col items-center gap-y-4'>
                        <h1 className='text-3xl select-none'>No items here</h1>
                        <Link to='/' className='btn bg-green-600 text-lg py-2 px-4 rounded-full hover:opacity-90'>Back to Home</Link>
                    </div>
            }
        </div>
    );
};

export default Favorites;