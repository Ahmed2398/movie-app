<template>
    <div>
       <router-link :to="`/actor/${this.actor.id}`">
      <div class="  w-full hover:opacity-70 transition easy-in-out duration-150 ">
       <div class="bg-white rounded-lg shadow-lg">
    
    <img :src="profileImage" alt="" class="rounded-t-lg w-full"  />
    <div class="p-6 text-center">
      <h2 class="font-bold mb-2 text-1xl text-purple-800">{{ actor.name }}
      </h2>
      <p class="text-purple-700 mb-2">  {{ knownFor }}</p>
    </div>

  </div>
      </div>
       </router-link>
    
  </div>
</template>

<script>
export default {
props:{
  actor:{
    required:true,
  }
},
 computed: {
    profileImage() {
      return (
        "https://image.tmdb.org/t/p/w235_and_h235_face/" +
        this.actor.profile_path
      );
    }
}
}
</script>

<style>

</style>