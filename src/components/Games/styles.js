import styled from "styled-components";

export const MainStyles = styled.main`



`;

export const ButtonStyles = styled.button`
background-color: rgb(40,30,50);
padding: 10px 20px;
border-radius: 50%;
font-size: 40px;
border: none;
color: white;
cursor: pointer;
margin-top: 5px;
margin-left: 25px;
&:hover{
    background-color: blue;
}

@media (max-width: 768px) {
    gap: 10px;
}

`;

export const Ball = styled.h1`
width: 80px;
height: 80px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: ${({background}) => background};

@media (max-width: 768px) {
    width: 60px;
    height: 60px;
}


`;

export const Container = styled.div`
max-width: 1000px;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
margin-top: 50px;
gap: 15px
`;

export const ParImpar = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 50px 0;
gap: 50px;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
}

`
