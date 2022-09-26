<template>
  <div class="mx-5">  
    <h2 class="mt-5 text-yellow-500 text-lg font-semibold">
        Popular Show 
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 ">
    <ShowOne  :key="show.id" v-for="show in showes " :show="show" :genres="genres" />

    </div>
  </div>
</template>

<script>

import ShowOne from "@/components/items/ShowOne"
import api from "@/services/api"


export default {

components:{
   ShowOne
},
data: function(){
  return {
    showes: [],
    genres:[],
    production_companies:[]
  };
},
  async mounted() {
    this.fetchGenres();
    this.fetchproduction_companies();

    try{
    const response = await this.$http.get("/tv/popular?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16");
    this.showes = response.data.results
    } catch (error) {
      console.log(error)

    }
  },

  methods:{
    async fetchGenres(){
       try{
    const response = await this.$http.get("/tv/popular?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16");
    this.genres = response.data.genres
    } catch (error) {
      console.log(error)

    }
    },
    async fetchproduction_companies(){
      try{
      const response = await this.$http.get("/tv/popular?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16");
      this.production_companies = response.data.production_companies
      }catch{

      }
    }
  }

}
</script>

<style>

</style>