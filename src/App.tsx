import './App.css'
import Navigation from "./Components/Navigation.tsx";
import Hero from "./Components/Hero.tsx";
import Footer from "./Components/Footer.tsx";
import References from "./Components/References.tsx";

function App() {

    return (
        <>
            <Navigation/>
            <Hero/>
            <hr/>
            <References/>
            <hr/>
            <Footer/>
        </>
    )
}

export default App
