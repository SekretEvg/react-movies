import React, { Component } from "react";
import type { SearchOption, SearchType } from "../types";

type Props = {
  searchMovies: (query: string, type: SearchType) => void;
};

type State = {
  search: string;
  errorMessage: string;
  type: SearchType;
};

const searchOptions: SearchOption[] = [
  { label: "All", type: "all" },
  { label: "Movies only", type: "movie" },
  { label: "Series only", type: "series" },
];

export default class Search extends Component<Props, State> {
  state: Readonly<State> = {
    search: "",
    errorMessage: "",
    type: "all",
  };

  handleSearch = () => {
    const { search, type } = this.state;
    const { searchMovies } = this.props;

    if (!search.trim().length) {
      this.setState({ errorMessage: "Please enter a search term" });
      return;
    }

    searchMovies(search, type);
  };

  onPressEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      this.handleSearch();
    }
  };

  handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.state.search.trim().length) {
      this.setState({ errorMessage: "Please enter a search term" });
      return;
    }

    this.setState(
      () => ({ type: e.target.dataset.type as SearchType }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { search } = this.state;
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="Search movie"
            value={search}
            onChange={(e) =>
              this.setState({ search: e.target.value, errorMessage: "" })
            }
            onKeyDown={this.onPressEnter}
          />
          {this.state.errorMessage && (
            <span className="helper-text red-text">
              {this.state.errorMessage}
            </span>
          )}
          <button
            className="btn search-btn"
            type="button"
            onClick={this.handleSearch}
            disabled={!search.trim().length}
          >
            Search
          </button>
        </div>
        <div>
          {searchOptions.map(({ label, type }) => (
            <label key={type}>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type={type}
                onChange={this.handleFilter}
                checked={this.state.type === type}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
}
