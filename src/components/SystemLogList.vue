<template>
    <div class="card shadow">
         <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">System Log List</p>
        </div>
        <div class="card-body">
            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                <table class="table dataTable my-0" id="dataTable">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="log in allSystemLog" :key="log._id">
                            <td>{{log.user.employee_id}}</td>
                            <td>{{log.user.first_name}} {{log.user.last_name}}</td>
                            <td>{{moment(log.date).format("MMM D, YYYY")}}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import VueCookies from 'vue-cookies'
    export default {
        name:"SystemLogList",
        computed:mapGetters(['allSystemLog']),
        methods: {
            ...mapActions(['getSystemLog']), 
        },
        created(){
            this.getSystemLog()
        }
    }
</script>

<style>

</style>