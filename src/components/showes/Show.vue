<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
      <img :src="posterPath" alt="poster" class="w-64 rounded-lg" />
      <div class="ml-24">
        <h1 class="text-4xl font-bold	 capitalize hover:uppercase text-stone-100">{{ this.show.name }}</h1>
        <div class="mt-5 flex justify-items-start">
  <svg
            class="fill-current text-yellow-500 w-6 h-4 mr-1"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
            <span class="text-gray-500 font-semibold text-l		 flex lowercase mt-2 text-justify">
         
          <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600">Vote Count: <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">{{this.show.vote_count}}</span>
          </span>
          
</span>
        </div>
       
     <p class="mt-5   lowercase text-lg	 font-semibold leading-normal text-justify text-zinc-400">
      {{this.show.overview}}
     </p>
      
<div class="mt-5">
   <div class="flex justify-between">
     <span class=" lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
         <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600"> tagline:</span>
         #{{show.tagline}} 
          </span>
        
          <span class=" lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
         <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600"> Status:</span>
         {{show.status}} 🙏
          </span>
          <span class=" lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
         <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600"> Type:</span>
         {{show.type}} 
          </span>
   </div>
</div>
         <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600">Vote Average: 
        <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
          {{this.show.vote_average}}
        </span>
        <br>
      </span>
      <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600">last Air Date: <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">{{this.show.last_air_date}}</span>
      </span>
      <br>
     <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600">Number Of Episodes: <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">{{this.show.number_of_episodes}}</span>
      </span>
      <br>
     

     <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600">Number Of Seasons : <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">{{this.show.number_of_seasons}}</span>
      </span>
       <div class="mt-5">
          <span class="mt-5 font- uppercase">Featured Cast</span>

          <div class="flex">
            <div :key="index" v-for="(crew, index) in show.credits.crew">
              <div v-if="index < 2" class="flex flex-col mt-2 mr-5">
                <span class="text-gray-500 font-bold mr-1">{{ crew.name }}</span>

                <span class="text-orange-500 font-bold mr-1">{{ crew.job }}</span>
                <span class="text-white-500 font-bold mr-1">{{crew.department}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
            <span class="mt-5 font-semibold uppercase"> production companies</span>
           <div class="flex">
            <div :key="index" v-for="(production , index) in show.production_companies">
              <div v-if="index <= 10" class="flex flex-col mt-2 mr-5">
                <img  :src="'https://image.tmdb.org/t/p/w500/' + production.logo_path" alt="logo" class=" " style="width: 10%" />
                
                <span class="text-gray-500 font-bold mr-1">{{ production.name }}</span>

                <span class="text-white-500 font-bold mr-1">country:<span class="text-white-500 font-bold mr-1">{{production.origin_country}}</span></span>
                <span class="text-white-500 font-bold mr-1"></span>
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
      <div class="container mx-auto flex mt-5 border-b border-gray-600 pb-2">
        <div class="mt-5">
          <h2 class="font-semibold uppercase">seasons</h2>
        <div class="row">
           <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  gap-8 mr-10" style="    gap: 25px;">

          
        
         
            <div :key="index" v-for="(season, index) in show.seasons" class="season " >
               <img :src="'https://image.tmdb.org/t/p/w500/' + season.poster_path" class="rounded-lg h-7">
    <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600 mb-5">
                Name: 
                <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
                  {{season.name}} 
                  </span>
              </span>
              <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600">
                Air Date: 
                <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
                  {{season.air_date}} 🚀
                  </span>
              </span>
              <br>
                  <span class="lowercase text-lg	font-bold leading-normal text-justify text-orange-600">
                Episode Count:
                <span class="lowercase text-lg	font-bold leading-normal text-justify text-gray-500">
                  {{season.episode_count}} 🎬
                  </span>
                  <p class="  lowercase text-lg	 font-semibold leading-normal text-justify text-zinc-400 desc">{{season.overview}}</p>
      </span>
    
              </div>
          
            </div>
          </div>
        </div>
      </div>

<MediaModel
      v-model="modelOpen"
      :mediaURL="mediaURL"
      :isVideo="this.isVideo"
    />
      </div>

</template>

<script>
import  MediaModel from "@/components/models/MediaModel.vue"
export default {
  props:{
    
     
  },
    components:{
      MediaModel,
    },
    data () {
    return {
      show:{
        crew:{},
        production_companies:{}
      },
       modelOpen: false,
       isVideo: false,
       mediaURL:"",
    }
   
    },
    mounted(){
       this.fetchShow(this.$route.params.id)
    },
    watch:{
      "$route.params.id":{
        handler(){
          this.fetchShow(this.$route.params.id);
        },
      },
    },
    methods:{
         async fetchShow(showId){
              const response = await this.$http
        .get("/tv/" + showId + "?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16&append_to_response=videos,images,credits,");
       this.show = response.data;
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
      if(!this.show.videos) return;
      return `https://www.youtube.com/embed/${this.show.videos.results[0].key}`
    },
    showImageModel(imageFullPath) {
      this.mediaURL = imageFullPath;
      this.isVideo = false;
      this.modelOpen = true;
    },
   logoPath(production) {
      if (! production.logo_path) {
        return "https://image.tmdb.org/t/p/w300/" + production.logo_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
    },
    computed:{
        posterPath(){
            return `https://image.tmdb.org/t/p/w500${this.show.poster_path}`;
        },
        
    }

}
</script>

<style>
.season{
  margin-bottom: 10px;
}
.season img{
  width: 100%;
  height: 65vh;
}
.season .desc{
  font-size: 12px;
  line-height: 22px;
  margin: 0 20px;
}
</style>