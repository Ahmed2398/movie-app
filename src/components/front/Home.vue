<template>
  <div class="container mx-auto">
    

  <PopularMovies/>
  <UpcomingMovies/>
  </div>
</template>

<script>

import PopularMovies from '@/components//front/PopularMovies'
import UpcomingMovies from '@/components/front/UpcomingMovies'


export default {
components:{
  PopularMovies,
  UpcomingMovies
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
