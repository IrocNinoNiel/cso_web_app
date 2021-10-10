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
                                            <!-- <button class="btn btn-warning" @click="editOneFaq(faq._id)"><i class="fas fa-user-edit"></i></button> -->
                                            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editModal" @click="populateModalEdit(faq)">
                                                <i class="fas fa-user-edit"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit FAQ</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="user" @submit="editFaq">
                        <div class="form-group">
                            <input class="form-control form-control-user" type="text" id="faq_title" placeholder="FAQ Title" name="faq_title" v-model="faq.faq_title" :class="[error.faq_title ? errorClass : '']">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" type="text" id="faq_answer" placeholder="FAQ Answer" name="faq_answer" v-model="faq.faq_answer" :class="[error.faq_answer ? errorClass : '']" rows="5"></textarea>
                        </div>
                        <input type="submit" value="Edit Faq " class="btn btn-primary btn-block text-white btn-user">
                    </form>
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
        data(){
            return{
                faq:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:""
                },
                error:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:""
                },
                errorClass: 'border-danger',
                hasNoError:true,
                faqEditID:null
            }
        },
        methods: {
            ...mapActions(['getAllFaqs','deleteFaq','getOneFaq','editOneFaq']), 
            deleteOneFaq(id){
                console.log(id)
                if(confirm('Are you sure?')){
                    this.deleteFaq(id);
                }
            },
            // editOneFaq(_id){
            //     router.push({name:'EditFaq',params:{id:_id}})
            // },
            editFaq(e){
                e.preventDefault();

                this.hasNoError = true;

                this.faq.faq_title == "" ? (this.error.faq_title = true, this.hasNoError = false): this.error.faq_title = false;
                this.faq.faq_answer == "" ? (this.error.faq_answer = true, this.hasNoError = false): this.error.faq_answer = false;

                if(!this.hasNoError){
                    alert('Please Input All Fields');
                }else{
                    // console.log(this.faqEditID);
                    const data = {
                        faq:this.faq,
                        id:this.faqEditID
                    };
                    console.log(data.faq);
                    this.editOneFaq(data);
                }
            },
            populateModalEdit(faq){
                this.faq.faq_title = faq.faq_title;
                this.faq.faq_answer =faq.faq_answer;
                this.faq.officer_id = faq.officer_id;
                this.faqEditID = faq._id;
            }
        },
        mounted(){
            this.getAllFaqs();
        }
    }
</script>

<style>

</style>