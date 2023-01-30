export const drawerReducer = (state, action) => {
	//console.log("AUTH REDUCER.JS\n");

	switch (action.type) {
		case "OPEN_DRAWER":
			//console.log("TOKEN_OBTAINED_REDUCER");

			return {
				isOpen: true,
			};
		case "CLOSE_DRAWER":
			//console.log("LOADING_REDUCER");
			return {
				isOpen: false,
			};

		default:
			return state;
	}
};
