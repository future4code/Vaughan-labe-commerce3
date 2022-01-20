import React from 'react';
import './App.css';
import car from "./components/Carrinho"
import styled from 'styled-components';
import Produto from "./components/Produtos/Produto"
import Prods from "./components/Produtos/Produtos.json"



const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`



class App extends React.Component {

  state = {
    produtos: Prods
  }

  render(){
    const listaDeProdutos = this.state.produtos.map((itens) => {
      return(
          <Produto
              imgProduto={itens.imagemUrl}
              nomeProduto={itens.name}
              valueProduto={itens.value}
          />
            
      )
  })
    return(
     <AppContainer>
      {listaDeProdutos}
     </AppContainer>
    )
  }
}

export default App;
