<template>
    <div>
        <h1>Student Concern Table</h1>
        <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-striped table-bordered table-hover">
                <thead class="thead-dark">
                    <h1></h1>
                    <tr>
                      
                        <th>Phone Number</th>
                        <th>Query</th>
                        <th>Concern</th>
                         <th>Possible Answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="query in categoryQueries" :key="query._id">
                       <td>
                           <button type="button" class="btn" data-toggle="modal" data-target="#infoConcern" @click="onClick(query._id)">{{query.phone_num}}</button>
                       </td>
                        <td>{{query.category_id}}</td>
                        <td>{{query.query_name}}</td>
                        <td>{{query.possible_answer}}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="infoConcern" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit-modal">
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
                                <h6 class="text-muted card-subtitle mb-2">{{this.queryInfo.phone_num}}</h6>
                                <h6 class="text-muted card-subtitle mb-2"><strong>MESSAGE:</strong></h6>
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
                                    <a class="card-link" href="#" v-for="intent in this.queryInfo.intent" :key="intent" @click="changeCategory(this.queryInfo._id,intent)">Sort to {{intent}}</a>
                                </div>
                                <hr>
                                <div class="mt-2" v-if="this.queryInfo.possible_answer == 'N/A'">
                                    <h6 class="text-muted card-subtitle mb-2"><strong>SEND ANSWER:</strong></h6>
                                    <form action="#" class="bg-light" @submit="sendAnswer">
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
    import Spinner from 'vue-simple-spinner';
    export default {
        name:'QueryListTable',
        computed:mapGetters(['categoryQueries','loadingSMS']),
        components: {
            vueSpinner: Spinner
        },
        
        data() {
            return {
                queryInfo:null, 
                messageAnswer:''
            }
        },
        props: ['queryTableList'],
        methods: {
            ...mapActions(['changeCategoryofQuery','sentMessageAnswerQuery']),
            onClick(id){
                console.log(id);
                this.queryInfo = this.categoryQueries.find(e=>e._id == id);
                console.log(this.queryInfo);
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
        mounted(){
            console.log(this.categoryQueries);
        }
    }
</script>

<style>
.my-custom-scrollbar {
    position: relative;
    height: 1000px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}
</style>