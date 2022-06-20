import React from "react"
import styled from "styled-components"


const ProdutosContainer = styled.div`
    display: flex;
    padding: 10px;

`

const CardProdutos = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    align-items: center;
    border-radius: 2%;
`

const ProdutosImg = styled.img`
width: 100%;
&:hover{
  
}
`
const CardButton = styled.button`
    margin: 1px;
 &:hover{
    cursor: pointer;
}
`
const ElementGreen = styled.h4`
    color: green;

`


class Produto extends React.Component {

  
    
    render() {
     let ak = this.props.eita
        
        return (
            
            <ProdutosContainer>
          
                    <CardProdutos>
                        <ProdutosImg src={this.props.imgProduto} alt={"Imagem do produto"} />
                        <p>{this.props.nomeProduto}</p>

                        <ElementGreen>R$ {this.props.valueProduto}</ElementGreen>
                       

                        
                        <CardButton 
                       
                        onClick={() =>this.props.addProdutoInCar(ak)}>
                            Adicionar ao carrinho
                        </CardButton>
                        

                    </CardProdutos>
            </ProdutosContainer>
        )
    }
}
export default Produto