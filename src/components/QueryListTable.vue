<template>
    <div>
        <h1>Student Concern Table</h1>
        <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-striped table-bordered table-hover">
                <thead class="thead-dark">
                    <h1></h1>
                    <tr>
                        <th>Student Name</th>
                        <th>Phone Number</th>
                        <th>Query</th>
                        <th>Concern</th>
                         <th>Possible Answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="query in categoryQueries" :key="query._id">
                        <td>{{query.sende_id}}</td>
                        <td>{{query.phone_num}}</td>
                        <td>{{query.category_id}}</td>
                        <td>{{query.query_name}}</td>
                        <td>{{query.possible_answer}}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
       
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name:'QueryListTable',
        computed:mapGetters(['categoryQueries']),
        props: ['queryTableList'],
        mounted(){
            console.log(this.categoryQueries);
            
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