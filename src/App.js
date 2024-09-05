import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './i18n'
import './App.css'

import Main from './pages/Main/Main'
import Enroll from './pages/Enroll/Enroll'
import ScrollToHash from './assets/scripts/ScrollToHash'

function App() {
	return (
		<>
			<BrowserRouter>
			<ScrollToHash />
					<Routes>
						<Route path="/" element={ <Main /> } />
						<Route path="/enroll" element={ <Enroll /> } />

						<Route path="/downloads/rus.pdf" element={"../downloads/rus.pdf"} />
						<Route path="/downloads/eng.pdf" element={"../downloads/eng.pdf"} />
						<Route path="/downloads/slv.pdf" element={"../downloads/slv.pdf"} />
					</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
