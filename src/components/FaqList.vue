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
                                    <div class="card card-body mb-2">
                                        <b>Category: </b>{{faq.category.category_name}}
                                    </div>
                                    <hr>
                                    <b>Utterances</b>
                                    <div v-for="utterance in faq.faq_utterances" :key="utterance._id">
                                        <div class="card card-body mb-2">
                                            {{utterance.value}}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="card card-body">
                                        <b>Answer: </b>
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
                            <select class="form-control " id="faq_category" v-model="faq.category_id" :class="[error.category_id ? errorClass : '']">
                                <option :value="category._id" v-for="category in allCategories" :key="category._id">{{category.category_name}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                                <button class="btn btn-outline-primary" type="button" @click="addUtterances">Add Utterances</button>
                                <p class="text-danger" v-if="noUtternaces">Please Add Utterances</p>
                                <p class="text-danger" v-if="hasEmptyUtternaces">Empty Utterances</p>
                        </div>
                        <div class="form-group">
                            <div v-for="(utterances, index) in faq.faq_utterances" :key="index">
                                <div class="row m-2">
                                    <div class="col col-8">
                                        <input v-model="faq.faq_utterances[index].value" class="form-control form-control-user" type="text">
                                    </div>
                                    <div class="col">
                                        <button @click="deleteUtterances(index)" class="btn btn-outline-danger" type="button"><i class="far fa-times-circle"></i></button>
                                    </div>
                                </div>
                            </div>
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
        computed:mapGetters(['allFaq','allCategories']),
        data(){
            return{
                faq:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:"",
                    category_id:"",
                    faq_utterances:[]
                },
                error:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:"",
                    category_id:"",
                    faq_utterances:[]
                },
                errorClass: 'border-danger',
                hasNoError:true,
                noUtternaces:false,
                hasEmptyUtternaces:false,
                faqEditID:null
            }
        },
        methods: {
            ...mapActions(['getAllFaqs','deleteFaq','getOneFaq','editOneFaq','getAllCategory']), 
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
                this.hasEmptyUtternaces = false;

                this.faq.faq_title == "" ? (this.error.faq_title = true, this.hasNoError = false): this.error.faq_title = false;
                this.faq.faq_answer == "" ? (this.error.faq_answer = true, this.hasNoError = false): this.error.faq_answer = false;
                this.faq.category_id == "" ? (this.error.category_id = true, this.hasNoError = false): this.error.category_id = false;

                this.faq.faq_utterances.length < 1 ? (this.noUtternaces = true, this.hasNoError = false): this.noUtternaces = false;

                this.faq.faq_utterances.forEach(element => {
                    if(element.value == ""){
                        this.hasEmptyUtternaces = true;
                        this.hasNoError = false
                    }
                });

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
                this.faq.faq_utterances = faq.faq_utterances;
                this.faq.category_id = faq.category_id;
            },
            addUtterances: function(){
                this.faq.faq_utterances.push({ value: '' });
            },
            deleteUtterances: function(index){
                this.faq.faq_utterances.splice(index,1);
            }
        },
        mounted(){
            this.getAllFaqs();
            this.getAllCategory();
        }
    }
</script>

<style>

</style>