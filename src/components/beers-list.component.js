import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Beer = props => (
  <tr>
    <td>{props.beer.username}</td>
    <td>{props.beer.category}</td>
    <td>{props.beer.beerStyle}</td>
    <td>
      <Link to={"/edit/"+props.beer._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBeer(props.beer._id) }}>delete</a>
    </td>
  </tr>
)

export default class BeerList extends Component {
  constructor(props) {
    super(props);

    this.deleteBeer = this.deleteBeer.bind(this)

    this.state = {beers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/beers/')
      .then(response => {
        this.setState({ beers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBeer(id) {
    axios.delete('http://localhost:5000/beers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      beers: this.state.beers.filter(el => el._id !== id)
    })
  }

  beerList() {
    return this.state.beers.map(currentbeer => {
      return <Beer beer={currentbeer} deleteBeer={this.deleteBeer} key={currentbeer._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Beer</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Category</th>
              <th>BeerStyle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.beerList() }
          </tbody>
        </table>
      </div>
    )
  }
}