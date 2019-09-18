import React from 'react';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import Menu from './components/menu';
import './App.css';



class App extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Menu/>
                </PersistGate>
            </Provider>
        )
    }
}


export default App;
