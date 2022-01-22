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

`

const ProdutosImg = styled.img`
width: 100%;
&:hover{
    cursor: pointer;
}
`
const CardButton = styled.button`
    margin: 1px;

 &:hover{
    cursor: pointer;
}

`


class Produto extends React.Component {
    render() {

        return (
            <ProdutosContainer>
          
                    <CardProdutos>
                        <ProdutosImg src={this.props.imgProduto} alt={"Imagem do produto"} />
                        <p>{this.props.nomeProduto}</p>
                        <p>R$ {this.props.valueProduto}</p>
                        <CardButton >Adicionar ao carrinho</CardButton>
                    </CardProdutos>
            </ProdutosContainer>
        )
    }
}
export default Produto