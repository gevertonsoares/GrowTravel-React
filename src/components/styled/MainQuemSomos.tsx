import styled from 'styled-components';
import ImgAirport from '../../assets/aeroporto.svg';

export const MainQuemSomos = styled.div`
    height: 77vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    


    div {
        width: 40%;
        text-align: center;


        h1 {
            text-align: start;
            font-size: calc(1.5rem + 1.2vw); 
            margin-top: 0;
            margin-bottom: .5rem;
            color: #000075;
        }

        p {
            text-align: start;
            opacity: .7;
            margin-top: 0;
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
            color: #000075;
        }

        img {
            width: 28rem;
            background: ${`url(${ImgAirport})`};
        }
    }
    
    @media screen and (max-width: 1007px) {
        div {
            width: 100%; 
            text-align: center;
            img {
                width: 20rem;
                background: ${`url(${ImgAirport})`};
            }
        }
    }
`;