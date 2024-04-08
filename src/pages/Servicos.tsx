import { Header } from "../components/styled/Header";
import { MainServicos } from "../components/functionals/MainServicos";
import { Footer } from "../components/functionals/Footer";
import { NavList } from "../components/functionals/NavList";
import { Link } from "react-router-dom";



export function Servicos() {
    return (
        <>
            <Header>
                <div>
                    <h1><Link to={"/"}>GrowTravel</Link></h1>
                </div>
                <NavList />
            </Header>
            <MainServicos />
            <Footer />
        </>
    )
}