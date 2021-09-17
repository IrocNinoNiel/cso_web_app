<template>
    <div>
        <form class="user" @submit="registerStudent">
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input class="form-control form-control-user" type="text" id="student_id" placeholder="Student ID" name="studentid" v-model="student.student_id" :class="[error.student_id ? errorClass : '']">
                </div>
                <div class="col-sm-6">
                    <input class="form-control form-control-user" type="email" id="email" aria-describedby="emailHelp" placeholder="Email" name="email" v-model="student.email" :class="[error.email ? errorClass : '']">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input class="form-control form-control-user" type="text" id="firstname" placeholder="FirstName" name="first_name" v-model="student.first_name" :class="[error.first_name ? errorClass : '']">
                </div>
                <div class="col-sm-6">
                    <input class="form-control form-control-user" type="text" id="lastname" placeholder="Last Name" name="last_name" v-model="student.last_name" :class="[error.last_name ? errorClass : '']">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <select class="form-control rounded-pill" id="gender" v-model="student.gender" :class="[error.gender ? errorClass : '']">
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <input class="form-control form-control-user" type="text" id="phonenumber" placeholder="Phone Number" name="phonenumber" v-model="student.phone_number" :class="[error.phone_number ? errorClass : '']">
                </div>
            </div>
            <div class="form-group">
                <input class="form-control form-control-user" type="text" id="address" placeholder="Address" name="address" v-model="student.address" :class="[error.address ? errorClass : '']">
            </div>
            <div class="form-group">
                <select class="form-control rounded-pill" id="school" v-model="student.school" :class="[error.school ? errorClass : '']">
                        <option value="">School</option>
                        <option value="ustp">University of Science and Technology of Southern Philippines</option>
                        <option value="coc">PHINMA - Cagayan de Oro College</option>
                        <option value="xu">Xavier University - Ateneo de Cagayan</option>
                        <option value="cu">Capitol University</option>
                        
                </select>
            </div>
            <input type="submit" value="Register Student " class="btn btn-primary btn-block text-white btn-user">
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name:"RegisterStudentForm",
    data(){
            return{
                student:{
                    student_id:"", 
                    sender_number:123, 
                    first_name:"", 
                    last_name:"", 
                    phone_number:"", 
                    gender:"", 
                    address:"", 
                    school:"",
                    email:""
                },
                 error:{
                    student_id:false, 
                    sender_number:false, 
                    first_name:false, 
                    last_name:false, 
                    phone_number:false, 
                    gender:false, 
                    address:false, 
                    school:false,
                    email:false
                },
                errorClass: 'border-danger',
                hasNoError:true
            }
        },
        methods: {
            ...mapActions(['registerNewStudent']), 
            registerStudent: function(e){
                e.preventDefault();
                
                this.hasNoError = true;

                this.student.first_name == "" ? (this.error.first_name = true, this.hasNoError = false): this.error.first_name = false;
                this.student.last_name == "" ? (this.error.last_name = true, this.hasNoError = false): this.error.last_name = false;
                this.student.email == "" ? (this.error.email = true, this.hasNoError = false): this.error.email = false;
                this.student.gender == "" ? (this.error.gender = true, this.hasNoError = false): this.error.gender = false;
                this.student.student_id == "" ? (this.error.student_id = true, this.hasNoError = false): this.error.student_id = false;
                this.student.phone_number == "" ? (this.error.phone_number = true, this.hasNoError = false): this.error.phone_number = false;
                this.student.address == "" ? (this.error.address = true, this.hasNoError = false): this.error.address = false;
                this.student.school == "" ? (this.error.school = true, this.hasNoError = false): this.error.school = false;


                 if(!this.hasNoError){
                    alert('Please Input All Fields');
                }else{
                   this.registerNewStudent(this.student);
                }
            }
        }
}
</script>

<style scoped>

</style>

