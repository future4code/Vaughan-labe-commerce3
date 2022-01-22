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

    valueTotal = () =>{
        let valorTotal = 0
        for (let product of this.props.listaDeProdutos){
            valorTotal += product.value * product.quantidade;
        }
        return valorTotal
    }

    render(){
        return (
            <Chocolate>
                
                <h3>Carrinho:</h3>
                {this.props.listaDeProdutos.map((product)=>{
                    return  <ItemCar itemCar={product }/>
                })}
              
               
                <p>Valor Total: R${this.valueTotal()},00</p>
            </Chocolate>
           
              
          
          )
    }
}
export default Carrinho
