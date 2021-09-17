<template>
    <div class="card shadow">
         <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">Student Info</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 text-nowrap">
                    <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select class="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected="">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>&nbsp;</label></div>
                </div>
                <div class="col-md-6">
                    <div class="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"></label></div>
                </div>
            </div>
            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                <table class="table dataTable my-0" id="dataTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>School</th>
                            <th>Address</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student in allStudent" :key="student._id">
                            <td>{{student.first_name}} {{student.last_name}}</td>
                            <td>{{student.school}}</td>
                            <td>{{student.address}}</td>
                            <td>{{student.phone_number}}</td>
                            <td class="row">
                                <div class="mr-1">
                                    <button class="btn btn-danger" @click="deleteOneStudent(student._id)"><i class="far fa-times-circle"></i></button>
                                </div>
                                <div class="ml-1">
                                    <button class="btn btn-warning" @click="editStudent(student._id)"><i class="fas fa-user-edit"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>
            </div>
            <div class="row">
                <div class="col-md-6 align-self-center">
                    <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                </div>
                <div class="col-md-6">
                    <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                            <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import router from "../router"  
export default {
    name:'StudentListTable',
    computed:mapGetters(['allStudent']),
    methods: {
        ...mapActions(['getAllStudents','deleteStudent','getOneStudent']), 
        deleteOneStudent(id){
            if(confirm('Are you sure??')){
                this.deleteStudent(id);
            }
        },
        editStudent(_id){
            router.push({name:'EditStudent',params:{id:_id}})
        }
    },
    mounted(){
        this.getAllStudents();
    }
}
</script>

<style>

</style>