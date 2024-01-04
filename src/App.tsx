import './App.css'
import Navigation from "./Components/MainElements/Navigation.tsx";
import Spacer from "./Components/MainElements/Spacer.tsx";
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
                    <header>
                        <Navigation/>
                    </header>
                    <main>
                        <Spacer customHeight={100} id="home"/>
                        <Hero/>
                        <Spacer/>
                        <Bio/>
                        <Spacer/>
                        <Projects/>
                        <Spacer/>
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
