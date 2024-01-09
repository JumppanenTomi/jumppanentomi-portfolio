import './App.css'
import Navigation from "./Components/MainElements/Navigation.tsx";
import Hero from "./Components/Sections/Hero.tsx";
import Projects from "./Components/Sections/Projects.tsx";
import Footer from "./Components/MainElements/Footer.tsx";
import Bio from "./Components/Sections/Bio.tsx";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {translations} from "./Translations/Translations.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/react';
import Skills from "./Components/Sections/Skills.tsx";

function App() {
    i18n.use(initReactI18next).init({
        resources: translations,
        lng: "fi",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <header id={"home"}>
                        <Navigation/>
                    </header>
                    <main>
                        <Hero/>
                        <Bio/>
                        <Skills/>
                        <Projects/>
                    </main>
                    <Footer/>
                    <Analytics/>
                    <SpeedInsights/>
                </>
            ),
        },
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default App
