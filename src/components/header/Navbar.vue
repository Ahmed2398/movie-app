<template>
 <div class="flex">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="" />
    </router-link>

    <ul class="flex mt-5">
      <li>
        <router-link to="/" class="ml-5">
          Movies
        </router-link>
      </li>
      <li>
        <router-link to="/actors" class="ml-5">
          Actors
        </router-link>
      </li>
      <li>
        <router-link to="/profile" class="ml-5" v-if="this.$store.state.isUserLoggedIn">
          Profile
        </router-link>
      </li>
    </ul>
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>