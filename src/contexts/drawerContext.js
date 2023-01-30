import React, { createContext, useState, useEffect, useReducer } from "react";
import { drawerReducer } from "../reducers/drawerReducer";

export const DrawerContext = createContext();

const DrawerContextProvider = ({ children }) => {
	//console.log("AUTH CONTEXT.JS\n");
	const [drawer, dispatch] = useReducer(drawerReducer, {
		isOpen: false,
	});
	return <DrawerContext.Provider value={{ drawer, dispatch }}>{children}</DrawerContext.Provider>;
};

export default DrawerContextProvider;
