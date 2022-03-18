<template>
  <div class="checkout" style="background-color:black; height:500px;">
    <div>
      <template>
        <div>
          <section class="wrapper">
<br><br><br>
            <p style="color:yellow;text-aling:center;">COMPRA COMPLETADA, DISFRUTA DE TUS PRODUCTOS :)</p>
            
            <router-link :to="{ name: 'Home' }" style="text-decoration: none; width: 45%">

            <b-button style="width: 150px;height:50px;background-color: blue;color: yellow;">
              <b>seguir comprando</b>
            </b-button>

            </router-link>
          </section>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import api_url from "../utils/api";

export default {
  name: "Home",

  components: {},
  created() {
    fetch(api_url("/products"))
      .then((result) => result.json())
      .then((data) => (this.products = data));
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {},
};
</script>
