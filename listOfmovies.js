class listOfmovies {   
    constructor(name, list=[]){
        this.name=name
        this.list=list
    }

    addMovie(movie){
        this.list.push(movie)
        return this.list
    }

    deleteMovie(movie){
        targetMovie=list.indexOf(movie)
        list.splice(targetMovie)
        
    }
        
}

export default listOfmovies