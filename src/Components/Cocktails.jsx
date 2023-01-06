import React , { useContext } from 'react';

// import context
import { CocktailContext } from '../Contexts/CocktailProvider';
import { SearchContext } from "../Contexts/SearchProvider"

// components
import Cocktail from './Cocktail';

// icons
import {GoAlert} from 'react-icons/go';

const Cocktails = () => {

    const {loading , error} = useContext(CocktailContext);
    const {filteredCocktails} = useContext(SearchContext);

    return (
        <div className="w-full flex flex-wrap justify-center 
        gap-y-24 gap-x-8 mt-40 mb-20 px-8">
            {
                error 
                ? 
                    <div className='flex items-center justify-start gap-4 py-4 px-6
                    bg-red-600 text-white text-xl'>
                        <GoAlert />
                        {error}
                    </div>
                :
                    ( loading 
                    ? 
                        <span className='block h-12 w-12 bg-transparent
                        rounded-full border-[5px] border-green-600 border-b-transparent animate-spin'>
                        </span>
                    :   
                        filteredCocktails.map(drink => <Cocktail key={drink.idDrink} {...drink}/>)
                    )
            }
        </div>
    );
};

export default Cocktails;