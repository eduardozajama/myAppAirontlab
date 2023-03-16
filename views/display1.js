async function getMovies(){
  let response=await fetch('https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=e46df4b43ca9b2244f95e45d6115ff30');
  console.log(response);
  let userData=await response.json();
  let featured='';
  let movies='';

  for(let i = 0; i < userData.results.length; i++ ) {
     console.log(userData.results[i]);
     if (i==0){
      console.log('featured movie');  
  featured=`  <div class="featured-card" >
     <img class="card-img-top" src=# alt="Card image cap">
     <div class="card-body">
          <h4 class="card-title">${movie.title}</h4>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
     `
   }else{

   }
    
};



  /*userData.results.forEach(movie=>{
    console.log(movie);

    let rating= Math.trunc(movie.vote_average/2)
       
    movies += `
    <div class="card" id="card">
       <img class="card-img-top" id="card-img-top" src="https://image.tmdb.org/t/p/w200/${movie.poster_path}">
    <div class="card-body">
          
       
          <h4 class="card-title">${movie.title}</h4>
          <h5> ${rating}</h5>

         <p class="card-text">${movie.overview}.</p>
         <a href="#" class="btn btn-primary">Watch now</a>
         </div>
    </div>
    </div>
    `;
  }); */
  document.getElementById('featured-movie').innerHTML= featured;

  document.getElementById('cards-container').innerHTML=movies;
 
}
  getMovies();
//  how to show first element of an array in a div?