import styled from 'styled-components';

export const MainServicos = styled.div`
    min-height: 77vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
        width: 20%;
        text-align: center;

        h3 {
            text-align: center;
            font-size: 1.5rem; 
            margin-top: 0;
            margin-bottom: .5rem;
            color: #000075;
        }

        button {
            padding: 14px 28px;
            color: #000075; 
            border: 2px solid #000075; 
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
            background-color: #000075;
            color: white;
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
            width: 200px;
        }
    }

    
    @media screen and (max-width: 1007px) {
        div {
            width: 100%; 
            text-align: center;
        }
    }
`;
