import Hero from '../../components/Hero';
import Navbar from "../../components/Navbar";
import Servicos from '../../components/Servicos';
import Footer from '../../components/Footer'

export default function Home() {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Servicos/>
            <Footer/>
        </>
    )
}