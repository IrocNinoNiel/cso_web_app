<template>
    <div>
        <!-- <div class="mb-3">
            <router-link to="AddStudent" class="btn btn-primary">Add Student</router-link>
        </div> -->
        <div class="card shadow">
            <StudentListTable/>
        </div>
    </div>
</template>

<script>

import StudentListTable from '../components/StudentListTable.vue'
export default {
    name:'Table',
    components:{
        StudentListTable
    }
}
</script>

<style>

</style>