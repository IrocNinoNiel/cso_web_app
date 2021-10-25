<template>
    <div class="card shadow">
         <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">Student Info</p>
        </div>
        <div class="card-body">
            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                <table class="table dataTable my-0" id="dataTable">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>School</th>
                            <th>Course</th>
                            <th>Mobile Number</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student in allStudent" :key="student._id">
                            <td>
                                <button class="btn" @click="getInfoModal(student)" data-toggle="modal" data-target="#infoModal">
                                    {{student._id}}
                                </button>
                            </td>
                            <td>{{student.school}}</td>
                            <td>{{student.course}}</td>
                            <td>{{student.phone_number}}</td>
                            
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- Show Info Modal -->
        <StudentQueryTable :student="student" :countTotalKnownQuery="countTotalKnownQuery" :countTotalUnknownQuery="countTotalUnknownQuery" :queryStudentList="queryStudentList" />
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import StudentQueryTable from '../components/StudentQueryTable.vue'
import router from "../router"  
export default {
    name:'StudentListTable',
    data(){
        return{
            student:{
                id:null,
                school:null,
                course:null,
                phone_num:null
            },
            countTotalKnownQuery:0,
            countTotalUnknownQuery:0,
            queryStudentList:[],
        }
    },
    components:{StudentQueryTable},
    computed:mapGetters(['allStudent','allQueries']),
    methods: {
        ...mapActions(['getAllStudents','deleteStudent','getOneStudent','getAllQueries']), 
        getInfoModal(student){
            this.getAllQueries();

            this.student.id = student._id;
            this.student.school = student.school;
            this.student.course = student.course;
            this.student.phone_num = student.phone_number;
            
            this.queryStudentList = this.allQueries.filter(e=>e.phone_num == this.student.phone_num);

            this.countTotalKnownQuery = this.queryStudentList.filter(e=>e.faq_id != null).length;
            this.countTotalUnknownQuery = this.queryStudentList.filter(e=>e.faq_id === null).length;
        }
    },
    created(){
        this.getAllStudents();
        this.getAllQueries();
    }
}
</script>

<style>
.my-custom-scrollbar {
    position: relative;
    height: 300px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}
</style>