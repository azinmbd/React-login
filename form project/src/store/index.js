import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import { persistStore } from 'redux-persist';

// Note: this API requires redux@>=3.1.0


export const store = createStore(rootReducer,{}, compose(applyMiddleware(thunk)));


export const persistor = persistStore(store);