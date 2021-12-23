<template>
    <div>
    
        <div class="container">
            <div class="card shadow-lg o-hidden border-0 my-5">
                <div class="card-body p-0">
                    <div>
                        <!-- <div class="col-lg-5 d-none d-lg-flex">
                            <div class="flex-grow-1 bg-register-image"  :style="{ backgroundImage: 'url(' + require('@/assets/img/cso.jpg') + ')' }"></div>
                        </div> -->
                        <div>
                            <div class="p-5">
                                <div class="text-center">
                                    <h4 class="text-dark mb-4">Register</h4>
                                </div>
                                <form class="user" @submit="registerUser">
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input class="form-control form-control-user" type="text" id="firstname" placeholder="FirstName" name="first_name" v-model="user.first_name" :class="[error.first_name ? errorClass : '']">
                                        </div>
                                        <div class="col-sm-6">
                                            <input class="form-control form-control-user" type="text" id="lastname" placeholder="Last Name" name="last_name" v-model="user.last_name" :class="[error.last_name ? errorClass : '']">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control form-control-user" type="email" id="email" aria-describedby="emailHelp" placeholder="Email" name="email" v-model="user.email" :class="[error.email ? errorClass : '']">
                                    </div>

                                     <div class="form-group">
                                         <input class="form-control form-control-user" type="text" id="address" placeholder="Address" name="address" v-model="user.address" :class="[error.address ? errorClass : '']">
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <select class="form-control rounded-pill" id="gender" v-model="user.gender" :class="[error.gender ? errorClass : '']">
                                                <option value="">Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-6">
                                            <input class="form-control form-control-user" type="text" id="position" placeholder="Position" name="position" v-model="user.position" :class="[error.position ? errorClass : '']">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control form-control-user" type="text" id="empid" aria-describedby="ID" placeholder="Employee ID Number" name="emp_ID" v-model="user.employee_id" :class="[error.empId ? errorClass : '']">
                                    </div>

                                     <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input class="form-control form-control-user" type="text" id="username" placeholder="Username" name="user_name" v-model="user.username" :class="[error.username ? errorClass : '']">
                                        </div>
                                        <div class="col-sm-6">
                                            <input class="form-control form-control-user" type="text" id="phonenumber" placeholder="Phone Number" name="phone_number" v-model="user.phone_num" :class="[error.contact ? errorClass : '']">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input class="form-control form-control-user" type="password" id="password" placeholder="Password" name="password" v-model="user.password" :class="[error.password ? errorClass : '']">
                                        </div>
                                        <div class="col-sm-6">
                                            <input class="form-control form-control-user" type="password" id="passwordrepeat" placeholder="Repeat Password" name="password_repeat" v-model="user.password2" :class="[error.password2 ? errorClass : '']">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <select class="form-control rounded-pill" id="usertype" v-model="user.user_role" :class="[error.userType ? errorClass : '']">
                                                <option value="">User Type</option>
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="submit" value="Register Account " class="btn btn-primary btn-block text-white btn-user">
                                </form>
                                <!-- <div class="text-center"><router-link to="login" class="small">Forgot Password?</router-link></div>
                                <div class="text-center"><router-link to="login" class="small">Already have an account? Login!</router-link></div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import VueCookies from 'vue-cookies'
    export default {
        name:"Register",
        computed:mapGetters(['errorMessage','checkRegisterError']),
        data(){
            return{
                user:{
                    first_name: "",
                    last_name: "",
                    email: "",
                    position: "",
                    gender: "",
                    user_role: "",
                    address: "",
                    phone_num: "",
                    username: "",
                    password: "",
                    password2: "",
                    employee_id: ""
                },  
                error:{
                    first_name:false,
                    last_name:false,
                    email:false,
                    position:false,
                    gender:false,
                    userType:false,
                    address:false,
                    contact:false,
                    username:false,
                    password:false,
                    password2:false,
                    empId:false
                },
                errorClass: 'border-danger',
                hasNoError:true,
                passwordMatch:true,
                passwordLength:true,
                errorMsg: ""
            }
        },
        methods: {
            ...mapActions(['registerNewUser']), 
            registerUser: function(e){
                e.preventDefault();

                this.hasNoError = true;
                this.passwordMatch = true;
                this.passwordLength = true;

                this.user.first_name == "" ? (this.error.first_name = true, this.hasNoError = false): this.error.first_name = false;
                this.user.last_name == "" ? (this.error.last_name = true, this.hasNoError = false): this.error.last_name = false;
                this.user.email == "" ? (this.error.email = true, this.hasNoError = false): this.error.email = false;
                this.user.position == "" ? (this.error.position = true, this.hasNoError = false): this.error.position = false;
                this.user.gender == "" ? (this.error.gender = true, this.hasNoError = false): this.error.gender = false;
                this.user.user_role == "" ? (this.error.userType = true, this.hasNoError = false): this.error.userType = false;
                this.user.address == "" ? (this.error.address = true, this.hasNoError = false): this.error.address = false;
                this.user.phone_num == "" ? (this.error.contact = true, this.hasNoError = false): this.error.contact = false;
                this.user.username == "" ? (this.error.username = true, this.hasNoError = false): this.error.username = false;
                this.user.password == "" ? (this.error.password = true, this.hasNoError = false): this.error.password = false;
                this.user.password2 == "" ? (this.error.password2 = true, this.hasNoError = false): this.error.password2 = false;
                this.user.employee_id == "" ? (this.error.empId = true, this.hasNoError = false): this.error.empId = false;

                
                if(!this.validateActInsert(this.user.first_name)){
                    this.error.first_name = true;
                    this.hasNoError = false;
                }

                if(!this.validateActInsert(this.user.last_name)){
                    this.error.last_name = true;
                    this.hasNoError = false;
                }

                if(this.user.phone_num.length !== 11){
                    this.error.contact = true;
                    this.hasNoError = false;
                }

                if(!this.validateActInsertNumber(this.user.phone_num)){
                    this.error.contact = true;
                    this.hasNoError = false;
                }
                
               
                if(this.user.password != this.user.password2){
                    this.error.password = true;
                    this.error.password2 = true;
                    this.passwordMatch = false
                }

                if(this.user.password.length < 8 || this.user.password2.length < 8){
                    this.error.password = true;
                    this.error.password2 = true;
                    this.passwordLength = false
                }

                if(!this.hasNoError){
                    alert('Invalid Credentials');
                }else if(!this.passwordMatch){
                    alert('Password Dont Match');
                }else if(!this.passwordLength){
                    alert('Password Length must be more than 8 digit')
                }else{
                    this.registerNewUser(this.user);

                }

            },
            validateActInsert(input) {
                var specialChars = /[^a-zA-Z ]/g;
                if (input.match(specialChars)) {
                    return false;
                }
                return (true);
            },

            validateActInsertNumber(number) {
                var specialChars = /[^0-9]/g;
                if (number.match(specialChars)) {
                    return false;
                }
                return (true);
            }
        }
    }
</script>

<style>
.register-div{
    height: 100vh;
}
</style>