import React from 'react';

import './App.css';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Produto from "./components/Produtos/Produto";






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
    produtos:  [
      {
        "id": 1,
        "name": "Camisa Astronauta",
        "value": 10.00,
        "imagemUrl": "https://www.usecamisetas.com/media/product/aed/camiseta-astronauta-9d2.jpg"
      },
      {
        "id": 2,
        "name": "camiseta astronauta in-love",
        "value": 25.00,
        "imagemUrl": "https://www.usecamisetas.com/media/product/69e/camiseta-astronauta-in-love-c8e.jpg"
      },
      {
        "id": 3,
        "name": "Camiseta falling Astronauta",
        "value": 39.90,
        "imagemUrl": "https://www.usecamisetas.com/media/product/ce4/camiseta-falling-astronaut-27a.jpg"
      },
      {
        "id": 4,
        "name": "Camiseta gato abduzido",
        "value": 44.90,
        "imagemUrl": "https://www.usecamisetas.com/media/product/4a7/camiseta-gato-abduzido-441.jpg"
      },
      {
        "id": 5,
        "name": "Camisa pequeno principe",
        "value": 59.99,
        "imagemUrl": "https://www.usecamisetas.com/media/product/beb/camiseta-pequeno-principe-b15.jpg"
      },
      {
        "id": 6,
        "name": "camiseta trippy astronauta",
        "value": 86.75,
        "imagemUrl": "https://www.usecamisetas.com/media/product/ccd/camiseta-trippy-astronauta-2b9.jpg"
      }
      ],

    listaProdutos: [
      {
          id: 1,
          name: "Camisa Astronauta",
          value: 10.00,
          imagemUrl: "https://www.usecamisetas.com/media/product/aed/camiseta-astronauta-9d2.jpg",
          quantidade: 1
      },
      {
         id: 2,
         name: "Camiseta falling Astronauta",
         value: 25,
         imagemUrl: "https://www.usecamisetas.com/media/product/ce4/camiseta-falling-astronaut-27a.jpg",
         quantidade: 1
  }

      
  ],

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

  addProdutoInCar = (productId) => {
    
    const produtoCar = this.state.listaProdutos.find(product => productId === product.id)

    if (produtoCar) {
      const novoProdutoInCar = this.state.listaProdutos.map(product =>{
         if (productId === product.id) {
           return({
             ...product,
             quantidade: product.quantidade + 1
           })

         } 
         return product
      })
      this.setState({listaProdutos: novoProdutoInCar})
     
    }else{
      const produtoAdd = this.state.produtos.find(product => productId === product.id)
      const novoProdutoInCart = [...this.state.listaProdutos, {...produtoAdd, quantidade: 1}] 
      
      this.setState({listaProdutos: novoProdutoInCart})
     
    }
   
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
           eita={itens.id}
           addProdutoInCar = {this.addProdutoInCar}
          />

            
      )
      
  })
   
    
     
   
      
  
   

    return (
      <AppContainer>
    
        <FiltroContainer>
        <p>Quantidade de produtos: {listaDeProdutos.length}</p>
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
        <DivProdutos>
          {listaDeProdutos}
        </DivProdutos>
       
        <Carrinho
          listaDeProdutos={this.state.listaProdutos}
        />
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
