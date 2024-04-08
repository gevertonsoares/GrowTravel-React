import { Header } from "../components/styled/Header";
import { MainHome } from "../components/styled/MainHome";
import { Footer } from "../components/functionals/Footer";
import  ImgHome  from "../assets/home.svg";
import { NavList } from "../components/functionals/NavList";
import { Link } from "react-router-dom";




export function Home() {
    return (
        <>
            <Header>
                <div>
                    <h1><Link to={"/"}>GrowTravel</Link></h1>
                </div>
                <NavList />
            </Header>
            <MainHome>
                <div>
                    <h1>GrowTravel</h1>
                    <p>O melhor serviço pra você!</p>
                    <button><a href="#">Saiba Mais!</a></button>
                </div>
                <div>
                    <img src={ImgHome} alt="" />
                </div>
            </MainHome>
            <Footer />
        </>
    )
}