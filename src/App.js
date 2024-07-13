import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import PdfShow from './components/temp/PdfShow/PdfShow';
import Content from './components/Content';
import LanguageSelector from './components/LanguageSelector';
import Sidebar from './components/Sidebar';

function App() {

	return (
		<BrowserRouter>
				<Routes>
					<Route path="/brochure/" element={<><Sidebar /><LanguageSelector /> <Content /></>} />
					<Route path="/brochure/en" element={<PdfShow lng={'en'} />} />
					<Route path="/brochure/ru" element={<PdfShow lng={'ru'} />} />
					<Route path="/brochure/sl" element={<PdfShow lng={'sl'} />} />
				</Routes>
		</BrowserRouter>
	);
}

export default App;
