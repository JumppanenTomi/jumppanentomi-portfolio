import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {useEffect, useMemo, useState} from "react";
import {languagesMap} from "../../Translations/Languages.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLanguage} from "@fortawesome/free-solid-svg-icons/faLanguage";
import {useSearchParams} from "react-router-dom";
export default function LanguageSwitcher() {
    const { i18n } =  useTranslation()
    let [searchParams, setSearchParams] = useSearchParams()
    const languageFromParams = searchParams.get("lang")
    const [ currentLanguage, setCurrentLanguage ] = useState(i18n.language)

    //get all languages
    const languages = useMemo(() => {
        return i18n.languages;
    }, []);

    const changeLanguage = (target: string) => {
        setSearchParams((searchParams) => {
            searchParams.set("lang", target)
            return searchParams
        });
        i18n.changeLanguage(target);
        setCurrentLanguage(target);
    }

    //if there is language specified in parameters use that instead of default
    useEffect(() => {
        if (languageFromParams !== null){
            i18n.changeLanguage(languageFromParams)
            setCurrentLanguage(languageFromParams)
        }
    }, []);

    return (
        <>
            {languages.map((langCode) =>
                    currentLanguage !== langCode && (
                        <Nav.Link key={langCode} onClick={() => changeLanguage(langCode)}>
                            {languagesMap[langCode]}
                            <FontAwesomeIcon icon={faLanguage} />
                        </Nav.Link>
                    )
            )}
        </>
    );
}