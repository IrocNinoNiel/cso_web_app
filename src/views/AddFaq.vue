<template>
    <div>
       <AddFaqForm/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import AddFaqForm from '../components/AddFaqForm.vue'
    export default {
        name:"AddFaq",
        computed:mapGetters(['allFaq','userData']),
        components:{
            AddFaqForm
        },
        methods: {
            ...mapActions(['getAllFaqs']), 
        },
        // mounted(){
        //     console.log(this.userData)
        // }
    }
</script>

<style>

</style>