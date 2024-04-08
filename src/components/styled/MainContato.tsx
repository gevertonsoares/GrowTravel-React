import styled from 'styled-components';


export const MainContato = styled.div`
    height: 77vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


    div {
        width: 50%;
        text-align: center;

        h2 {
            font-size: 1.5rem; 
            color: #000075;
            margin-bottom: 1rem ;
        }
        

        div {
            width: 100%;
            justify-content: center;
            text-align: center;

            label {
                text-align: start;
                opacity: .7;
                color: #000075;
            }
            
            input {
                width: 70%;
                height: 2rem;
                border: 2px solid #000075;
                border-radius: 10px;
                margin-bottom: 1rem;
            }
            
            textarea {
                width: 70%;
                border: 2px solid #000075;
                height: 5rem;
                border-radius: 10px;
            }
            
            
            
            button {
                width: 70%;
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
        }   
    }
    
    @media screen and (max-width: 1007px) {
        div {
            width: 100%; 
            text-align: center;
        }
    }
`;