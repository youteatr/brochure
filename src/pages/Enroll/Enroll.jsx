import { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Form from '../../components/Form/Form'

function Enroll() {
	const { t } = useTranslation()
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
	<>
		<Helmet>
			<title>{t('meta.titles./enroll')}</title>
			<meta name="description" content={t('meta.descriptions./enroll')} />
		</Helmet>
		<div className='wrapper'>
			<Header />
			<main id='form' className='page'>
				<Form />
			</main>
			<Footer type='easy' />
		</div>
	</>
  )
}

export default Enroll
