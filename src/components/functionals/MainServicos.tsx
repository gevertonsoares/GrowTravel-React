import { MainServicos as MainServicosStyled } from "../styled/MainServicos";
import ImgHotel from "../../assets/hotel.svg";
import ImgRoteiro from "../../assets/roteiro.svg";
import ImgViajens from "../../assets/viagens.svg";

export function MainServicos() {
    return (
        <MainServicosStyled>
            <div>
                <img src={ImgHotel} alt="" />
                <h3>Hospedagem</h3>
                <button>Saiba Mais</button>
            </div>
            <div>
                <img src={ImgRoteiro} alt="" />
                <h3>Roteiro</h3>
                <button>Saiba Mais</button>
            </div>
            <div>
                <img src={ImgViajens} alt="" />
                <h3>Viajens</h3>
                <button>Saiba Mais</button>
            </div>
        </MainServicosStyled>
    );
}