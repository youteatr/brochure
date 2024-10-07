import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './i18n'
import './App.css'

import Main from './pages/Main/Main'
import Enroll from './pages/Enroll/Enroll'
import Enroll_23aa4b8e_092_4015_a322_7c5560dbd3bf from './pages/Enroll/Enroll-23aa4b8e-9092-4015-a322-7c5560dbd3bf/Enroll-23aa4b8e-9092-4015-a322-7c5560dbd3bf'
import ScrollToHash from './assets/scripts/ScrollToHash'

function App() {
	return (
		<>
			<BrowserRouter>
			<ScrollToHash />
					<Routes>
						<Route path="/" element={ <Main /> } />
						<Route path="/enroll" element={ <Enroll /> } />
						<Route path="/en/enroll" element={ <Enroll lang='en' /> } />
						<Route path="/ru/enroll" element={ <Enroll lang='ru' /> } />
						<Route path="/sl/enroll" element={ <Enroll lang='sl' /> } />
						<Route path="/enroll/23aa4b8e-9092-4015-a322-7c5560dbd3bf" element={ <Enroll_23aa4b8e_092_4015_a322_7c5560dbd3bf lang='en' /> } /> {/* Special enroll from 2024.09.14 */}

						<Route path="/downloads/rus.pdf" element={"../downloads/rus.pdf"} />
						<Route path="/downloads/eng.pdf" element={"../downloads/eng.pdf"} />
						<Route path="/downloads/slv.pdf" element={"../downloads/slv.pdf"} />
					</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
