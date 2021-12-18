<template>
    <div>
        <h3 class="text-dark mb-4">Profile</h3>
        <div>
            <div >
                <div class="row">
                    <div class="col">
                        <div class="card shadow mb-3">
                            <div class="card-header py-3">
                                <div class="row">
                                    <div class="col">
                                        <p class="text-primary m-0 font-weight-bold">Information</p>
                                    </div>
                                    <div class="col text-right">
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="editInformationClick" v-model="editInformation">
                                            <label class="form-check-label" for="editInformationClick">Edit </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <form @submit="submitEditedProfileInformation">
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="employee_id"><strong>Employee ID</strong></label>
                                                <input class="form-control" type="text" placeholder="Employee ID" name="employee_id" id="employee_id" v-model="userData.employee_id" :disabled="editInformation ? false : true" :class="[error.employee_id ? errorClass : '']">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="email"><strong>Email Address</strong></label>
                                                <input class="form-control" type="email" placeholder="Email Address" name="email" id="email" v-model="userData.email" :disabled="editInformation ? false : true" :class="[error.email ? errorClass : '']">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="first_name"><strong>First Name</strong></label>
                                                <input class="form-control" type="text" placeholder="First Name" name="first_name" id="firstname" v-model="userData.first_name" :disabled="editInformation ? false : true" :class="[error.first_name ? errorClass : '']">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="last_name"><strong>Last Name</strong></label>
                                                <input class="form-control" type="text" placeholder="Last Name" name="last_name" id="lastname" v-model="userData.last_name" :disabled="editInformation ? false : true" :class="[error.last_name ? errorClass : '']">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="position"><strong>Position</strong></label>
                                                <input class="form-control" type="text" placeholder="Position" name="position" id="position" v-model="userData.position" :disabled="editInformation ? false : true" :class="[error.position ? errorClass : '']">
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="gender"><strong>Gender</strong></label>
                                                <select class="form-control rounded-pill`" id="gender" v-model="userData.gender" :disabled="editInformation ? false : true">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mt-5"><button class="btn btn-primary btn-sm" type="submit" :disabled="editInformation ? false : true">Save Settings</button></div>
                                </form>
                            </div>
                        </div>

                        <div class="card shadow">
                            <div class="card-header py-3">
                                <div class="row">
                                    <div class="col">
                                        <p class="text-primary m-0 font-weight-bold">Contact</p>
                                    </div>
                                    <div class="col text-right">
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="editContactClick" v-model="editContact">
                                            <label class="form-check-label" for="editInformationClick">Edit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <form @submit="submitEditedProfileContact">
                                    <div class="form-group"><label for="address"><strong>Address</strong></label>
                                        <input class="form-control" type="text" placeholder="Address" name="address" id="address" v-model="userData.address" :disabled="editContact ? false : true" :class="[error.address ? errorClass : '']">
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="phone_num"><strong>Contact Number</strong></label>
                                                <input class="form-control" type="text" placeholder="Phone Number" name="Contact Number" id="phone_num" v-model="userData.phone_num" :disabled="editContact ? false : true" :class="[error.phone_num ? errorClass : '']">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit" :disabled="editContact ? false : true">Save&nbsp;Settings</button></div>
                                </form>
                            </div>
                        </div>

                        <div class="card shadow mt-3">
                            <div class="card-header py-3">
                                <div class="row">
                                    <div class="col">
                                        <p class="text-primary m-0 font-weight-bold">Change Username</p>
                                    </div>
                                    <div class="col text-right">
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="editPassUserClick" v-model="editUsername">
                                            <label class="form-check-label" for="editInformationClick">Edit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <form @submit="submitEditedUsername">
                                    <div class="form-group"><label for="username"><strong>Username</strong></label>
                                        <input class="form-control" type="text" placeholder="Username" name="username" id="username" v-model="userData.username" :disabled="editUsername ? false : true" :class="[error.username ? errorClass : '']">
                                    </div>
                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit" :disabled="editUsername ? false : true">Save&nbsp;Settings</button></div>
                                </form>
                            </div>
                        </div>

                        <div class="card shadow mt-3">
                            <div class="card-header py-3">
                                <div class="row">
                                    <div class="col">
                                        <p class="text-primary m-0 font-weight-bold">Change Password</p>
                                    </div>
                                    <div class="col text-right">
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="editUserClick" v-model="editPassword">
                                            <label class="form-check-label" for="editInformationClick">Edit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <form @submit="submitEditedProfilePassword">
                                    <div class="form-group"><label for="username"><strong>Old Password</strong></label>
                                        <input class="form-control" type="password" placeholder="password" name="password" id="oldpassword" v-model="user.oldpassword" :disabled="editPassword ? false : true" :class="[error.oldpassword ? errorClass : '']">
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="password"><strong>New Password</strong></label>
                                                <input class="form-control" type="password" placeholder="Password" name="password" id="password" v-model="user.password" :disabled="editPassword ? false : true" :class="[error.password ? errorClass : '']">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="passworduplicate"><strong>Re enter New Password</strong></label>
                                                <input class="form-control" type="password" placeholder="Password" name="passworduplicate" id="passworduplicate" v-model="user.password2" :disabled="editPassword ? false : true" :class="[error.password2 ? errorClass : '']">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit" :disabled="editPassword ? false : true">Save&nbsp;Settings</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import VueCookies from 'vue-cookies'
