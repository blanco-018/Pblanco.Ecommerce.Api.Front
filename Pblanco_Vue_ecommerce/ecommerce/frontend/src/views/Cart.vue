<template>
  <div class="cart" style="background-color:black;">
    <div>
      <span style="margin-top:20px; margin-left:50px;width:1000px; color:#faf731;
             font-size:150px; border: 2px solid blue; border-left:none; border-right:none; ">
        <b>CARRITO</b>
      </span>
      <template>
        <div style="">
          <section class="wrapper">
            <div style="display: inline-grid;justify-content: space-between;align-items: center;margin-top: 70px; border: 2px solid blue;">

              <li v-for="product in products" :key="product.id" 
              style="color: blue;border: blue 3px solid;width: 600px;height:600px;">

                <p style="margin-top:10px; color:yellow;font-size:50px;">{{ product.productName }}</p>

                <img class="product-image" :src="product.mainImage" alt width="100%" 
                style="border: blue 1.5px solid;height:250px; width:250px;"/>

                <p style="padding: 0px 200px;font-size:20px;">{{ product.productPrice }}€</p>

                <b-button @click="eliminarProducto(product.id,product.productId,product.productName,product.productPrice)"
                    style="width: 120px;background-color: yellow;color: blue;font-size: 20px;margin-top:20px;">
                  <b>BORRAR</b>
                </b-button>

              </li>
            </div>
          </section>
        </div>

        <router-link :to="{ name: 'Orders' }" style="text-decoration: none; width: 45%">

          <b-button @click="ConfirmarCompra()" style="background-color:blue;color: yellow;margin-top: 15px;width: 300px;height: 50px;">
            <b>Confirmar pago</b>
          </b-button>
          
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>

import api_url from "../utils/api";

export default {
  name: "Cart",

  components: {},
  created() {
    fetch(api_url("/cart/"))
      .then((result) => result.json())
      .then((data) => (this.products = data));
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    eliminarProducto(id, productId, productName, productPrice) {
      fetch(api_url("/cart/" + id), {
        method: "DELETE",
        body: JSON.stringify({
          productId: productId,
          productName: productName,
          productPrice: productPrice,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetch(api_url("/cart/"))
        .then((result) => result.json())
        .then((data) => (this.products = data));
    },
    ConfirmarCompra() {
      for (let i = 0; i < this.products.length; i++) {
        fetch(api_url("/orders/"), {
          method: "POST",
          body: JSON.stringify({
            productId: this.products[i].id,
            productName: this.products[i].productName,
            productPrice: this.products[i].productPrice,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      fetch(api_url("/orders/"), {
        method: "POST",
        body: JSON.stringify({
          totalOrder: this.totalCart,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      for(let i = 0; i <= this.products.length+1; i++){
        fetch(api_url("/cart/" + i), {
          method: "DELETE",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    },
  },
};
</script>