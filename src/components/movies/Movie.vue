<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
      <img :src="posterPath" alt="" class="w-64 rounded-lg" />
      <div class="ml-24">
        <h1 class="text-4xl font-bold	 capitalize hover:uppercase text-stone-100">{{ this.movie.title }}</h1>
        <span class="text-gray-500 font-semibold text-l		 flex lowercase mt-2 text-justify">
          <svg
            class="fill-current text-yellow-500 w-6 h-6 mr-1"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          {{ this.movie.vote_average * 10 }} % | {{ movie.release_date }}

          <span :key="index" v-for="(item, index) in movie.genres" class="ml-1">
            {{ item.name }}
            <span v-if="movie.genres.length - 1 != index">,</span>
          </span>
        </span>
        <p class="mt-5   lowercase text-lg	 font-semibold leading-normal text-justify text-zinc-400">
          {{ this.movie.overview }}
        </p>
<div class="mt-5">
   <div class="flex justify-between">
     <span class=" lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
         <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600"> tagline:</span>
         #{{movie.tagline}} 
          </span>
        
          <span class=" lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
         <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600"> Status:</span>
         {{movie.status}} 🙏
          </span>
   </div>
</div>
        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>

          <div class="flex">
            <div :key="index" v-for="(crew, index) in movie.credits.crew">
              <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                <span class="text-gray-500 font-bold mr-1">{{ crew.name }}</span>

                <span class="text-orange-500 font-bold mr-1">{{ crew.job }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a
            @click.prevent="openYouTubeModel"
            target="blank"
 class="rounded bg-rose-600 hover:bg-amber-400 px-5 py-3 inline-flex text-white-200 hover:text-cyan-600	  cursor-pointer"          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>

            <span class="ml-3">Play Trailer</span>
          </a>

          <a
            href="#"
            class=" hover:bg-rose-600 bg-amber-400 px-5 py-3 inline-flex hover:text-white-600 text-cyan-50	  cursor-pointer rounded ml-5"
          >
            <img src="@/assets/images/heart-white.png" alt="" />
            <span class="ml-3">Favourite</span>
          </a>
        </div>
      </div>
    </div>

    <Cast :casts="movie.credits.cast"  />
    <Images
      :images="movie.images.backdrops"
      v-on:on-image-click="showImageModel"
    />
    <MediaModel
      v-model="modelOpen"
      :mediaURL="mediaURL"
      :isVideo="this.isVideo"
    />
  </div>
</template>
<script>
import Cast from "@/components/movies/Cast";
import ActorDetail from "@/components/actors/ActorDetail";

import Images from "@/components/movies/Images";
import MediaModel from "@/components/models/MediaModel";


export default {

    components:{
        Cast,
        Images,
        MediaModel,
        ActorDetail
    },
   data () {
    return {
      movie:{
        credits: {
          crew: {}
        },
        Images:{
          backdrops:{}
        },
      },
       modelOpen: false,
       isVideo: false,
       mediaURL:"",
      
       
    }
   
    },

    mounted(){
      this.fetchMovie(this.$route.params.id)
    },
    watch:{
      "$route.params.id":{
        handler(){
          this.fetchMovie(this.$route.params.id);
        },
      },
    },
    methods:{
      async fetchMovie(movieId){
        const response = await this.$http
        .get("/movie/" + movieId + "?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16&append_to_response=videos,images,credits");
       this.movie = response.data;
      },
      openYouTubeModel(){
        this.mediaURL = this.youtubeVideo();
        this.isVideo = true;
        this.modelOpen = true;
      },
      openImageModel(){
        this.isVideo = false;
        this.modelOpen = true;
      },
     youtubeVideo(){
      if(!this.movie.videos) return;
      return `https://www.youtube.com/embed/${this.movie.videos.results[0].key}`
    },
    showImageModel(imageFullPath) {
      this.mediaURL = imageFullPath;
      this.isVideo = false;
      this.modelOpen = true;
    },
    },
      
    computed:{
    posterPath() {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    },
   
  },
    
 
}
</script>

<style>

</style>