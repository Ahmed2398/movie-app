<template>
  <div class="container mx-auto py-16">
    <h2 class="text-yellow-500 text-lg font-semibold">
      POPULAR ACTORS
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
    >
      <ActorOne :key="actor.id" v-for="actor in this.actors" :actor="actor" />
    </div>
    <!-- <div class="flex justify-center">
<div class="spinner">11</div>
    </div> -->
    <div class="text-center mt-5 ">
      <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-orange-500 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900  " href="" v-on:click.prevent="previous()">
        Previous
      </a>
      <a class="roup inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-500 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 ml-5 " href="" v-on:click.prevent="next()">
        Next
      </a>
    </div>
   
  </div>
</template>

<script>

import ActorOne from "../items/ActorOne";
import ActorDetail from "../actors/ActorDetail";

  let currentPage = 1;

export default {
  data() {
    return {
      actors: [],
    };
  },
  components: {
    ActorOne,
    ActorDetail
  },

  mounted() {
    this.fetchActors(currentPage);
    // this.scroll();
  },

  methods: {
    async fetchActors(page) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/person/popular?api_key=8c0c4f0ffe0491beaa6e0c8fa562fe16&page=" + page
        );
        this.actors = response.data.results;
        // this.actors.push(...response.data.results);
      } catch (error) {
        console.log(error);
      }
    },

    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          currentPage += 1;
          this.fetchActors((currentPage += 1));
        }
      };
    },

    next() {
      currentPage += 1;
      this.fetchActors(currentPage);
    },
    previous() {
      currentPage -= 1;
      this.fetchActors(currentPage);
    },
  },
};
</script>

<style></style>