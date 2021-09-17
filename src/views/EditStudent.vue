<template>
    <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
                <div class="p-5">
                    <EditStudentHeader/>
                    <EditStudentForm/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import EditStudentForm from '../components/EditStudentForm.vue';
import EditStudentHeader from '../components/EditStudentHeader.vue'

export default {
    name:"AddStudent",
    components:{
        EditStudentForm,
        EditStudentHeader
    }

}
</script>

<style scoped>

</style>

