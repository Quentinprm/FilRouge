<template>
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://images.unsplash.com/photo-1543393470-b2c833b98dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"></b-carousel-slide>
                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://images.unsplash.com/photo-1554332208-9dfebcc48334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></b-carousel-slide>
                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://images.unsplash.com/photo-1512842717373-a3501bef3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"></b-carousel-slide>
                </b-carousel>
            </div>
            <div class="col-md-7">
                <p class="newarrival text-center">New</p>
                <h2>Men's test ff</h2>
                <p>Product code:2435346634</p>
                <p class="price">15.00€</p>
                <p><b>EN STOCK</b></p>
                <label>Quantity:</label>
                <input type="text" value="1">
                <b-button type="button" class="btn btn-default cart">Ajouter au panier</b-button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.container {
    margin-top: 100px;
}
.newarrival {
  background: green;
  width: 50px;
  color: white;
  font-size: 12px;
  font-weight: bold;
}
.col-md-7 h2 {
  color: #555;

}
.price {
  color: #FE980F;
  font-size: 26px;
  font-weight: bold;
  padding-top: 20px;
}
input {
  border: 1px solid #ccc;
  font-weight: bold;
  height: 33px;
  text-align: center;
  width: 35px;
}
.cart{
  background: #FE980F;
  color: #FFFFFF;
  font-size: 15px;
  margin-left: 20px;
  height: 33px;
}
</style>