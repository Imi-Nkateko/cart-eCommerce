import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


const App = () => {


	return (
		<Router>
			<Header />
			<Routes>
				<Route index element={<Home  />} path="/" />
				<Route element={<Cart />} path="/cart" />
			</Routes>
		</Router>
	);
};

export default App;
