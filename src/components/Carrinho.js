import React from "react"
import produtos from "./Produtos/Produtos.json"


class Carrinho extends React.Component{
    state = {
        produto: produtos,
        
    }

    adicionandoProduto = (id) =>{
        const adicionarItem = this.state.produto.map((id)=>{
            if(id ){
                return
            }
        })
      

        // const addProd = {
        //     id: 2,
        //     name: "Sei la",
        //     value: 100.00,
        //     imagemUrl: "https://www.usecamisetas.com/media/product/aed/camiseta-astronauta-9d2.jpg"
            
        // }
        // const addCarrinho = [...this.state.produto, addProd]
        // this.setState({produtos : addProd})
    }

    

    render(){
        return(
            <>
           
              
            </>
        )
    }
}
export default Carrinho