<template>
    <div>
       <EditFaqForm/>
    </div>
</template>

<script>
    import EditFaqForm from '../components/EditFaqForm.vue'
    import {mapActions, mapGetters} from 'vuex';
    import router from "../router"  
    export default {
        name:"EditFaq",
        computed:mapGetters(['oneFaq','userData']),
        components:{
            EditFaqForm
        },
        methods: {
            ...mapActions(['editOneFaq','getOneFaq']),
        },
        created(){
            this.getOneFaq();
            // console.log(`parent ${this.oneFaq._id}`)
        }
    }
</script>

<style>

</style>