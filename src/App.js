import React, { useEffect, useRef, useState } from 'react';
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

	const formRef = useRef(null);
	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const [isFormVisible, setIsFormVisible] = useState(true);
  
	useEffect(() => {
	  const observerOptions = {
		root: null, // null означает viewport
		rootMargin: '0px',
		threshold: 0.1 // Срабатывает при видимости 10% элемента
	  };
  
	  const observerCallback = (entries) => {
		entries.forEach(entry => {
		  console.log(entry.target, entry.isIntersecting);
		  if (entry.isIntersecting) {
			setIsFormVisible(false);
		  } else {
			setIsFormVisible(true);
		  }
		});
	  };
  
	  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
	  if (section1Ref.current) observer.observe(section1Ref.current);
	  if (section2Ref.current) observer.observe(section2Ref.current);
  
	  return () => {
		if (section1Ref.current) observer.unobserve(section1Ref.current);
		if (section2Ref.current) observer.unobserve(section2Ref.current);
	  };
	}, []);

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
							<Slide07 ref={section1Ref} />
							<Slide08 ref={section2Ref} />
							<div className={`form ${isFormVisible ? 'visible' : 'hidden'}`} ref={formRef}>
							<Form />
							</div>
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
