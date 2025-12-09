import React from "react";
import { Movies } from "../components/Movies";
import type { IMovie, SearchType } from "../types";
import { Preloader } from "../components/Preloader";
import Search from "../components/Search";
import { getMoviesService } from "../api/movies-service";

type Props = {};
type State = {
  movies: IMovie[];
  isLoading: boolean;
};

export class Main extends React.Component<Props, State> {
  state: Readonly<State> = {
    movies: [],
    isLoading: true,
  };

  searchMovies = (query: string, type: SearchType = "all") => {
    this.setState({ isLoading: true });
    getMoviesService(query, type).then((data) =>
      this.setState({ movies: data.Search, isLoading: false })
    );
  };

  componentDidMount(): void {
    getMoviesService().then((data) =>
      this.setState({ movies: data.Search, isLoading: false })
    );
  }
  render(): React.ReactNode {
    const { movies, isLoading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {isLoading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
