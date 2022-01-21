import React from 'react';
import styled from 'styled-components';
import Produto from "./components/Produtos/Produto";
import Prods from "./components/Produtos/Produtos.json";



const AppContainer = styled.body`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 40px;
  
`
const DivProdutos = styled.div`
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`
const FiltroContainer = styled.div`

display: flex;
border: 1px solid black;
padding: 40px;
margin-top: 63px;

border: 1px solid black;
padding: 40px;

height: 820px;
width: 200px;
`
const Filtros = styled.div`
display: flex;
flex-direction: column;
width: 180px;
`


const MainProdutos = styled.main`
  display: grid;
  justify-items: center;

`
const MenuInfos = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`



class App extends React.Component {

  state = {
    produtos: Prods,

    order: 1,

    pesquisa: "",
    minPrice: "",
    maxPrice: "",
  }


  filtrarNome = (event) => {

    this.setState({ pesquisa: event.target.value })
  }

  filtrarMin = (event) => {
    this.setState({ minPrice: event.target.value })
  }

  filtrarMax = (event) => {
    this.setState({ maxPrice: event.target.value })
  }


  updateOrder = (ev) => {
    this.setState({ order: ev.target.value })
  }




  render() {
    const listaDeProdutos = this.state.produtos
      .filter(prod => {
        return prod.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
      })
      .filter(prod => {
        return this.state.minPrice === "" || prod.value >= this.state.minPrice

      })
      .filter(prod => {
        return this.state.maxPrice === "" || prod.value <= this.state.maxPrice

      })

      .sort((cresc,decre) =>{
          switch (this.state.order){
              default:
                return this.state.order * (cresc.value - decre.value)
          }
      })
      .map((itens) => {
        return (
          <Produto
            key={itens.id}
            imgProduto={itens.imagemUrl}
            nomeProduto={itens.name}
            valueProduto={itens.value}
          />
        )
      })

    return (
      <AppContainer>
        <FiltroContainer>


    return (
      <AppContainer>
        <FiltroContainer>


          <Filtros>
            <h3>Filtros</h3>
            <p>Valor Minimo</p>
            <input
              type='number'
              placeholder='Digite um valor'
              value={this.state.minPrice}
              onChange={this.filtrarMin}
            />






            <p>Valor Máximo</p>
            <input
              type='number'
              placeholder='Digite um valor'
              value={this.state.maxPrice}
              onChange={this.filtrarMax}
            />







            <p>Busca por Nome</p>
            <input
              placeholder="Nome do Produto"
              value={this.state.pesquisa}
              onChange={this.filtrarNome}
            />
          </Filtros>

        </FiltroContainer>

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
=======


        </FiltroContainer>
        <div>
          {<p>Quantidade de produtos: {listaDeProdutos.length}</p>}
        </div>
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

    );
  }

}

export default App;
