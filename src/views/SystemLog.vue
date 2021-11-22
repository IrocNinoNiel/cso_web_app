<template>
    <div>
        <SystemLogList/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import router from '@/router'
    import VueCookies from 'vue-cookies'
    import axios from "axios";
    import SystemLogList from '../components/SystemLogList.vue'
    export default {
        name:"SystemLog",
        components:{
            SystemLogList
        },
        computed:mapGetters(['userData']),
        methods: {
            ...mapActions(['getUserData']), 
            getUserData1: function() {  
                console.log(VueCookies.get('Token'))     
                axios.get("/api/users/dashboard", {headers:{
                  Authorization: VueCookies.get('Token')
                }})    
                    .then((response) => {    
                        if(response.data.user_role !== 'admin'){
                            router.push("/")    
                        }
                        // self.$set(this, "user", response.data.user)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/login")    
                    })    
            },
        },
        mounted(){
            this.getUserData1();
        }
    }
</script>

<style>

</style>