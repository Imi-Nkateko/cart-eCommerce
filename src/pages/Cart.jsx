import { useContext } from "react";
import { CartContext } from "../context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
	const GloobalState = useContext(CartContext);
	if (!GloobalState) {
		return <p>Loading...</p>;
	}

	const { state, dispatch } = GloobalState;

	if (!Array.isArray(state)) {
		return <p>No products in the cart.</p>;
	}

	const total = state.reduce((total, product) => {
		return total + product.price * product.quantity;
	}, 0);

	return (
		<div className="bg-zinc-50 m-5 grid p-5">
			<h1 className="text-3xl mb-5">Cart Products</h1>

			<div>
				{state.map((product, index) => (
					<div
						className="flex justify-between border-gray-400  mb-5 w-[800px] bg-white items-center pr-5"
						key={product.id || index}
					>
						<div className="flex ">
							<img
								className="w-25 h-25 mr-2"
								src={
									product.image && product.image.length > 0
										? product.image
										: "fallback-image.jpg"
								}
								alt={product.title || "Product Image"}
							/>
							<div className="grid gap-1">
								<p className="text-2xl">{product.title}</p>
								<p>{product.quantity}</p>
								<p className="text-lg">${product.quantity * product.price}</p>
							</div>
						</div>
						<div className="flex flex-col gap-2 items-center">
							<button
								onClick={() => dispatch({ type: "INCREASE", payload: product })}
								className="border w-5 h-5 bg-zinc-50"
							>
								+
							</button>
							<p>{product.quantity}</p>
							<button
								onClick={() => {
									if (product.quantity > 1) {
										dispatch({ type: "DECREASE", payload: product });
									} else {
										dispatch({ type: "REMOVE", payload: product });
									}
								}}
								className="border w-5 h-5 bg-zinc-50"
							>
								-
							</button>
						</div>
						<h2
							onClick={() => dispatch({ type: "REMOVE", payload: product })}
							className="text-lg cursor-pointer text-red-500"
						>
							X
						</h2>
					</div>
				))}

				{state.length > 0 && (
					<div>
						<h2>
							Total : <strong>${total}</strong>{" "}
						</h2>
						<button className="bg-blue-500 text-2xl text-white  px-2.5 py-1 align-middle font-bold cursor-pointer hover:bg-blue-300 md:max-w-40">
							<Link to={"/"}>Checkout</Link>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
