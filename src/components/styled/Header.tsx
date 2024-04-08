import styled from 'styled-components';

export const Header = styled.div`
    min-height: 15vh;
    background-color: #000075;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
        width: 40%;
        text-align: center;

        h1 {
            font-size: calc(1.5rem + .5vw); 
            margin-top: 0;
            margin-bottom: .5rem;
            font-weight: bolder;
            line-height: 1.2;
            color: #ffffff;
        }
        
        h1 a {
            text-decoration: none;
            color: inherit
        }

        
        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            display: inline-block;
            margin-right: 10px;
            color: white;
        }

        ul li a {
            text-decoration: none;
            color: #ffffff;
            padding: 10px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        ul li a:hover {
            background-color: #ddd;
            color: #000000;
        }
    }

    @media screen and (max-width: 768px) {
        div {
            width: 100%; 
            text-align: center;
        }
    }
`;