//importing context api, useContext and useReducer hooks
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//wrapping the app inside the state provider cause it provides the data layer functionality
export const StateProvider =  ({ reducer, initialState, children }) => (

    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//to pull info from data layer
export const useStateValue = () => useContext(StateContext);