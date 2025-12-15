import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

// import Slide01 from '../../components/Slide01/Slide01'
// import Slide02 from '../../components/Slide02/Slide02'
// import Slide03 from '../../components/Slide03/Slide03'
// import Slide04 from '../../components/Slide04/Slide04'
// import Slide05 from '../../components/Slide05/Slide05'
// import Slide06 from '../../components/Slide06/Slide06'
// import Slide07 from '../../components/Slide07/Slide07'
// import Slide08 from '../../components/Slide08/Slide08'
// import FormPreliminary from '../../components/Form/FormPreliminary/FormPreliminary'

function Main() {
	// const { t } = useTranslation()

  useEffect(() => {
    window.location.replace('https://www.youtheatre.si/');
  }, []);

  return null;

	// return (
	// 	<>
	// 		<Helmet>
	// 			<title>{t('meta.titles./')}</title>
	// 			<meta name="description" content={t('meta.descriptions./')} />
	// 		</Helmet>
	// 		<>
	// 			<Slide01 />
	// 			<FormPreliminary type='section'/>
	// 			<Slide02 id="about" />
	// 			<Slide03 id="our-courses" />
	// 			<Slide04 />
	// 			<Slide05 id="tutors" />
	// 			<Slide06 />
	// 			<Slide07 id="gallery" />
	// 			<FormPreliminary type='section'/>
	// 			<Slide08 id="contact" />
	// 			<FormPreliminary type='popup'/>
	// 		</>
	// 	</>
	// )
}

export default Main
