<!--Nicolas Lardier-->
<template>
    <div>
        <div class="headBar">
            <h2>Voir tout</h2>
            <font-awesome-icon class="icon" icon="search" />
            <font-awesome-icon class="icon" icon="shopping-bag" />
        </div>
        <div class="sidebar">
            <img src="../assets/logoB.png">
            <ul>
                <li><a href="#">Voir tout</a></li>
                <li><a href="#">Parre douche</a></li>
                <li><a href="#">Paroi</a></li>
                <li><a href="#">Cheminée</a></li>
            </ul>
        </div>

        <div class="main-content">
            <div class="header">Filtre</div>
            <div class="info">
                <section class="cards">
                    <div v-for="cart in info">
                        <div class="card">
                            <div class="card_image-container">
                                <img src="https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" />
                            </div>
                            <div class="card_content">
                                <p class="card__title text--medium">
                                    {{ cart.libe }} <!--libe-->
                                </p>
                                <div class="card__info">
                                    <p class="card__price text--medium">
                                        {{ cart.price }}€ <!--price-->
                                    </p>
                                    <p class="card__bPanier text--medium">
                                        Ajouter
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api';

export default {
    data () {
        return {
            info:[],
            errors:''
        }
    },
    created () {
        api.get('catalog')
                .then(response => {
                    if(response.data.data != null && response.data.data.products != null){
                        this.info = response.data.data.products
                    }
                })
                .catch(e => {
                    this.errors = e
                })
    }
}
</script>

<style>
.main-content {
    width: 80%;
    margin-left: 250px;
    margin-top: 5%;
}

.header {
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    font-size: 25px;
    text-decoration: underline;
}

.sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: #e0e0e0;
    padding: 30px 0;
    z-index: 1;
}

.sidebar img {
    margin-bottom: 30px;
    width: 150px;
    margin-left: 15px;
}

.sidebar ul li {
    padding: 15px;
    border-top: 1px solid rgba(225,225,225,0.05);
    border-bottom: 1px solid rgba(0,0,0,0.05);
}

.sidebar ul li:hover {
    background: #cccccc;
}


.sidebar ul li a {
    color: red;
    display: block;
}

.headBar {
    position: fixed;
    width: 100%;
    height: 90px;
    background-color: #e0e0e0;
    margin-left: 200px;
    display: block;
    z-index: 1;
}

.headBar h2 {
    width: 100%;
    text-align: center;
    margin-top: 1.5%;
    text-transform: uppercase;
    color: red;
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.info{
    display: grid;
    grid-template-columns: 1fr repeat(12,minmax(auto, 60px)) 1fr;
    grid-gap: 40px;
    padding: 60px 0;
}

.text--medium {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #ecf0f1;
}

.cards {
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(3,minmax(auto, 300px));
    grid-gap: 100px;
}

.card {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: #39393b !important;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    z-index: 0;
}

.card:hover {
    transform: translateY(-7px);
}

.card_image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
}

.card_image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card_content {
    padding: 20px;
}

.card__title {
    margin-bottom: 20px;
}

.card__info {
    display: flex;
    align-self: end;
    align-items: center;
}

.card__bPanier {
    margin-left: auto;
    padding: 5px 20px;
    background-color: #303032;
    border-radius: 20px;
}

.card__bPanier:hover {
    background-color: #4a6e55;
}

@media only screen and (max-width: 1000px) {
    .card {
        grid-column-end: span 6;
    }
}

@media only screen and (max-width: 700px) {
    .main-content {
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 12;
    }
}

@media only screen and (max-width: 500px) {
    .main-content {
        grid-template-columns: 10px repeat(6, 1fr) 10px;
        grid-gap: 20px;
    }
    .cards {
        grid-column: 2 / span 6;
        grid-template-columns: repeat(6,1fr);
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 6;
    }
}


.product {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 340px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .25);
    border-radius: 5px;
}
</style>