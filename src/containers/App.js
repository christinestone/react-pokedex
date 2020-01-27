import React from 'react';
import './App.css';
import PokeList from '../components/PokeList';
import DetailView from '../components/DetailView';
import Pokemon from '../components/Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        pokemon: {}
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
          const pokemon = new Pokemon(data);
          this.setState({ pokemon });
        })
  }

  render() {
    const { pokemon } = this.state;
    return (
            <div className='App'>
              <PokeList handleOnClick={this.handleOnClick} />
              <DetailView pokemon={pokemon} />
            </div>
        )
  }
}

export default App;
