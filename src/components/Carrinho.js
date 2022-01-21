import React from "react"
import produtos from "./Produtos/Produtos.json"
import allImagem from "./Produtos/imagemProduto"
import Produto from "./Produtos/Produto"
class Carrinho extends React.Component{
    state = {
        produto: produtos,
    //     {
    //         id: 1,
    //         name: "Camisa Astronauta",
    //         value: 10.00,
    //         imagemUrl: "https://www.usecamisetas.com/media/product/aed/camiseta-astronauta-9d2.jpg"
        
    // },
        listaProdutos: []
    }

    adicionandoProduto = () =>{
        const addProd = {
            id: 2,
            name: "Sei la",
            value: 100.00,
            imagemUrl: "https://www.usecamisetas.com/media/product/aed/camiseta-astronauta-9d2.jpg"
            
        }
        const addCarrinho = [...this.state.produto, addProd]
        this.setState({produtos : addProd})
    }

    

    render(){
        return(
            <div>
                <button onClick={this.state.adicionandoProduto}> Adicionar </button>
                {allImagem}
                {Produto}
            </div>
        )
    }
}
export default Carrinho