<template>
  <div class="details" style="background-color:black;">
    <div>


      <template>
        <div>
          <section class="wrapper">
            <ul class="products">
              <li style="border: blue 3px solid;width: 650px; display: inline-grid;margin: 20px;height:900px;" class="products__product">
      <span style="color: yellow; font-size: 30px">
        <b>Detalles del producto: {{ product.name }}</b>
      </span>

                <img class="product-image" :src="product.mainImage" alt width="100%" style="border: blue 1.5px solid;margin-top:20px;margin-left:190px;height:250px; width:250px;"/>

                <p class="product-title" style="margin-top: 20px; font-size: 20px; color: yellow">
                  <b>ID del proucto: {{ product.id }}</b>
                </p>

                <p>
                  <em style="color: black; font-size: 17px">${{ product.price }}</em>
                </p>

                <p style="width: 100%;color: blue; margin-top:-100px;">
                  ${{ product.description }}
                </p>

                <div style="display: flex">

                  <router-link :to="{ name: 'Home' }" style="text-decoration: none; width: 45%">

                    <b-button  style="width: 200px;height:70px;margin-left: 11%;background-color: yellow;color: black;">
                      <b>VOLVER A LA HOME</b>
                    </b-button>

                  </router-link>

                  <b-button @click="addCarrito1" style="width: 200px;height:70px;margin-left: 11%;background-color: BLUE;color: black;">
                    <b>AÑADIR AL CARRITO</b>
                  </b-button>
                  
                </div>
              </li>
            </ul>
          </section>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import api_url from "../utils/api";

export default {
  name: "Details",
  components: {},
  created() {
    this.getProductById(this.$route.params.id);
  },
  beforeRouteUpdate(to, from) {
    this.getProductById(to.params.id);
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    getProductById(id) {
      fetch(api_url("/products/" + id))
        .then((result) => result.json())
        .then((data) => (this.product = data));
    },
    addCarrito1() {
      fetch(api_url("/cart/"), {
        method: "POST",
        body: JSON.stringify({
          productId: this.product.id,
          productName: this.product.name,
          quantity: 1,
          productPrice: this.product.price,
        }),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },
  },
};
</script>