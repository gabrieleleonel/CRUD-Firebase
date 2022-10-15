import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Header = () => {
	const [activeTab, setActiveTab] = useState("Home");
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/") {
			setActiveTab("Home");
		} else if (location.pathname === "/add") {
			setActiveTab("AddContact");
		} else if (location.pathname === "/about") {
			setActiveTab("About");
		}
	}, [location]);
	return (
		<div className="header">
			<p className="logo">Leonel - CRUD</p>
			<h4>Código por NERD AUTODIDATA - FlavioAro</h4>
			<h4>Ajuste para a nova versão das bibliotecas por Gabriele Leonel - 14/10/2022</h4>
			<div className="header-right">
				<Link to="/">
					<p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>
						Home
					</p>
				</Link>
				<Link to="/add">
					<p className={`${activeTab === "AddContact" ? "active" : ""}`} onClick={() => setActiveTab("Add Contact")}>
						Add Contact
					</p>
				</Link>
				<Link to="/about">
					<p className={`${activeTab === "About" ? "active" : ""}`} onClick={() => setActiveTab("About")}>
						About
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Header;
