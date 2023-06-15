import React, { createContext, useReducer } from 'react';


// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':

        case 'RED_EXPENSE':
        
        case 'DELETE_EXPENSE':
       
        case 'SET_BUDGET':
            
        case 'CHG_CURRENCY':
          
        default:
        
        return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    calcaut: 0,  //Calculated autonomy for the custom car model with input
    selectaut:0, //selected car autonomy
    calcost: 0, //Calculated car cost
    selcost:0, //Selected car cost
    gas: 21
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);


    return (
        <AppContext.Provider
            value={{
                calcaut: state.calcaut,
                selectaut:state.selectaut,
                calcost: state.calcost,
                selcost: state.selcost,
                dispatch,
                currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
