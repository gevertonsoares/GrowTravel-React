import { Header } from "../components/styled/Header";
import { MainQuemSomos } from "../components/styled/MainQuemSomos";
import { Footer } from "../components/functionals/Footer";
import ImgAirport from "../assets/aeroporto.svg";
import { Link } from "react-router-dom";
import { NavList } from "../components/functionals/NavList";



export function QuemSomos() {
    return (
        <>
            <Header>
                <div>
                    <h1><Link to={"/"}>GrowTravel</Link></h1>
                </div>
                <NavList />
            </Header>
            <MainQuemSomos>
                <div>
                    <img src={ImgAirport} alt="" />
                </div>
                <div>
                    <h1>| Quem Somos</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cumque soluta pariatur culpa distinctio enim adipisci laboriosam. 
                        Provident, inventore illo minima sequi doloribus similique, 
                        natus possimus rerum dolorum ipsum error aperiam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cumque soluta pariatur culpa distinctio enim adipisci laboriosam. 
                        Provident, inventore illo minima sequi doloribus similique, 
                        natus possimus rerum dolorum ipsum error aperiam.
                    </p>
                </div>
                
            </MainQuemSomos>
            <Footer />
        </>
    )
}