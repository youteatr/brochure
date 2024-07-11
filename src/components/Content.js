import React from 'react'
import { useTranslation } from 'react-i18next'

const Content = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t("React")}</p>
            <hr/>
            <p>{t("username.label")}</p>
            <p>{t("username.placeholder")}</p>
            <hr/>
            <p>{t("password.label")}</p>
            <p>{t("password.placeholder")}</p>
            <hr/>
            <p>{t("location")}</p>
            <p>{t("Address")}</p>
        </div>
    )
}

export default Content;