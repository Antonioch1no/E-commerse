import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetails";
import Purchases from "./pages/Purchases";
import "./styles.css";

export default function App() {
	const isLoading = useSelector((state) => state.isLoading);
	return (
		<div className="App">
			<div>
				<HashRouter>
					<NavBar />
					{isLoading && <LoadingScreen />}
					<Container className="my-5">
						<Row>
							<Col>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/product/:id" element={<ProductDetail />} />
									<Route path="/login" element={<Login />} />
									<Route path="/purchases" element={<Purchases />} />
								</Routes>
							</Col>
						</Row>
					</Container>
				</HashRouter>
			</div>
		</div>
	);
}
