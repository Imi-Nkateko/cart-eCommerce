import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/Context";

const Header = () => {
	const GloobalState = useContext(CartContext);
	const state = GloobalState.state;
	return (
		<div className="flex justify-between p-5">
			<Link to={"/"}>
				<h1 className="text-3xl">Context.</h1>
			</Link>

			<div className="relative flex">
				<Link to={"/cart"}>
					<BiShoppingBag size={36} />
				</Link>
				<span className="absolute left-5.5 top-3 text-sm h-5 w-5 text-white bg-red-500 text-center  rounded-full">
					{state.length}
				</span>
			</div>
		</div>
	);
};

export default Header;
