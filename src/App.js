import React	from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './i18n';
import './App.css';
import Form from './components/Form/Form';
import Slide01 from './components/Slide01/Slide01';
import Slide02 from './components/Slide02/Slide02';
import Slide03 from './components/Slide03/Slide03';
import Slide04 from './components/Slide04/Slide04';
import Slide05 from './components/Slide05/Slide05';
import Slide06 from './components/Slide06/Slide06';
import Slide07 from './components/Slide07/Slide07';
import Slide08 from './components/Slide08/Slide08';

function App() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('meta.titles./')}</title>
				<meta name="description" content={t('meta.descriptions./')} />
			</Helmet>
			<BrowserRouter>
					<Routes>
						<Route path="/" element={
						<>
							<Slide01 />
							<Slide02 />
							<Slide03 />
							<Slide04 />
							<Slide05 />
							<Slide06 />
							<Slide07 />
							<Slide08 />
							<Form />
						</>} />
						<Route path="/downloads/rus.pdf" element={"../downloads/rus.pdf"} />
						<Route path="/downloads/eng.pdf" element={"../downloads/eng.pdf"} />
						<Route path="/downloads/slv.pdf" element={"../downloads/slv.pdf"} />
					</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
