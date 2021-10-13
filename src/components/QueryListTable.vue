<template>
    <div>
        <h1>Student Concern Table</h1>
        <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Student Name</th>
                        <th>School</th>
                        <th>Phone Number</th>
                        <th>Concern</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in queryTableList" :key="student._id">
                        <td>{{student.student.first_name}} {{student.student.last_name}}</td>
                        <td>{{student.student.school}}</td>
                        <td>{{student.student.phone_number}}</td>
                        <td>{{student.query_name}}e</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
       
</template>

<script>


    export default {
        name:'QueryListTable',
        props: ['queryTableList']
        
    }
</script>

<style>

</style>