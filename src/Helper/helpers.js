import { toast } from 'react-toastify';

export const check = (state , id) => {
    return state.favoriteItems.find(item => item.idDrink === id) ? true : false;
}

export const notify = message => toast.info( message , {
    position: "top-right",
    autoClose: 1600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    });