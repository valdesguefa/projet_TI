import React, { createContext, useState, useEffect, useReducer } from "react";
import { defenceReducer } from "../reducers/defenceReducer";

export const DefenceContext = createContext();

const DefenceContextProvider = ({ children }) => {
	//console.log("AUTH CONTEXT.JS\n");
	const [defences, defenceDispatch] = useReducer(defenceReducer, []);
	return <DefenceContext.Provider value={{ defences, defenceDispatch }}>{children}</DefenceContext.Provider>;
};

export default DefenceContextProvider;
