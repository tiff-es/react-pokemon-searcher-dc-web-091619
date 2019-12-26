import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
//Questions on bottom of page
class PokemonPage extends React.Component {
    constructor() {
        super();
        this.state =  {
            searchQuery: '',
            pokemonCollection: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/pokemon')
            .then(res => res.json())
            .then(data => this.setState({
                pokemonCollection:data
            }))
            .catch(e => console.error(e))
    }

    handleSearch = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

toggleImage = (pokemon) => {
    const pokeCol = this.state.pokemonCollection
    const index = pokeCol.indexOf(pokemon)
    this.setState({
        pokemonCollection: [
            ...pokeCol.slice(0,index),
            {...pokemon, isClicked: !pokemon.isClicked},
            ...pokeCol.slice(index + 1)
        ]
    })
    }
//Question: Found above method on solution branch after getting stuck, can we walk thru it step by step
    addPokemon = (pokemon) => {
        this.setState({
            pokemonCollection: [...this.state.pokemonCollection, pokemon]
        })
    }

    render() {
        const filteredPokemon = this.state.pokemonCollection.filter(p =>
            p.name.includes(this.state.searchQuery)

        )
    return (

      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search
            onChange={this.handleSearch} />
        <br />
        <PokemonCollection filteredPokemon={filteredPokemon}
                         // Question: Why was pokemon={filteredPokemon} not rendering anything>
                           pokemon={filteredPokemon}
                           toggleImage={this.toggleImage}


        />
      </Container>
    )
  }
}

export default PokemonPage
// Questions to ask:
// filteredPokemon not rendering (line 63), explain filtering via search in depth please
// toggleImage(line 41) explain line by line, solution branch solution