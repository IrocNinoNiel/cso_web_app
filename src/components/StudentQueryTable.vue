<template>
    <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="info-modal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Student Information</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <b>Student ID:</b><p>{{this.student.id}}</p>
                    </div>
                    <div class="col">
                        <b>School</b><p>{{this.student.school}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <b>Course</b><p>{{this.student.course}}</p>
                    </div>
                    <div class="col">
                        <b>Mobile Number</b><p>{{this.student.phone_num}}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <b>Total Number of Known Queries</b><p>{{this.countTotalKnownQuery}}</p>
                    </div>
                    <div class="col">
                        <b>Total Number of Unknown Queries</b><p>{{this.countTotalUnknownQuery}}</p>
                    </div>
                </div>
                <hr>
                <h3>Queries</h3>
                <div class="table-responsive table mt-2 table-wrapper-scroll-y my-custom-scrollbar" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table class="table dataTable my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>Query</th>
                                <th>Category</th>
                                <th>Message Reply</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="query in queryStudentList" :key="query._id">
                                <td>{{query.query_name}}</td>
                                <td>{{query.category.category_name}}</td>
                                <td>{{query.possible_answer}}</td>
                                <td>{{moment(query.createdAt).format("MMM D, YYYY")}}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'StudentQueryTable',
        props:{
            student:Object,
            countTotalKnownQuery:Number,
            countTotalUnknownQuery:Number,
            queryStudentList:Array,
        }
    }
</script>

<style scoped>

</style>