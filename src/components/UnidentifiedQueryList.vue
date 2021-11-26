<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-body">
                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">Recent Unidentified Query</p>
                    </div>
                    <div class="messages-box messageContainerClass">
                        <div class="list-group rounded-0">
                            <div v-for="unidentified in otherpossiblecategory" :key="unidentified._id">
                                <!-- {{unidentified}} -->
                                <!-- active text-white -->
                                <a class="list-group-item list-group-item-action rounded-0">
                                    <div class="media">
                                        <div class="media-body ml-4">
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                            
                                                <button type="button" class="btn" data-toggle="modal" data-target="#showModal" @click="unknownFAQButton(unidentified)">
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

        <!-- Details modal -->
        <div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit-modal">
             <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card">
                            <div class="card-body" v-if="this.queryInfo != null">
                                <h4 class="card-title">
                                    <strong v-if="this.queryInfo.student">{{this.queryInfo.student.student_id}}</strong>
                                    <strong v-else>--</strong>
                                </h4>
                                <h6 class="text-muted card-subtitle mb-2"><strong>Contact Number:</strong></h6>
                                <h6 class="card-text">{{this.queryInfo.phone_num}}</h6>
                                <h6 class="text-muted card-subtitle mb-2 mt-2"><strong>MESSAGE:</strong></h6>
                                <p class="card-text">{{this.queryInfo.query_name}}</p>
                                <h6 class="text-muted card-subtitle mb-2"><strong>Date:</strong></h6>
                                <p class="card-text">{{moment(this.queryInfo.createdAt).format("MMM D, YYYY")}}</p>
                                <h6 class="text-muted card-subtitle mb-2"><strong>KEYWORDS IDENTIFIED:</strong></h6>
                                <p class="card-text">{{this.queryInfo.key_words}}</p>
                                <h6 class="text-muted card-subtitle mb-2"><strong>POSSIBLE QUERIES:</strong></h6>
                                <p class="card-text" v-if="this.queryInfo.intent == 0">
                                    No Possible Queries Found
                                    <br>
                                </p>
                                <p class="card-text" v-else>
                                    {{this.queryInfo.intent}}
                                </p>
                                <h6 class="text-muted card-subtitle mb-2"><strong>ACTIONS:</strong></h6>
                                <div v-if="this.queryInfo.intent != 0">
                                    <a class="card-link" href="#" v-for="intent in this.queryInfo.intent" :key="intent" @click="changeCategory(queryInfo._id,intent)">Sort to {{intent}}</a>
                                </div>
                                <hr>
                                <div class="mt-2" v-if="this.queryInfo.possible_answer == 'N/A'">
                                    <h6 class="text-muted card-subtitle mb-2"><strong>SEND ANSWER:</strong></h6>
                                    <form action="#" class="bg-light"  @submit="sendAnswer">
                                        <div class="input-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="messageAnswer" ></textarea>
                                            <div class="input-group-append">
                                                <button id="button-addon2" type="submit" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                    <div v-if='loadingSMS' class="mb-2 mt-3">
                                        <vueSpinner/>
                                    </div>
                                </div>
                                <div v-else>
                                    <h6 class="text-muted card-subtitle mb-2"><strong>MESSAGE REPLY:</strong></h6>
                                    <p>{{this.queryInfo.possible_answer}}</p>
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
    import router from '@/router'
    import Spinner from 'vue-simple-spinner';
    export default {
        name:'UnidentifiedQueryList',
        computed:mapGetters(['unidentifiedQuery','otherpossiblecategory','loadingSMS']),
        components: {
            vueSpinner: Spinner
        },
        data(){
            return{
               queryInfo:null, 
               messageAnswer:''
            }
        },
        methods: {
            ...mapActions(['getUnidentifiedQuery','getOtherPossibleCategory','changeCategoryofQuery','sentMessageAnswerQuery']), 
            unknownFAQButton(unidentified){
                console.log(unidentified)
                this.queryInfo = this.otherpossiblecategory.find(e=>e._id == unidentified._id);
            },
            changeCategory(id,intent){
                const data = {
                    id,
                    category_name:intent
                }
                this.changeCategoryofQuery(data);
            },
            sendAnswer(e){
                e.preventDefault();
                let data = {
                    message:this.messageAnswer,
                    query_info:this.queryInfo
                }
                this.sentMessageAnswerQuery(data);
            }
        },
        created(){
            window.addEventListener('load', this.getOtherPossibleCategory())
            console.log('here')
            console.log(this.otherpossiblecategory);
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