<template>
  <div class="container mx-auto border-b-4 border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-Bold my-8 ">Cast</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   ">
       
          
          <div :key="index" v-for="(cast, index) in casts  " class="mr-2">
            <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2 bg-stone-200">
          
<img :src="castProfileImage(cast)"  class="hover:opacity-75 tansition easy-in-out duration-150 w-80 h-80 founded "/>
 <div class="px-3 py-2">
    <div class="font-bold text-xl mb-2 bg text-center"> 
      <span class="text-black text-center mt-6">{{cast.name}}</span><br>
            <span class="text-zinc-600	 text-center mt-6">{{cast.character}}</span><br>
             <span class="text-slate-500	 text-center mt-6">{{cast.known_for_department}}</span>

      </div>
    
  </div>
             
 
       
            </div>
       
        </div>
        
        
    </div>
  </div>
</template>

<script>
export default {
props:{
  casts:{
    required:true,
  },
  actor:{
    required: true
  }
},
  methods: {
    castProfileImage(cast) {
      if (cast.profile_path) {
        return "https://image.tmdb.org/t/p/w300/" + cast.profile_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
  },
}
</script>

<style>

</style>