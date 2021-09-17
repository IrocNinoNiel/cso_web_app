<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-xl-3 mb-4" v-for="faq in allFaq" :key="faq._id">
                <div class="card shadow border-left-primary py-2">
                    <div class="card-body">
                        <div class="row align-items-center no-gutters">
                            <div class="col mr-2">
                                <div class="mb-2">
                                    <a class="btn" data-toggle="collapse" :href="'#'+faq._id" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>{{faq.faq_title}}</span></div>
                                    </a>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span></span></div>
                                </div>
                                <div class="collapse" :id=faq._id>
                                    <div class="card card-body">
                                        {{faq.faq_answer}}
                                    </div>
                                    <div class="row ml-1 mt-2">
                                        <div class="mr-1">
                                            <button class="btn btn-danger" @click="deleteOneFaq(faq._id)"><i class="far fa-times-circle"></i></button>
                                        </div>
                                        <div class="ml-1">
                                            <button class="btn btn-warning" @click="editOneFaq(faq._id)"><i class="fas fa-user-edit"></i></button>
                                        </div>
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
    import {mapActions, mapGetters} from 'vuex';
    import router from "../router"  
    export default {
        name:"faqlist",
        computed:mapGetters(['allFaq']),
        methods: {
            ...mapActions(['getAllFaqs','deleteFaq','getOneFaq']), 
            deleteOneFaq(id){
                console.log(id)
                if(confirm('Are you sure?')){
                    this.deleteFaq(id);
                }
            },
            editOneFaq(_id){
                router.push({name:'EditFaq',params:{id:_id}})
            }
        },
        mounted(){
            this.getAllFaqs();
        }
    }
</script>

<style>

</style>