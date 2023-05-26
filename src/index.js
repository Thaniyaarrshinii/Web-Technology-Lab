import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";

var root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
	<Routes>
	<Route path="/" element={<App/>}/>
	<Route path="/contact" element={<Contact/>}/>
	<Route path="/about" element={<About/>}/>
	</Routes>
	</BrowserRouter>
);