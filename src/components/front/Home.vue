<template>
  <div class="container mx-auto">
    

  <PopularMovies/>
  <UpcomingMovies/>
    <PopularShow/>

  </div>
</template>

<script>

import PopularMovies from '@/components/front/PopularMovies'
import PopularShow from '@/components/front/PopularShow'

import UpcomingMovies from '@/components/front/UpcomingMovies'


export default {
components:{
  PopularMovies,
  PopularShow,
  UpcomingMovies
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
