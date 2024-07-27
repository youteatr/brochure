import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Slide01 from './components/Slide01/Slide01';

function App() {

	return (
		<BrowserRouter>
				<Routes>
					<Route path="/brochure/" element={
					<>
						<Slide01 />
					</>} />
					<Route path="/downloads/ru.pdf" element={"../downloads/ru.pdf"} />
					<Route path="/downloads/en.pdf" element={"../downloads/en.pdf"} />
					<Route path="/downloads/sl.pdf" element={"../downloads/sl.pdf"} />
				</Routes>
		</BrowserRouter>
	);
}

export default App;
