<template>
 <div>
    <div class="m-6">
<router-link :to="`/show/${show.id}`">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                 <router-link :to="`/show/${show.id}`">
 <img :src="posterPath" class="hover:opacity-70 transition easy-in-out duration-150">
    </router-link>

                <header class=" items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg  text-white-800 text-center mb-2 font-bold">
                        
                           {{show.name}}
                        
                    </h1>
                    <p class="flex  lowercase text-lg	font-bold leading-normal text-justify text-gray-500 ">
                      <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600 mr-3">Rate:</span>
                       <svg
        class="fill-current text-yellow-500 w-5 h-5 mt-1 mr-2"
        viewBox="0 0 24 24"
      >
        <g data-name="Layer 2">
          <path
            d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
            data-name="star"
          />
        </g>   </svg> 
                   {{show.vote_average}} % 
                    </p>
                    <p class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500  flex ">
                                            <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600 mr-3">Release Date:</span>

                      {{show.first_air_date}}
                    </p>
                </header>

               

            </article>
            <!-- END Article -->
</router-link>
        </div>
    
   
    
  </div>
</template>

<script>
export default {
 props:{
    show:{
      required:true,
    },
    genres:{
      required:true,
    },
    production_companies:{
        required:true
    }
  },
  computed:{
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.show.poster_path;
    }
  },
methods: {
    genreTypeName(genraId, index) {
      for (const item of this.genres) {
        if (item.id == genraId) {
          if (this.movie.genre_ids.length - 1 == index) {
            return item.name;
          } else {
            return item.name + ",";
          }
        }
  }
}
}
}
</script>

<style>

</style>