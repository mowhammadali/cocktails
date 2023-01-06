import React, { useContext } from 'react';
import { NavLink  , useLocation} from 'react-router-dom';

// import context
import { FavoriteContext } from '../Contexts/FavoriteProvider';
import { SearchContext } from '../Contexts/SearchProvider';

const Header = () => {

    const {state} = useContext(FavoriteContext);
    const {search , setSearch} = useContext(SearchContext);
    const location = useLocation();
    
    return (
        <div className='flex justify-between items-center w-full 
        py-6 px-4 shadow-lg sm:px-8'>
            {/* links */}
            <div className='flex items-center gap-x-2 font-semibold 
            text-sm xs:text-base md:text-2xl xs:gap-x-4 md:gap-x-10'>
                <NavLink className={({isActive}) => `border-b-4
                border-green-600 ${isActive ? 'border-opacity-100' : 'border-opacity-0'}`} to='/'>
                    Drinks
                </NavLink>
                <div className='relative rounded-lg px-2'>
                    <NavLink className={({isActive}) => `border-b-4
                    border-green-600 ${isActive ? 'border-opacity-100' : 'border-opacity-0'}`} to='/favorites'>
                        Favorites
                    </NavLink>
                    <span className='flex justify-center items-center absolute 
                    h-5 w-5 rounded-full text-[14px] text-white bg-green-600
                    top-0 right-0 translate-x-[50%] translate-y-[-50%] 
                    md:h-7 md:w-7 md:text-[17px]'>
                        {state.favoriteItems.length}
                    </span>
                </div>
            </div>
            {/* search */}
            <div className={`flex items-center gap-10 ${location.pathname === '/favorites' && "invisible"}`}>
                <input className="border-[1px] border-secondary outline-none 
                bg-transparent px-4 py-1 w-36 rounded-full 
                xs:w-44 xs:py-2 sm:w-64" 
                type='text' placeholder='Search...'
                value={search} onChange={e => setSearch(e.target.value)}/>
            </div>
        </div>
    );
};

export default Header;