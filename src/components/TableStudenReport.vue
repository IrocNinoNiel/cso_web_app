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
                    <tr v-for="query in queryTableList" :key="query._id">
                        <td>
                            <button type="button" class="btn" data-toggle="modal" data-target="#showModal" @click="tableDetails(query)">
                                <h6 class="mb-0">
                                    <h6 class="mb-0">{{query.phone_num}}</h6>
                                </h6>
                            </button>
                        </td>
                        <td>{{query.category.category_name}}</td>
                        <td>{{query.query_name}}</td>
                        <td>{{query.possible_answer}}</td>
                    </tr>
                </tbody>
            </table>
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
                                <h6 class="text-muted card-subtitle mb-2"><strong>Category:</strong></h6>
                                <p class="card-text">{{this.queryInfo.category.category_name}}</p>
                                <h6 class="text-muted card-subtitle mb-2"><strong>POSSIBLE ANSWER:</strong></h6>
                                <p class="card-text" >
                                    {{this.queryInfo.possible_answer}}
                                </p>
                                <h6 class="text-muted card-subtitle mb-2"><strong>Date:</strong></h6>
                                <p class="card-text" >
                                    {{moment(this.queryInfo.createdAt).format("MMMM D, YYYY")}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
</template>

<script>
    export default {
        name:'TableStudentReport',
        props: ['queryTableList'],
        data(){
            return{
               queryInfo:null, 
            }
        },
        methods:{
            tableDetails(data){
                console.log(data);
                this.queryInfo = data;
            }
        }
    }
</script>

<style>
.my-custom-scrollbar {
    position: relative;
    height: 500px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}
</style>