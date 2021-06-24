a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and 
a String representing the rating as its arguments, and sets the respective class properties to these values.
b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
c) Write a method getPG, which takes an array of base type Movie as its argument, and 
returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. 
The returned array need not be full.
d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “'Casino Royale'”, and the rating “PG­13”*/

class Movie {
  constructor(movieName,studioName,rating = 'PG')
  {
    this.movieName = movieName;
    this.studioName= studioName;
    this.rating = rating;
  }
}
function getPG(movie_array)
{
    let movies = []
    for(i=0;i<movie_array.length;i++)
    if(movie_array[i].rating == 'PG')
    {
      movies.push(movie_array[i].movieName);
    }
  console.log(movies)
}

var movie1 = new Movie('Casino Royale','Casino Royale','PG13')
var movie2 = new Movie('ACD','RTY','PG')
var movie3 = new Movie('ACB','FGH','PG');
var a =[movie1,movie2,movie3]
getPG(a)