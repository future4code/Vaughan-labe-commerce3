import React from 'react';

import './App.css';

import styled from 'styled-components';

import Carrinho from './components/Carrinho';

import styled from 'styled-components';
import Produto from "./components/Produtos/Produto";
import Prods from "./components/Produtos/Produtos.json";




const AppContainer = styled.div`
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

class App extends React.Component {

  state = {
    produtos: Prods,

    listaProdutos: [
      {
          "id": 1,
          "name": "Camisa Astronauta",
          "value": 10.00,
          "imagemUrl": "https://www.usecamisetas.com/media/product/aed/camiseta-astronauta-9d2.jpg",
          quantidade: 1
      },
      {
          "id": 1,
          "name": "Camisa Astronauta",
          "value": 10.00,
          "imagemUrl": "https://www.usecamisetas.com/media/product/aed/camiseta-astronauta-9d2.jpg",
          quantidade: 2
      }
      
  ]

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
      .map((itens) => {
        return (
          <Produto
            key={itens.id}
            imgProduto={itens.imagemUrl}
            nomeProduto={itens.name}
            valueProduto={itens.value}
          />
<<<<<<< HEAD
<<<<<<< HEAD
          
            
      )
  })
    return(
     <AppContainer>
       <p>Quantidade de produtos: {listaDeProdutos.length}</p>
=======
=======

        
      )


  })
    return(
      <AppContainer>
        <p>Quantidade de produtos: {listaDeProdutos.length}</p>

   <Carrinho
      
   /> 
      <DivProdutos>
       {listaDeProdutos}
      </DivProdutos>

>>>>>>> 737b2632ce80ed341ad9ea83b8dd0d599d0a35c6
        )
      })

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
>>>>>>> 389019b7e744e0a819ec43915913681b3a93bdd1




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
