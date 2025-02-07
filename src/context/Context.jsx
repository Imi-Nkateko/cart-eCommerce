import { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = (props) => {
	const reducer = (state, action) => {
		switch (action.type) {
			case "ADD":
				// Check if action.payload and action.payload.id exist
				if (!action.payload || !action.payload.id) {
					console.error("Invalid product data", action.payload);
					return state;
				}

				// Find the existing product in the cart
				const existingProduct = state.find(
					(product) => action.payload.id === product.id
				);

				// If the product already exists, return the current state
				if (existingProduct) {
					return state;
				} else {
					// Otherwise, add the new product to the cart
					return [...state, action.payload];
				}

			case "INCREASE":
				const tempState1 = state.map((product) => {
					if (product.id === action.payload.id) {
						return { ...product, quantity: product.quantity + 1 };
					} else {
						return product;
					}
				});
				return tempState1;

			case "DECREASE":
				const tempState2 = state.map((product) => {
					if (product.id === action.payload.id) {
						return { ...product, quantity: product.quantity - 1 };
					} else {
						return product;
					}
				});
				return tempState2;
			case "REMOVE":
				const tempState3 = state.filter(
					(product) => product.id !== action.payload
				);
				return tempState3;
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, []);
	const info = { state, dispatch };
	return (
		<CartContext.Provider value={info}>{props.children}</CartContext.Provider>
	);
};
