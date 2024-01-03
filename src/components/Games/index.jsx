import React, { useEffect, useState } from "react";
import { MainStyles, ButtonStyles, Ball, Container, ParImpar } from "./styles";

export const Games = () => {
    const [numbs, setNumbs] = useState([]);

    const createGame = () => {
        var qtn = 1;
        var standard = 15;

        const array = [];
        while(qtn <= standard){
            qtn++;

            var result = Math.floor(Math.random() * 26);

            if(result === 0){
                standard++
                continue;
            }
    
            if(array.includes(result)){
                standard++;
                continue;
            }

            array.push(result);
            //Ordem Crescente dos números
            array.sort(function (a, b) {
                return a - b;
            });

            setNumbs(array);
        }
    };

    const handleClick = () => {
        createGame();
    }

    useEffect(() => {
        createGame();
    }, []);

    const par = [];
    const impar = [];
    const isPar = () => {
        for(let i = 0; i < numbs.length; i++){
            if((numbs[i] % 2) === 0){
                par.push(numbs[i]);
            }else{
                impar.push(numbs[i]);
            }
        }
    }
    isPar();

    console.log('PAR',par);
    console.log('Impar',impar);

    var colorP = 'black';
    if(par.length === 7 && impar.length === 8){
        colorP = 'green';
    }else if(par.length === 8 && impar.length === 7){
        colorP = 'green';
    }else if(par.length === 6 && impar.length === 9){
        colorP = 'yellow';
    }else if(par.length <= 5){
        colorP = 'red'
    }


    return( 
        <MainStyles>
            <Container>
                {numbs.map((value, index) => { 
                    var color = 'blue';
                    // if(value === 7) console.log('Contém 7');
                    // if(value === 15) console.log('Contém 15');
                    if(value === 3 && index === 0) color = 'red';         
                    if(value === 4 && index === 0) color = 'red';         
                    if(value === 5 && index === 0) color = 'red';         
                    if(value >= 5 && index === 0) color = 'red'; 
                    if(value === 25 && index === 14) color = 'green'; 
                    if(value === 7) color = 'orange';

                    return(
                        <Ball background={color} key={value}>{value}</Ball>
                    )
                })}
            </Container>

            <ParImpar>
                <p style={{color: colorP}}>Números pares: {par.length}</p>
                <p style={{color: colorP}}>Números ímpares: {impar.length}</p>
            </ParImpar>

            <ButtonStyles onClick={handleClick}>+</ButtonStyles>
        </MainStyles>
    )
}