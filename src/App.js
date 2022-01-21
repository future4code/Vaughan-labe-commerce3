import React from 'react';
import './App.css';
import car from "./components/Carrinho"
import styled from 'styled-components';
import Produto from "./components/Produtos/Produto"
import Prods from "./components/Produtos/Produtos.json"
import Carrinho from './components/Carrinho';



const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`
const DivProdutos = styled.div`
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
       <p>Quantidade de produtos: {listaDeProdutos.length}</p>

   <Carrinho/> 
      <DivProdutos>
       {listaDeProdutos}
      </DivProdutos>

      <span>
        <label>Ordenação: </label>
        <select
          // name=''
          // value={}
          // onChange={}
        >
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>
      </span>
     </AppContainer>
    )
  }
}

export default App;
