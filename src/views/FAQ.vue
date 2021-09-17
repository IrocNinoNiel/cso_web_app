<template>
    <div>
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 class="text-dark mb-0">FAQ</h3>
        </div>
        <div class="mb-3">
            <router-link to="AddFaq" class="btn btn-success">Add FAQ</router-link>
        </div>
        <FaqList/>
       
    </div>
</template>

<script>
    import FaqList from '../components/FaqList.vue'
    export default {
        name:"faq",
        components:{
            FaqList
        }
    }
</script>

<style>

</style>