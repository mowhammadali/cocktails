import React , {createContext, useEffect, useState} from 'react';
import axios from 'axios';

// export context
export const CocktailContext = createContext();

// URL
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

const CocktailProvider = ({children}) => {
    
    // use state
    const [cocktails , setCocktails] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState('');

    // use effect
    useEffect(() => {
        const getApi = async () => {
            try{
                const response = await axios.get(URL);
                setCocktails(response.data.drinks.reverse());
                setLoading(false);
                setError("");
            }
            catch (err) {
                setCocktails([]);
                setLoading(true);
                setError(err.message);
            }
        }
        getApi();
    } , [])

    return (
        <CocktailContext.Provider value={{cocktails , loading , error}}>
            {children}
        </CocktailContext.Provider>
    );
};

export default CocktailProvider;