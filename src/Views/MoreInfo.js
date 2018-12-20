import React, { Component } from 'react';
import axios from 'axios';
import '../Views/moviebox.css'

class MoreInfo extends Component{

// On this component we will display the more info and toggle back and forth with the movie box. can reuse the component on the other page


// getMoreInfo = (id) => {
//     console.log(id)
//     // console.log(movie.movie)
//   axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d067623`)
//   .then((response) => {
//     console.log(response)
//     axios.put('http://localhost:8080/info', {info:response.data})
//     .then((response) => {
//       console.log(response.data)
//       // .then(() => {this.props.postMoreInfo})
//       // axios.get('http://localhost:8080/info')
//       // .then(info => {
//       //   console.log(info)
//       // })
//     })
//   })
//   }



render(){

    return(
        <div></div>
    )
}

}

export default MoreInfo;