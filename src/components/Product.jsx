// import PropTypes from "prop-types";
import { BsBagPlus } from "react-icons/bs";
import PropTypes from "prop-types";

const Product = ({ name, price, link, onClick }) => {
	return (
		<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
			<img src={link} alt="" className="h-80 w-72 object-cover rounded-t-xl" />
			<div className="px-4 py-3 w-72">
				<span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
				<p className="text-lg font-bold text-black truncate block capitalize">
					{name}
				</p>
				<div className="flex items-center">
					<p className="text-lg font-semibold text-black cursor-auto my-3">
						$ {price}
					</p>
					<div className="ml-auto">
						<BsBagPlus width="20" height="20" onClick={onClick} />
					</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	link: PropTypes.string,
	onClick: PropTypes.func,
};

export default Product;
