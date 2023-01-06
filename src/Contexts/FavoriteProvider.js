import React , { useReducer  , createContext } from 'react';

// export context
export const FavoriteContext = createContext();

// reduser
const initialValue = {
    favoriteItems: JSON.parse(localStorage.getItem('favorites')) || [],
}

const reducer = (state , action) => {
    switch(action.type){
        case "ADD":
            if(!state.favoriteItems.find(item => item.idDrink === action.payload.idDrink)){
                state.favoriteItems.push(action.payload);
            }
            localStorage.setItem('favorites' , JSON.stringify(state.favoriteItems));
            return {favoriteItems: [...state.favoriteItems]}
        case "REMOVE":
            const newItems = state.favoriteItems.filter(item => item.idDrink !== action.payload.idDrink);
            localStorage.setItem('favorites' , JSON.stringify([...newItems]));
            return {favoriteItems: [...newItems]}
        default:
            return state;
    }
}

const FavoriteProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , initialValue);

    return (
        <FavoriteContext.Provider value={{state , dispatch}}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;