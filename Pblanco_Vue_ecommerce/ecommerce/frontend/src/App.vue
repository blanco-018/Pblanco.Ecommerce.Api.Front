<template>

  <div id="app">
      <header style="display:flex;background-color:black;">
      <div class="titulo" style="margin-left: 200px;">
        <h1 style="margin-left:100px; margin-top:50px;font-size:100px;color:#faf731;">Mercado Blanco</h1>
      </div>
    </header>
    
    <div id="nav" style="background-color:black; border: 2px solid blue; border-left:none; border-right:none;">    
      <router-link to="/cart" style="text-decoration: none; font-size: 18px;color:#faf731;">Carrito</router-link> /
      <router-link to="/" style="text-decoration: none; font-size: 18px;color:#faf731;">Home</router-link>  
    </div>

    <router-view/>
  </div>
</template>

<script>
import api_url from './utils/api'

export default {

  created(){
    fetch(api_url('/products'))
  },

  computed: {
    isMock() {
      return process.env.VUE_APP_API_IS_MOCK === "true"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
