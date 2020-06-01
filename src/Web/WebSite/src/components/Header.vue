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
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    mounted: {}
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

body {
    background: #f3f5f9
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
</style>