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
                                <form @submit="submitEditedProfile">
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="employee_id"><strong>Employee ID</strong></label>
                                                <input class="form-control" type="text" placeholder="Employee ID" name="employee_id" id="employee_id" v-model="userData.employee_id" :disabled="editInformation ? false : true">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="email"><strong>Email Address</strong></label>
                                                <input class="form-control" type="email" placeholder="Email Address" name="email" id="email" v-model="userData.email" :disabled="editInformation ? false : true">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="first_name"><strong>First Name</strong></label>
                                                <input class="form-control" type="text" placeholder="John" name="first_name" id="firstname" v-model="userData.first_name" :disabled="editInformation ? false : true">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="last_name"><strong>Last Name</strong></label>
                                                <input class="form-control" type="text" placeholder="Dela Cruz" name="last_name" id="lastname" v-model="userData.last_name" :disabled="editInformation ? false : true">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="position"><strong>Position</strong></label>
                                                <input class="form-control" type="text" placeholder="Position" name="position" id="position" v-model="userData.position" :disabled="editInformation ? false : true">
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
                                    <div class="form-row">
                                        <div class="col-sm-6 mb-3 mb-sm-0 form-group">
                                            <label for="gender"><strong>User Type</strong></label>
                                            <select class="form-control rounded-pill`" id="user_role" v-model="userData.user_role" :disabled="editInformation ? false : true">
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
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
                                <form @submit="submitEditedProfile">
                                    <div class="form-group"><label for="address"><strong>Address</strong></label>
                                        <input class="form-control" type="text" placeholder="Address" name="address" id="address" v-model="userData.address" :disabled="editContact ? false : true">
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="phone_num"><strong>Contact Number</strong></label>
                                                <input class="form-control" type="text" placeholder="Phone Number" name="Contact Number" id="phone_num" v-model="userData.phone_num" :disabled="editContact ? false : true">
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
                                        <p class="text-primary m-0 font-weight-bold">Change Username or Password</p>
                                    </div>
                                    <div class="col text-right">
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="editPassUserClick" v-model="editUsernamePassword">
                                            <label class="form-check-label" for="editInformationClick">Edit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <form @submit="submitEditedProfile">
                                    <div class="form-group"><label for="username"><strong>Username</strong></label>
                                        <input class="form-control" type="text" placeholder="Username" name="username" id="username" v-model="userData.username" :disabled="editUsernamePassword ? false : true">
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="password"><strong>Password</strong></label>
                                                <input class="form-control" type="password" placeholder="Password" name="password" id="password" v-model="user.password" :disabled="editUsernamePassword ? false : true">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="passworduplicate"><strong>Re enter Password</strong></label>
                                                <input class="form-control" type="password" placeholder="Password" name="passworduplicate" id="passworduplicate" v-model="user.password2" :disabled="editUsernamePassword ? false : true">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit" :disabled="editUsernamePassword ? false : true">Save&nbsp;Settings</button></div>
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
                employee_id: ""
            },
            editInformation: false,
            editContact:false,
            editUsernamePassword:false,
        }
    },
    methods: {
        ...mapActions(['getUserData']), 
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
        submitEditedProfile(e){
            e.preventDefault();
            console.log(this.userData);
        },
        // openStorage () {
        //     return JSON.parse(localStorage.getItem('user'))
        // },
        // saveStorage (form) {
        //     localStorage.setItem('user', JSON.stringify(form))
        // },
        
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