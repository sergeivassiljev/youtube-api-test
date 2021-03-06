import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({term: e.target.value})
    
  }

  onFormSubmit = (e)=>{
    e.preventDefault();
    this.props.onTermSubmit(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input onChange={this.onInputChange} type="text" value={this.state.term}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
