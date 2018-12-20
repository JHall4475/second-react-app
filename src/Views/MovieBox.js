import React, { Component } from 'react';
import axios from 'axios';
import '../Views/moviebox.css'
import MoreInfo from './MoreInfo';

class MovieBox extends Component {

  state = {
    toggles: true,
    infoToDisplay: [],
  }



// post to favs here?
//postToFavorites = (id) => {
     
//     let favoriteMovie = { 
//         id: id  
//     }
//     axios.post(`../favorites`, favoriteMovie)
//     .then( results => {
//         console.log(results)
//         this.setState({favoritesToDisplay: favoriteMovie})
//     })
//     .catch( () => console.error('error'))
        
// }

postToFavorites = () => {
  axios.put('http://localhost:8080/favorites', {movie:this.props.movie})
  .then((response) => {
    console.log(this.props.movie)
   alert(response.data)
  })
}

deleteFromFavorites = (id) => {
  console.log(id)
  axios.delete(`http://localhost:8080/favorites/${id}`)
.then((response) => {
  console.log(response.data)
  alert("Deleted movie")
  })
}

getMoreInfo = (id) => {
  console.log(id)
  // console.log(movie.movie)
axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d067623`)
.then((response) => {
  console.log(response)
  axios.put('http://localhost:8080/info', {info:response.data})
  .then((response) => {
    console.log(response.data)
    axios.get('http://localhost:8080/info')
    .then(info => {
      console.log("info:", info)
      // the data is being returned as an array so possibly need to turn it into an object before working on it
      
      this.setState({infoToDisplay:info})
    })
  })
})
}



  render() {
      const { title, year, poster, imdbID, displayInfo } = this.props
    return (
      <div className="background">
      <div className="moviebox-wrapper">
     <div className="moviebox">
         
         <h1>{title}</h1>
            <p>{year}</p>
            <br></br>
            <img src={poster} alt=''></img>
            <br></br>
            {this.props.buttonToggle ? <button onClick={() => this.deleteFromFavorites(imdbID)}> Delete From Favorites</button> : <button onClick={this.postToFavorites}> Post to Favorites</button>}
            <br></br>
            <button onClick={() => this.getMoreInfo(imdbID)}>More Info</button>
            {/* { this.state.infoToDisplay.data.Plot} */}
            
    </div>
     </div>
     </div>


    );
  }
}

export default MovieBox;





