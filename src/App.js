import React from 'react';
import styled from 'styled-components';
import Produto from "./components/Produtos/Produto";
import Prods from "./components/Produtos/Produtos.json";



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
const FiltroContainer = styled.div`
border: 1px solid black;
padding: 40px;
height: 600px;
width: 200px;
`

class App extends React.Component {

  state = {
    produtos: Prods,
    pesquisa: "",
    minPrice: "",
    maxPrice: "",
  }


  filtrarNome = (event) => {

    this.setState({pesquisa: event.target.value})
  }

  filtrarMin = (event) => {
    this.setState({minPrice: event.target.value})
  }

  filtrarMax = (event) => {
    this.setState({maxPrice: event.target.value})
  }


  render() {
    const listaDeProdutos = this.state.produtos.map((itens) => {
      return (
        <Produto
          key = {itens.id}
          imgProduto={itens.imagemUrl}
          nomeProduto={itens.name}
          valueProduto={itens.value} 
        />
      )
    })

    // this.state.produtos.filter((lista)=>{

    // return lista.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
    // })

    

    return (
      <AppContainer>
        <FiltroContainer>
        
          <div>
            <h3>Filtros</h3>
            <p>Valor Minimo</p>
            <input
              type='number'
              placeholder='Digite um valor'
              value={this.state.minPrice}
              onChange={this.filtrarMin}
            />
            
          </div>

          <div>
            <p>Valor Máximo</p>
            <input
              type='number'
              placeholder='Digite um valor'
              value={this.state.maxPrice}
              onChange={this.filtrarMax}
            />
            
          </div>

          <div>
            <label>Busca por Nome</label>
            <input
              placeholder= "Nome do Produto"
              value={this.state.pesquisa}
              onChange={this.filtrarNome}
            />
          </div>


          <div>
          {this.state.produtos
          .filter(lista => {
          return lista.state.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
          })
          .filter(lista => {
          return lista.state.minPrice === "" || lista.value >= this.state.minPrice
          })
          .filter(lista => {
            return lista.state.maxPrice === "" || lista.value <= this.state.maxPrice
            })
          }
          </div>

        </FiltroContainer>
        <p>Quantidade de produtos: {listaDeProdutos.length}</p>

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
