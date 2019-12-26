import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const URL = this.props.pokemon.isClicked ? this.props.backUrl : this.props.frontUrl
    const hp = this.props.pokemon.stats.find(stat => stat.name === 'hp').value
    return (
      <Card>
        <div onClick={() => this.props.toggleImage(this.props.pokemon)}>
          <div className="image">
            <img src={URL} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name ? (this.props.pokemon.name[0].toUpperCase().concat(this.props.pokemon.name.slice(1))):this.props.pokemon.name}</div>
          </div>
          <div className="extra content">


            <span>

              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
