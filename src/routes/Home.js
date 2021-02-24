import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import "../style/css/Home.css"

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async() => {
    const {data : {data : {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');     
    this.setState({movies, isLoading:false});// this.setState({movies : movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> 
        ):(
          <div className="Movies">
            
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                yt_trailer_code={movie.yt_trailer_code}
              />
            ))}
          </div>
        )  
      }
        
    </section>
    );
  }

}

export default App; 
