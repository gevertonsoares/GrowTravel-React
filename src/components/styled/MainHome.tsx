import styled from 'styled-components';
import ImgHome from '../../assets/home.svg';

export const MainHome = styled.div`
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
            font-size: calc(1.5rem + 1.2vw); 
            margin-top: 0;
            margin-bottom: .5rem;
            color: #000075;
        }

        button {
            padding: 20px 30px;
            background-color: #000075; 
            color: #ffffff; 
            border: none; 
            border-radius: 30px; 
            cursor: pointer; 
            font-size: 15px; 
        }

        button a {
            text-decoration: none;
            color: #ffffff;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #7f7f7f;
            color: #000000;
        }

        p {
            opacity: .7;
            margin-top: 0;
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
            color: #000075;
        }

        img {
            width: 500px;
            background: ${`url(${ImgHome})`};
        }
    }
    
    @media screen and (max-width: 768px) {
        div {
            width: 100%; 
            text-align: center;
            img {
                width: 20rem;
                background: ${`url(${ImgHome})`};
            }
        }
    }
`;