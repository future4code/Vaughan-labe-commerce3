import React from "react"; 
import styled from "styled-components"

const Borda = styled.div`
   
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    
   
`


class ItemCar extends React.Component{
    render(){
        
        return(
       <Borda>
       <p>{this.props.itemCar.quantidade}X</p>
       <p>{this.props.itemCar.name}</p>
       <button onClick={() => this.props.remove(this.props.itemCar.id)}>Remover</button>
       </Borda>
        
            
        )
    }
}

export default ItemCar