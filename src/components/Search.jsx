import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "panda",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            placeholder="Search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search_btn"
            onClick={() =>
              this.props.searchMovie(this.state.search, this.state.type)
            }
          >
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === "movie"}
              onChange={this.handleFilter}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
              onChange={this.handleFilter}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}
