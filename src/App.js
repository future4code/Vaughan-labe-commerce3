import React from 'react';
import './App.css';
import car from "./components/Carrinho"
import styled from 'styled-components';
import Produto from "./components/Produtos/Produto"
import Prods from "./components/Produtos/Produtos.json"



const AppContainer = styled.body`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`
const DivProdutos = styled.div`
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`
const MainProdutos = styled.main`
  display: grid;
  justify-items: center;

`
const MenuInfos = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`




class App extends React.Component {

  state = {
    produtos: Prods,
    order: 1
  }

  updateOrder = (ev) => {
    this.setState({ order: ev.target.value })
  }

  render() {
    const listaDeProdutos = this.state.produtos.map((itens) => {
      return (
        <Produto
          imgProduto={itens.imagemUrl}
          nomeProduto={itens.name}
          valueProduto={itens.value}
        />
      )
    })
    return (
      <AppContainer>
        <h1>FILTROS</h1>
        <MainProdutos>
          <MenuInfos>
            <p>Quantidade de produtos: {listaDeProdutos.length}</p>
            <span>
              <label>Ordenação: </label>
              <select
                name='order'
                value={this.state.order}
                onChange={this.updateOrder}>
                <option value={1}>Crescente</option>
                <option value={-1}>Decrescente</option>
              </select>
            </span>
          </MenuInfos>

          <DivProdutos>
            {listaDeProdutos}
          </DivProdutos>

        </MainProdutos>
        <h1>CARRINHO</h1>
      </AppContainer>
    )
  }
}

export default App;
