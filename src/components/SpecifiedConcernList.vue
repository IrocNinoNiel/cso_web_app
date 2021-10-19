<template>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <h6 class="text-primary font-weight-bold m-0">All Counted Concerns</h6>
                    </div>
                    <div class="col text-right">
                        <b>{{allQueries.length}}</b>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div v-for="category in allCategories" :key="category._id">
                     <h4 class="small font-weight-bold">{{category.category_name}}<span class="float-right">{{allQueries.filter(e=>e.category_id == category._id).length}}</span></h4>
                    <div class="progress mb-4">
                        <div class="progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: countPercentage(category)+'%'}"><span class="sr-only">20%</span></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name:'SpecifiedConcernList',
        computed:mapGetters(['allQueries','allCategories']),
        methods: {
            ...mapActions(['getAllQueries']),
            loadOnReload(){
                this.getAllQueries();
            },
            countPercentage(category){
                return this.allQueries.filter(e=>e.category_id == category._id).length
            }
        },
        created() {
            window.addEventListener('load', this.loadOnReload)
            this.getAllQueries();
        }
        
    }
</script>

<style>

</style>