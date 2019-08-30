import React, { Component } from "react";

export default class CreateBeers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeBeerStyle = this.onChangeBeerStyle.bind(this);

        this.state = {
            username: "",
            category: "",
            beerStyle: "",
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ["test user"],
            username: "test user"
        })
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeCategory(e){
        this.setState({
            category: e.target.value
        });
    }
    onChangeBeerStyle(e){
        this.setState({
            beerStyle: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const beer = {
            username: this.state.username,
            category: this.state.category,
            beerStyle: this.state.beerStyle
        }
        console.log(beer)

        window.location = "/";
    }
    render() {
        return (
        <div>
          <h3>Create New Beer Log</h3>
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
              <label>Category: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.category}
                  onChange={this.onChangeCategory}
                  />
            </div>
            <div className="form-group">
              <label>Beer Style</label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.beerStyle}
                  onChange={this.onChangeBeerStyle}
                  />
            </div>
            <div className="form-group">
              <input type="submit" value="Create Beer Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }