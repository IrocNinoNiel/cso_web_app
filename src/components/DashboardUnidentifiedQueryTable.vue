<template>
    <div>
        <div class="row ml-2">
            <div class="form-group">
                <label for="categoryChoose">Select Category</label>
                <select class="form-control" v-model="selectedCategory" @change="newSelectedCategory">
                    <option value="all" selected>All</option>
                    <option v-for="category in allCategories" :value="category.category_name" :key="category._id">
                        {{ category.category_name }}
                    </option>
                </select>
            </div>
        </div>
         <div class="row">
            <div class="col-6 mb-2">
                <div class="card shadow border-left-primary">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2" @click="clickDate(0)">
                                <button class="btn">
                                    <div class="text-uppercase text-primary text-xs mb-1"><span>All Uncategorized QUERIES</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span></span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 mb-2">
                <div class="card shadow border-left-warning">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2">
                                <button class="btn" @click="clickDate(2)">
                                    <div class="text-uppercase text-warning text-xs mb-1"><span>All Uncategorized QUERIES This Month</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span></span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card shadow border-left-danger">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2">
                                <button class="btn" @click="clickDate(3)">
                                    <div class="text-uppercase text-danger text-xs mb-1"><span>All Uncategorized QUERIES This Week</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span></span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card shadow border-left-success">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2">
                                <button class="btn" @click="clickDate(4)">
                                    <div class="text-uppercase text-success text-xs mb-1"><span>All Uncategorized QUERIES this day</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span></span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                    <tr v-for="query in selectedCategoryFunction" :key="query._id">
                       <td>
                           <button type="button" class="btn" data-toggle="modal" data-target="#infoConcern" @click="onClick(query)">{{query.phone_num}}</button>
                       </td>
                        <td>{{query.category.category_name}}</td>
                        <td>{{query.query_name}}</td>
                        <td>{{query.possible_answer}}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Details modal -->
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
                                    <strong v-if="this.queryInfo.student">{{this.queryInfo.student.first_name}} {{this.queryInfo.student.last_name}}</strong>
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
                                    <a class="card-link" href="#" v-for="intent in this.queryInfo.intent" :key="intent" @click="changeCategory(queryInfo._id,intent)">Assign to {{intent}}</a>
                                </div>
                                <hr>
                                <div class="mt-2" v-if="this.queryInfo.possible_answer == 'N/A'">
                                    <h6 class="text-muted card-subtitle mb-2"><strong>SEND ANSWER:</strong></h6>
                                    <form action="#" class="bg-light"  @submit="sendAnswerQuery">
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
    name: 'DashboardUnidentifiedQueryTable',
    computed:{
        ...mapGetters(['allCategories','currentUnidentifedQuery','loadingSMS']),
        selectedCategoryFunction(){
            return this.currentUnidentifedQuery;
        }
    },
    components: {
            vueSpinner: Spinner
    },
    data() {
        return{
            selectedCategory: 'all',
            queryList:[],
            queryInfo:null,
            messageAnswer:''
        }
    },
    methods:{
        ...mapActions(['GetCurrentUnidentifiedQuery','getAllCategory','sentMessageAnswerQuery','changeCategoryofQuery']),
        newSelectedCategory(){
            const data = {
                category_name:this.selectedCategory,
                date:0
            }
            this.GetCurrentUnidentifiedQuery(data);
        },
        clickDate(number){
            const data = {
                category_name:this.selectedCategory,
                date:number
            }
            
            console.log(data);
            this.GetCurrentUnidentifiedQuery(data);
        },
        onClick(query){
            this.queryInfo = query;
            console.log(this.queryInfo);
        },
        sendAnswerQuery(e){
            e.preventDefault();
            let data = {
                message:this.messageAnswer,
                query_info:this.queryInfo
            }
            this.sentMessageAnswerQuery(data);
            // console.log(data);
        },
        changeCategory(id,intent){
            const data = {
                id,
                category_name:intent
            }
            this.changeCategoryofQuery(data);
        },
    },
    created(){

        this.getAllCategory();
        const data = {
                category_name:'all',
                date:0
            }
        this.GetCurrentUnidentifiedQuery(data);

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