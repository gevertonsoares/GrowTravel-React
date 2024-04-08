import { Link } from "react-router-dom";
import { Footer } from "../components/functionals/Footer";
import { NavList } from "../components/functionals/NavList";
import { Header } from "../components/styled/Header";
import { MainContato } from "../components/functionals/MainContato";


export function Contato() {
    return (
        <>
            <Header>
                <div>
                    <h1><Link to={"/"}>GrowTravel</Link></h1>
                </div>
                <NavList />
            </Header>
            <MainContato />
            <Footer />
        </>
    )
}