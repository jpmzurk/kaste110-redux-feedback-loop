import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const databaseReducer = (state = [], action) => {
    if(action.type === 'FEEDBACK'){
        return action.payload
    }
    return state;
}

const feedbackReducer = (state = [], action) => {
    if(action.type === 'FEELING'){
        return [...state, action.payload]
    }else if(action.type === 'COMPREHENSION'){
        return [...state, action.payload]
    }else if(action.type === 'SUPPORT'){
        return [...state, action.payload]
    }else if(action.type === 'COMMENTS'){
        return [...state, action.payload]
    }
    return state;
}

// const feelingReducer = (state = [], action) => {
//     if(action.type === 'FEELING'){
//         return action.payload
//     }
//     return state;
// }
// const comprehensionReducer = (state = [], action) => {
//     if(action.type === 'COMPREHENSION'){
//         return action.payload
//     }
//     return state;
// }

// const supportReducer = (state = [], action) => {
//     if(action.type === 'SUPPORT'){
//         return action.payload
//     }
//     return state;
// }

// const commentReducer = (state = [], action) => {
//     if(action.type === 'COMMENTS'){
//         return action.payload
//     }
//     return state;
// }

const feedbackStore = createStore(
    combineReducers({
        feedbackReducer,
        databaseReducer
        
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={feedbackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
