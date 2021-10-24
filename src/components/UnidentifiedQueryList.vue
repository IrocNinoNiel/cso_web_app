<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-body">
                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">Unidentified Query</p>
                    </div>
                    <div class="messages-box messageContainerClass">
                        <div class="list-group rounded-0">
                            <div v-for="unidentified in unidentifiedQuery" :key="unidentified._id">
                                <!-- active text-white -->
                                <a class="list-group-item list-group-item-action rounded-0">
                                    <div class="media">
                                        <div class="media-body ml-4">
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                            
                                                <button type="button" class="btn" data-toggle="modal" data-target="#addModal" @click="addNewFAQButton(unidentified)">
                                                    <h6 class="mb-0">
                                                        <h6 class="mb-0">{{unidentified.phone_num}}</h6>
                                                    </h6>
                                                </button>
                                                <small class="small font-weight-bold">{{moment(unidentified.createdAt).format("MMM Do")}}</small>
                                            </div>
                                            
                                            <p class="font-italic mb-0 text-small textLimit">{{unidentified.query_name}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add New FAQ -->
        <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New FAQ</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="user" @submit="addFaq">
                        <div class="form-group">
                            <input class="form-control form-control-user" type="text" id="faq_title" placeholder="FAQ Title" name="faq_title" v-model="faq.faq_title" :class="[error.faq_title ? errorClass : '']">
                        </div>
                        <div class="form-group">
                            <select class="form-control " id="faq_category" v-model="faq.category_id" :class="[error.category_id ? errorClass : '']">
                                <option :value="category._id" v-for="category in allCategories" :key="category._id">{{category.category_name}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input v-model="temptValue" class="form-control form-control-user" :class="[error.faq_utterances ? errorClass : '']" type="text"   disabled>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" type="text" id="faq_answer" placeholder="FAQ Answer" name="faq_answer" v-model="faq.faq_answer" :class="[error.faq_answer ? errorClass : '']" rows="5"></textarea>
                        </div>
                        <div v-if='loadingSMS'>
                            <div class="media w-50 mb-3">
                                <vueSpinner/>
                            </div>
                        </div>
                        <input type="submit" value="Add New Faq " class="btn btn-primary btn-block text-white btn-user">
                    </form>
                </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import router from '@/router'

    export default {
        name:'UnidentifiedQueryList',
        computed:mapGetters(['unidentifiedQuery','allCategories','userData','loadingSMS']),
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
                    faq_utterances:"",
                },
                temptValue: '',
                errorClass: 'border-danger',
                hasNoError:true,
                noUtternaces:false,
                hasEmptyUtternaces:false,
                faqEditID:null,
                sms:{
                    number:'',
                    text:'',
                },
            }
        },
        methods: {
            ...mapActions(['getUnidentifiedQuery','addNewFaqDashboard','sentMessageDashboard']), 
            addFaq(e){
                e.preventDefault();
                this.hasNoError = true;
                
                this.faq.faq_title == "" ? (this.error.faq_title = true, this.hasNoError = false): this.error.faq_title = false;
                this.faq.faq_answer == "" ? (this.error.faq_answer = true, this.hasNoError = false): this.error.faq_answer = false;
                this.faq.category_id == "" ? (this.error.category_id = true, this.hasNoError = false): this.error.category_id = false;

                if(!this.hasNoError){
                    alert('Please Input All Fields');
                }else{
                    this.faq.faq_utterances.push({value:this.temptValue});
                    const data = {
                        faq:this.faq,
                        id:this.faqEditID
                    };
                    this.sms.text = this.faq.faq_answer;

                    console.log(this.sms);
                    console.log(data.faq);

                    this.addNewFaqDashboard(data.faq);
                    this.sentMessageDashboard(this.sms);
                    alert('SMS Send and Saved');

                    router.go(router.currentRoute);

                }
            },
            addNewFAQButton(unidentified){
                this.temptValue = unidentified.query_name;
                this.sms.number = unidentified.phone_num;
                this.faq.officer_id = this.userData._id;
            }
        },
        created(){
            window.addEventListener('load', this.getUnidentifiedQuery())
        }
    }
</script>

<style scoped>
    .messageContainerClass {
        height:300px;
        overflow-y: scroll;
    }

    .textLimit {
        width:150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>