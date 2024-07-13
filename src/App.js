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
					<Route path="/" element={<><Sidebar /><LanguageSelector /> <Content /></>} />
					<Route path="/en" element={<PdfShow lng={'en'} />} />
					<Route path="/ru" element={<PdfShow lng={'ru'} />} />
					<Route path="/sl" element={<PdfShow lng={'sl'} />} />
				</Routes>
		</BrowserRouter>
	);
}

export default App;
