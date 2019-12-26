import React from 'react'
import { Form } from 'semantic-ui-react'
//Questions on bottom of page
class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  getInitialState = () => ({ name: '', hp: '', frontUrl: '', backUrl: '' })

  handleSubmit = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let hp = event.target.hp.value
    let frontUrl = event.target.frontUrl.value
    let backUrl = event.target.backUrl.value
// is there a better way to do this? line 19-22

        this.setState({
      name: name,
      hp: hp,
      frontUrl: frontUrl,
      backUrl: backUrl
    })
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    }).then(res => res.json())
        .then(pokemon => this.props.addPokemon(pokemon))
        .catch(error => console.error(error))
        this.setState(this.getInitialState())
  }


  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

// Questions to Ask:
//line 23 controlled forms

