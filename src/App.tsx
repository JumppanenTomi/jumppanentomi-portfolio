import './App.css'
import Navigation from "./Components/MainElements/Navigation.tsx";
import Spacer from "./Components/MainElements/Spacer.tsx";
import Hero from "./Components/Sections/Hero.tsx";
import Projects from "./Components/Sections/Projects.tsx";
import Footer from "./Components/MainElements/Footer.tsx";
import Bio from "./Components/Sections/Bio.tsx";

function App() {

    return (
        <>
            <Navigation/>
            <Spacer customHeight={100} id="home"/>
            <Hero/>
            <Spacer/>
            <Bio/>
            <Spacer/>
            <Projects/>
            <Spacer/>
            <Footer/>
        </>
    )
}

export default App
