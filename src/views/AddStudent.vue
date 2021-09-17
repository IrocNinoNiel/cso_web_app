<template>
    <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
                <div class="p-5">
                    <RegisterStudentHeader/>
                    <RegisterStudentForm/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import RegisterStudentForm from '../components/RegisterStudentForm.vue';
import RegisterStudentHeader from '../components/RegisterStudentHeader.vue'

export default {
    name:"AddStudent",
    components:{
        RegisterStudentForm,
        RegisterStudentHeader
    }

}
</script>

<style scoped>

</style>

