<template>
    <div>
       <div class="container-fluid">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 class="text-dark mb-0">Unregistered Concerns</h3>
            </div>
            <div class="row">
                <div class="col">
                    <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar-x">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Phone number</th>
                                    <th>School</th>
                                    <th>Concern</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="query in otherpossiblecategory" :key=query._id>
                                    <td>
                                        <p v-if="query.student">
                                            {{query.student.student_id}}
                                        </p>
                                        <p v-else class="text-center">
                                            --
                                        </p>
                                    </td>
                                    <td>{{query.phone_num}}</td>
                                    <td>
                                        <p v-if="query.student" class="text-center">
                                            {{query.student.school}}
                                        </p>
                                        <p v-else class="text-center">
                                            --
                                        </p>
                                    </td>
                                    <td>{{query.query_name}}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#unRegisteredConcern" @click="onClick(query._id)">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Unregistered Concerns Modal -->
        <div class="modal fade" id="unRegisteredConcern" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit-modal">
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
                                    <a class="card-link" href="#" v-for="intent in this.queryInfo.intent" :key="intent" @click="changeCategory(intent)">Assign to {{intent}}</a>
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
        name:"OtherQueryList",
        computed:mapGetters(['otherpossiblecategory','loadingSMS']),
        components: {
            vueSpinner: Spinner
        },
        data() {
            return {
                queryInfo:null, 
                messageAnswer:''
            }
        },
        methods: {
            ...mapActions(['changeCategoryofQuery','sentMessageAnswerQuery']),
            onClick(id){
                console.log(id);
                this.queryInfo = this.otherpossiblecategory.find(e=>e._id == id);
                console.log(this.queryInfo);
            },
            changeCategory(intent){
                const data = {
                    id:this.queryInfo._id,
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
        
    }
</script>

<style>
.my-custom-scrollbar-x {
    position: relative;
    height: 1000px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}
</style>