import Subscriber from "./Subscriber.js";
import Movie from "./Movie.js";
import listOfmovies from "./listOfmovies.js";

let oldMember= new Subscriber("Megan", "Watts", 9173354678, 31,8.99)
let newMember= new Subscriber("Sarah", "Johnson", 4581274401, 24,8.99)

console.log(oldMember);
console.log(newMember);

console.log("Due to your longtime subscription, Ms.",oldMember.lastName, "Please enjoy these 2 AMC movie tickets! Thank you so much")
console.log("Thank you for your subscription",newMember.firstName,"We truly apperciate you!");


let movie1= new Movie("Thirteen Ghosts","Steve Beck", ["Matthew Lillard","Tony Shalhoub"],"October 26, 2001",4.4)
let movie2= new Movie("Napoleon Dynamite", "Jared Hess", ["Jon Heder", "Efren Ramirez"],"June 11, 2004",4.5)
let movie3= new Movie("Annihilation", "Alex Garland", ["Natalie Portman","Tessa Thompson"],"February 23, 2018",3.7)
let movie4= new Movie("Two Can Play That Game","Mark Brown",["Vivica A. Fox","Gabrielle Union"],"September 7, 2001",6.0)
// create an instance of a movie list
let netflixAndChill = new listOfmovies('spring')
// add movie instance to movie list 
netflixAndChill.addMovie(movie1)
console.log(netflixAndChill.list)


// netflixAndChill.deleteMovie(movie1)

