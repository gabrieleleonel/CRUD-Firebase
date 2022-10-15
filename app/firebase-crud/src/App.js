import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import AddEdit from "./pages/AddEdit/";
import View from "./pages/View/";
import Header from "./components/Header/";
import About from "./pages/About/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<ToastContainer position="top-center" />
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/add" element={<AddEdit />} exact />
					<Route path="/update/:id" element={<AddEdit />} exact />
					<Route path="/view/:id" element={<View />} exact />
					<Route path="/about" element={<About />} exact />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
