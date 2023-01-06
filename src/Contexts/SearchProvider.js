import React , {  useState , useContext , createContext} from 'react';

// import context
import { CocktailContext } from './CocktailProvider';

// export context
export const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [search , setSearch] = useState('');
    const {cocktails} = useContext(CocktailContext);
    const filteredCocktails = cocktails.filter(cocktail => cocktail.strDrink.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <SearchContext.Provider value={{search , setSearch , filteredCocktails}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;