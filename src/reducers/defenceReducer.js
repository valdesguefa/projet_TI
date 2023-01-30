export const defenceReducer = (state, action) => {
	//console.log("AUTH REDUCER.JS\n");

	switch (action.type) {
		case "INITIALIZE_DEFENCES":
			return action.payload;
		case "ADD_DEFENCE":
			return [...state, action.payload];
		case "DELETE_DEFENCE":
			return state.filter((defence) => defence.id !== action.payload);

		default:
			return state;
	}
};
