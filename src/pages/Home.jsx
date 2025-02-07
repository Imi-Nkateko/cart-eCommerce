// import PropTypes from "prop-types";
import Product from "../components/Product";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/Context";

const Home = () => {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.in/api/products?limit=12")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((products) => {
				setProducts(products.products);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);
	console.log(products);
	if (loading)
		return (
			<div className="border-gray-300 m-auto  h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
		);
	if (error) return <p>Error: {error.message}</p>;

	const GlobalState = useContext(CartContext);
	const dispatch = GlobalState.dispatch;
	console.log(GlobalState);
	return (
		<div className="bg-zinc-50 m-5">
			<h1 className="text-2xl mb-5">Products List</h1>
			<div className=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
				{products.map((product, id) => (
					<Product
						quantity={(product.quantity = 1)}
						key={id}
						product={product}
						name={product.title}
						price={product.id}
						link={product.image}
						slug={product.id}
						onClick={() => dispatch({ type: "ADD", payload: product })}
					/>
				))}
			</div>
		</div>
	);
};

// Home.propTypes = {
// 	products: PropTypes.array,
// };

export default Home;
