<template>
    
  <div id="page-top">
    <router-view> </router-view>
  </div>
</template>

<script>
  export default {
    name: 'App' ,
  }
</script>

<style>
#page-top{
  height: 100vh;
}

@media (min-width: 1200px) {
  #bg {
    width: 100%;
    height: 100vh;
    background-image: url("./assets/img/background%20-%20Copy.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
  }
}

.navbar-brand-main {
  background-image: url("./assets/img/logo.png");
  background-size: 75px 40px;
  background-repeat: no-repeat;
  background-position: center; 
}

#navcol-1 {
  font-size: 35px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.navbar-light .navbar-nav .nav-link {
  color: #000000;
}


</style>
