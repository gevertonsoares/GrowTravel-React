import styled from 'styled-components';

export const MainPlanos = styled.div`
    height: 77vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    

    div {
        width: 20%;
        height: 40%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        
        div {
            border: solid 4px #000075 ;
            width: 16rem;
            height: 16rem;
            justify-content: space-around;
            
            
            h3 {
                font-size: 1.5rem; 
                margin-top: 0;
                margin-bottom: .5rem;
                color: #000075;
            }
            
            button {
                padding: 10px 20px;
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

            ul {
                padding: 0;
            }

            ul li {
                color: #000075;
            }

            hr {
                border: none; 
                height: 3px; 
                background-color:#000075; 
            }
        }
    }
    
    @media screen and (max-width: 1300px) {
        div {
            height: 40vh;
            width: 100%; 
            text-align: center;
            margin: 1rem;

            div {
                width: 80%; 
                justify-content: space-evenly;
                text-align: center;
            }
            
        }
    }
`;