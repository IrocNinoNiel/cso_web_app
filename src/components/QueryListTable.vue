<template>
    <div class="row">
        <div class="col">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>School</th>
                            <th>Concern</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student in queryTableList" :key="student._id">
                            <td>{{student.studentInfo.first_name}} {{student.studentInfo.last_name}}</td>
                            <td>{{student.studentInfo.school}}</td>
                            <td>{{student.queryInfo.query_name}}e</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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