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
                        <td>{{query.phone_num}}</td>
                        <td>{{query.category.category_name}}</td>
                        <td>{{query.query_name}}</td>
                        <td>{{query.possible_answer}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
       
</template>

<script>
    export default {
        name:'TableStudentReport',
        props: ['queryTableList'],
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