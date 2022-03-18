<template>
  <div class="home" style="background-color:black;">
    <div>

      <span>
        <br>
             <h1 style="margin-top:20px; margin-left:150px;width:1000px; color:#faf731;
             font-size:150px; border: 2px solid blue; border-left:none; border-right:none; ">
             PRODUCTOS</h1>
        <br>
      </span>
      
      <template>
        <div>
          <section class="wrapper">

            <ul class="products" style="">

              <li style="border:blue 3px solid; width:450px; display:inline-grid; margin:20px;height:600px;" 
              v-for="product in products" :key="product.id" class="products__product">
                
                <img class="product-image" :src="product.mainImage" alt width="100%" style="border: blue 1.5px solid;margin-top:20px;margin-left:100px;height:250px; width:250px;"/>

                <p class="product-title" style="margin-top: 40px; font-size: 20px; color: blue">
                  <b>{{ product.name }}</b>
                </p>

                <p>
                  <em style="color: yellow; font-size: 15px">ID del producto: {{product.id}}</em>
                </p>

                <p>
                  <em style="color: blue; font-size: 25px; margin-top:-15px;">${{ product.price }}</em>
                </p>
                
                <div style="display:flex;">

                  <b-button @click="addCarrito(product.id, product.name, product.price,product.mainImage)" 
                  style="width: 150px;height:50px;margin-left: 11%;background-color: yellow;color: black;margin-top:-30px;">

                    <b>Añadir al carrito</b>

                  </b-button>
                  <router-link :to="{ name: 'Details', params: { id: product.id } }" style="text-decoration: none; width: 45% ;color:red;">
                    <br>
                    <b-button style="margin-left: 10%;width: 100%;background-color:blue;color: black; margin-top:-100px;">
                      <b>Detalles del producto</b>
                    </b-button>

                  </router-link>

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
  methods: {
    addCarrito(productId, productName, productPrice,mainImage) {
      fetch(api_url("/cart/"), {
        method: "POST",
        body: JSON.stringify({
          productId: productId,
          productName: productName,
          quantity: 1,
          productPrice: productPrice,
          mainImage:mainImage,
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
