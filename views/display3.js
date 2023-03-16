async function getMovies(){
    let response=await fetch('https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=e46df4b43ca9b2244f95e45d6115ff30');
    console.log(response);
    let userData=await response.json();
    let movies='';
    userData.results.forEach(movie=>{
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
    });
    document.getElementById('card-content').innerHTML=movies;
   
  }
    getMovies();

 