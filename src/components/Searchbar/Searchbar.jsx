const { Component } = require("react");


class Searchbar extends Component {
    state = {
        query: ''
    }

    hadleInputChange = (event) => {
        this.setState({query: event.target.value})
    }

    render() {
        return (
          <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.props.onSubmit}>
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>

              <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="query"
                value={this.state.query}
                onChange={this.hadleInputChange}
              />
            </form>
          </header>
        );
        
    }
}

export default Searchbar;