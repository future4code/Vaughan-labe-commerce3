import React from "react"
import styled from "styled-components"


const ProdutosContainer = styled.div`
    display: flex;
   
`

const CardProdutos = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    align-items: center;
`

const ProdutosImg = styled.img`
width: 100%;

`


class Produto extends React.Component {
    render() {

        return (
            <ProdutosContainer>
          
                    <CardProdutos>
                        <ProdutosImg src={this.props.imgProduto} alt={"Imagem do produto"} />
                        <p>{this.props.nomeProduto}</p>
                        <p>{this.props.valueProduto}</p>
                        <button>Adicionar ao carrinho</button>
                    </CardProdutos>
            </ProdutosContainer>
        )
    }
}
export default Produto