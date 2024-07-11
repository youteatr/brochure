import { useTranslation } from 'react-i18next'
import React from 'react'

const Sidebar = () => {
    const { t } = useTranslation();
  return (
    <div style={{marginTop: "10px"}}>
        <button>{t("Home")}</button>
        <button>{t("Contact")}</button>
        <button>{t("About")}</button>
    </div>
  )
}

export default Sidebar