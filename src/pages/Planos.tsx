import { Link } from "react-router-dom";
import { Footer } from "../components/functionals/Footer";
import { NavList } from "../components/functionals/NavList";
import { Header } from "../components/styled/Header";
import { MainPlanos } from "../components/functionals/MainPlanos";


export function Planos() {
    return (
        <>
            <Header>
                <div>
                    <h1><Link to={"/"}>GrowTravel</Link></h1>
                </div>
                <NavList />
            </Header>
            <MainPlanos />
            <Footer />
        </>
    )
}