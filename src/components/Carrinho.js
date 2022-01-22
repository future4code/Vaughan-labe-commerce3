import React from "react"

import ItemCar from "./ItemCar"
import styled from "styled-components"


const Chocolate = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    gap: 1rem;
    align-items: center;

`


 class Carrinho extends React.Component{

    render(){
        return (
            <Chocolate>
                <h3>Carrinho:</h3>
                <ItemCar/>
                <ItemCar/>
                <ItemCar/>
                <ItemCar/>
                <p>Valor Total: R$100,00</p>
            </Chocolate>
           
              
          
          )
    }
}
export default Carrinho
