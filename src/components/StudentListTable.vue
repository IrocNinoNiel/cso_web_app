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
                            <th>Mobile Number</th>
                            <th>Student Name</th>
                            <th>School</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student in allStudent" :key="student._id">
                            <td>
                                <button class="btn" @click="getInfoModal(student)" data-toggle="modal" data-target="#infoModal">
                                    {{student.phone_num}}
                                </button>
                            </td>
                            <td v-if="student.student">
                                {{student.student.first_name}} {{student.student.last_name}}
                            </td>
                            <td v-else>
                                no data
                            </td>
                            <td v-if="student.student">
                                {{student.student.school}}
                            </td>
                             <td v-else>
                                no data
                            </td>
                            <td v-if="student.student">
                                {{student.student.course}}
                            </td>
                             <td v-else>
                                no data
                            </td>
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
                phone_num:null,
                first_name:null,
                last_name:null,
            },
            countTotalKnownQuery:0,
            countTotalUnknownQuery:0,
            queryStudentList:[],
        }
    },
    components:{StudentQueryTable},
    computed:mapGetters(['allStudent','allQueries','oneStudent']),
    methods: {
        ...mapActions(['deleteStudent','getOneStudent','getAllQueries','getInquirer']), 
        getInfoModal(student){
            this.getAllQueries();

            if(student.student != null){
                this.student.id = student.student.student_id;
                this.student.school = student.student.school;
                this.student.course = student.student.course;
                this.student.phone_num = student.student.phone_number;
                this.student.first_name = student.student.first_name;
                this.student.last_name = student.student.last_name;
            }else{
                this.student.id = 'no data';
                this.student.school = 'no data';
                this.student.course = 'no data';
                this.student.phone_num = 'no data';
                this.student.first_name = 'no data';
                this.student.last_name = 'no data';
            }

            
            this.queryStudentList = this.allQueries.filter(e=>e.phone_num == student.phone_num);

            this.countTotalKnownQuery = this.queryStudentList.filter(e=>e.category.category_name !== 'others').length;
            this.countTotalUnknownQuery = this.queryStudentList.filter(e=>e.category.category_name === 'others').length;
        }
    },
    created(){
        this.getInquirer();
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