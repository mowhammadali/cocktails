import React from 'react';
import { Route , Routes , Navigate} from 'react-router-dom';

// components
import Header from './Components/Header';
import Cocktails from './Components/Cocktails';
import Favorites from './Components/Favorites';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Cocktails />}/>
                <Route path='/favorites' element={<Favorites />} />
                <Route path='*' element={<Navigate to='/' replace/>}/>
            </Routes>
        </div>
    );
};

export default App;