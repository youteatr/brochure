import React	from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './i18n';
import './App.css';
import Slide01 from './components/Slide01/Slide01';
import Form from './components/Form/Form';

function App() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('title')}</title>
				<meta name="description" content={t('description')} />
			</Helmet>
			<BrowserRouter>
					<Routes>
						<Route path="/" element={
						<>
							<Slide01 />
							<Form />
						</>} />
						<Route path="/downloads/ru.pdf" element={"../downloads/ru.pdf"} />
						<Route path="/downloads/en.pdf" element={"../downloads/en.pdf"} />
						<Route path="/downloads/sl.pdf" element={"../downloads/sl.pdf"} />
					</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
