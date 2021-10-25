<template>
    <div>
        <div class="mb-3">
            <router-link to="register" class="btn btn-primary">Add User</router-link>
        </div>
         <div class="card shadow">
                    <div class="card-header py-3">
                        <p class="text-primary m-0 font-weight-bold">Officer Info</p>
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
                                        <th>Address</th>
                                        <th>Mobile Number</th>
                                        <th>User Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in allUsers" :key="user._id">
                                        <td>{{user.first_name}} {{user.last_name}}</td>
                                        <td>{{user.address}}</td>
                                        <td>{{user.phone_num}}</td>
                                        <td>{{user.user_role}}</td>
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
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
export default {
    name:'ManageUser',
    computed:mapGetters(['allUsers']),
    methods: {
         ...mapActions(['fetchUsers']), 
    },
     mounted() {
        this.fetchUsers();
    }
}
</script>

<style>

</style>