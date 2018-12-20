import React, { Component } from 'react';
import logo from '../Assests/movieLogo2.jpg';
import axios from 'axios';
import MovieBox from './MovieBox';
import '../Views/profile.css';
import MoreInfo from './MoreInfo'

class Profile extends Component {


    state = {
        titleInput: '',
        movie: [],
        favoritesToDisplay: [],
        toggles: true,
    
    }






    titleSearch = () => {
        let apikey = "d067623"
        const inputWithOutSpace = this.state.titleInput.split(' ')
        const title = inputWithOutSpace.join('+')
        axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${apikey}`)
            .then(movies => {
                this.setState({ movie: movies.data.Search, titleInput: '', toggles: false });
                
            })
            .catch(() => console.error('error'))
    }

    onInputChange = (e) => {
        this.setState({ titleInput: e.target.value })
        // console.log(e.target.value)
    }

    onEnterPress = (e) => {
        if (e.which === 13) {
            this.titleSearch()
        }
    }

    onClickBackButton = () => {
        this.setState({ toggles: true })
    }

    onClickGetFavorites = () => {
        axios.get('http://localhost:8080/favorites')
        .then(favMoviesList => {
            console.log(favMoviesList)
            this.setState({favoritesToDisplay:favMoviesList.data})
        })
    }


    render() {
      
        const movies =
            <div className="movies-header">
                <button onClick={this.onClickBackButton} className="btn-favorites-back">back</button>
                {this.state.movie.map(movie => {
                    return (
                        <div>
                            <MovieBox
                                movie={movie}
                                title={movie.Title}
                                year={movie.Year}
                                postToFavs={this.postToFavorites}
                                poster={movie.Poster}
                                imdbID={movie.imdbID}
                                

                                
                                
                            />
                        </div>
                    )
                })}
                </div>

        const searchPage =
            <div className="search-page">
            

                <header className="search-header">
                    <img src={logo} alt="" />
                    <h1>Welcome</h1>
                    <p>Please search for your favorite movie, add it to the list, and then click Show Favorites to display your list of favorite movies.
                    </p>
                

                
                    <input
                        onChange={this.onInputChange}
                        value={this.state.titleInput}
                        onKeyPress={this.onEnterPress}
                        className="input-search"
                        type="text"
                        placeholder="Search By Title"
                    />
                    </header>
                

                <button onClick={this.titleSearch} className="btn">
                    Search
                  </button>

                  <button className="btn" onClick= {this.onClickGetFavorites}>Show Favorites</button>
                  {this.state.favoritesToDisplay.map(movie => {
                    return (
                        <div>
                            <MovieBox
                                movie={movie}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                postToFavs={this.postToFavorites}
                                deleteFromFavs={this.deleteFromFavs}
                                imdbID={movie.imdbID}
                                buttonToggle={this.state.toggles}
                                
                            />
                        </div>
                    )
                })}

            </div>
          

        return (
            <div>
                {this.state.toggles ? searchPage : movies}
            </div>
        )
        


    }
}

export default Profile;