<template>
    <div class="bg-gradient-primary div-login" :style="{ backgroundImage: 'url(' + require('@/assets/img/background.png') + ')' }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-12 col-xl-10">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-flex">
                                    <div class="flex-grow-1 bg-login-image" :style="{ backgroundImage: 'url(' + require('@/assets/img/cso.jpg') + ')' }"></div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h4 class="text-dark mb-4">Welcome</h4>
                                        </div>
                                        <form class="user" @submit="login">
                                            <div class="form-group">
                                                <input class="form-control form-control-user" type="text" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Username..." name="email" v-model="email"></div>
                                            <div class="form-group">
                                                <input class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" v-model="password">
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1"><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                                </div>
                                            </div>
                                            <!-- <router-link to="dashboard" class="btn btn-primary btn-block text-white btn-user" type="submit">Login</router-link> -->
                                            <input type="submit" value="Login" class="btn btn-primary btn-block text-white btn-user">
                                            <hr>
                                            <hr>
                                        </form>
                                        <!-- <div class="text-center"><router-link to="login" class="small" href="forgot-password.html">Forgot Password?</router-link></div> -->
                                        <!-- <div class="text-center"><router-link to="register" class="small">Create an Account!</router-link></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router'
    import VueCookies from 'vue-cookies'
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name:"Login" ,
        data(){
            return{
                image: require('@/assets/img/cso.jpg'),
                email:'',
                password:''
            }
        },
        methods: {
            ...mapActions(['getUser']),
           login(e){    
                e.preventDefault()    
                let email = this.email
                let password = this.password  
                let login = () => {    
                    let data = {    
                        username: email,    
                        password: password    
                    } 
                    axios.post("api/users/login-user", data)    
                        .then((response) => {    
                            VueCookies.set('Token' , response.data.token, "1h") 
                            this.getUser(response.data);
                            router.push("/")    
                        })    
                        .catch((errors) => {    
                            console.log(errors);
                            alert('Invalid Credentials')
                        })    
                }    
                login()    
            },
            getUserData: function() {  
                let self = this    
                axios.get("/api/users/dashboard", {headers:{
                  Authorization: VueCookies.get('Token')
                }})    
                    .then((response) => {     
                        this.getUser(response.data);
                        router.push("/")    
                    })    
                    .catch((errors) => {    
                        console.log(errors)       
                    })    
            },
        },
        mounted() {     
            this.getUserData()    
        } 
    }
</script>

<style>
.div-login{
    height: 100vh;
}

@media (min-width: 1200px) {
  .div-login{
        height: 100vh;
    }
}

</style>