export default {
    name:"Profile",
    computed:mapGetters(['userData']),
    data(){
        return{
            image: require('@/assets/img/dogs/image2.jpeg'),
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
                oldpassword:"",
                employee_id: ""
            },
            error:{
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
                oldpassword:"",
                employee_id: ""
            },
            editInformation: false,
            editContact:false,
            editUsername:false,
            editPassword:false,
            errorClass: 'border-danger',
            hasNoError:true,
        }
    },
    methods: {
        ...mapActions(['getUserData','editedUserInfo','editedUserContact','editedUsername','editedPassword']), 
        getPreUserData: function(){
            this.user.first_name = this.userData.first_name;
            this.user.last_name = this.userData.last_name;
            this.user.email = this.userData.email;
            this.user.position = this.userData.position;
            this.user.gender = this.userData.gender;
            this.user.address = this.userData.address;
            this.user.user_role = this.userData.user_role;
            this.user.phone_num = this.userData.phone_num;
            this.user.username = this.userData.username;
            this.user.employee_id = this.userData.employee_id;
        },
        submitEditedProfileInformation(e){
            e.preventDefault();
            this.checkEmptyInfo();
            if(!this.hasNoError){
                alert('Please Input All Fields');
            }else{
                const data = {
                    _id:this.userData._id,
                    first_name:this.userData.first_name,
                    last_name:this.userData.last_name,
                    email:this.userData.email,
                    employee_id:this.userData.employee_id,
                    gender:this.userData.gender,
                    position:this.userData.position,
                    user_role:this.userData.user_role
                }
                this.editedUserInfo(data);
            }
        },
        submitEditedProfileContact(e){
            e.preventDefault();
            this.checkEmptyContact();

            if(!this.hasNoError){
                alert('Please Input All Fields');
            }else{
                const data = {
                    _id:this.userData._id,
                    address:this.userData.address,
                    phone_num:this.userData.phone_num,
                }
                this.editedUserContact(data);
            }
        },
        submitEditedProfilePassword(e){
            e.preventDefault();
            this.checkPassword()

            if(!this.hasNoError){
                alert('Password is empty or dont match');
            }else{
                if(this.user.password.length < 8){
                    alert('Password Length is less than 8');
                }else{
                    const data = {
                        _id:this.userData._id,
                        oldpassword:this.user.oldpassword,
                        newpassword:this.user.password
                    }
                    this.editedPassword(data);
                }
            }
        },
        submitEditedUsername(e){
            e.preventDefault();
            this.checkEmptyUsername();

            if(!this.hasNoError){
                alert('Please Input All Fields');
            }else{
                const data = {
                    _id:this.userData._id,
                    username:this.userData.username,
                }
                this.editedUsername(data);
            }

        },

        checkEmptyInfo(){
            this.hasNoError = true;
            this.userData.first_name == "" ? (this.error.first_name = true, this.hasNoError = false): this.error.first_name = false;
            this.userData.first_name == "" ? (this.error.first_name = true, this.hasNoError = false): this.error.first_name = false;
            this.userData.email == "" ? (this.error.email = true, this.hasNoError = false): this.error.email = false;
            this.userData.position == "" ? (this.error.position = true, this.hasNoError = false): this.error.position = false;
            this.userData.employee_id == "" ? (this.error.employee_id = true, this.hasNoError = false): this.error.employee_id = false;
        },
        checkEmptyContact(){
            this.hasNoError = true;
            this.userData.address == "" ? (this.error.address = true, this.hasNoError = false): this.error.address = false;
            this.userData.phone_num == "" ? (this.error.phone_num = true, this.hasNoError = false): this.error.phone_num = false;
        },
        checkEmptyUsername(){
            this.hasNoError = true;
            this.userData.username == "" ? (this.error.username = true, this.hasNoError = false): this.error.username = false;
        },
        checkPassword(){
            this.hasNoError = true;
            if(this.user.oldpassword == ""){
                this.error.oldpassword = true;
                this.hasNoError = false;
            }else{
                this.error.oldpassword = false;
            }

            if((this.user.password != this.user.password2) || this.user.password == ""){
                this.error.password = true;
                this.error.password2 = true
                this.hasNoError = false
            }else{
                this.error.password = false;
                this.error.password2 = false
            }
        }
        
    },
    created () {    
        this.getUserData(VueCookies.get('Token'));
        this.getPreUserData();
        console.log(this.userData);
    }

}
</script>
<style>

</style>