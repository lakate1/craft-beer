import React, { Component } from 'react';
import axios from 'axios';

export default class EditBeers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeBeerStyle = this.onChangeBeerStyle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            category: "",
            beerStyle: "",
            users: []
        }
    }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          category: response.data.category,
          beerStyle: response.data.beerStyle,
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  onChangeBeerStyle(e) {
    this.setBeerStyle({
      beerStyle: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const beer = {
      username: this.state.username,
      category: this.state.category,
      beerStyle: this.state.beerStyle,
    }

    console.log(beer);

    axios.post('http://localhost:5000/beers/update/' + this.props.match.params.id, beer)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Beer Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Beer Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
    