import React from "react"; 
import styled from "styled-components"

const Borda = styled.div`
   
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    
   
`


class ItemCar extends React.Component{
    render(){
        return(
       <Borda>
       <p>1X</p>
       <p>Produto</p>
       <button>Remover</button>
       </Borda>
        
            
        )
    }
}

export default ItemCar