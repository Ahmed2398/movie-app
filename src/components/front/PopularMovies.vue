<template>
  <div class="mx-5">  
    <h2 class="mt-5 text-yellow-500 text-lg font-semibold">
        Popular Movies yes
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 ">
    <MovieOne  :key="movie.id" v-for="movie in movies " :movie="movie" :genres="genres"/>

    </div>
  </div>
</template>

<script>

import MovieOne from "@/components/items/MovieOne"
import api from "@/services/api"


export default {

components:{
   MovieOne
},
data: function(){
  return {
    movies: [],
    genres:[]
  };
},
  async mounted() {
    this.fetchGenres();
    try{
    const response = await this.$http.get("/movie/popular/?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16");
    this.movies = response.data.results
    } catch (error) {
      console.log(error)

    }
  },

  methods:{
    async fetchGenres(){
       try{
    const response = await this.$http.get("/genre/movie/list?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16");
    this.genres = response.data.genres
    } catch (error) {
      console.log(error)

    }
    }
  }

}
</script>

<style>

</style>