<template>
    <div>
        <h3 class="text-dark mb-4">Profile</h3>
        <div>
            <!-- <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-body text-center shadow">
                        <img class="rounded-circle mb-3 mt-4" :src="image" width="160" height="160">
                        <div class="mb-3"><button class="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                    </div>
                </div>
                <div class="card shadow mb-4"></div>
            </div> -->
            <div >
                <!-- <div class="row mb-3 d-none">
                    <div class="col">
                        <div class="card text-white bg-primary shadow">
                            <div class="card-body">
                                <div class="row mb-2">
                                    <div class="col">
                                        <p class="m-0">Peformance</p>
                                        <p class="m-0"><strong>65.2%</strong></p>
                                    </div>
                                    <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                </div>
                                <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-white bg-success shadow">
                            <div class="card-body">
                                <div class="row mb-2">
                                    <div class="col">
                                        <p class="m-0">Peformance</p>
                                        <p class="m-0"><strong>65.2%</strong></p>
                                    </div>
                                    <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                </div>
                                <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="row">
                    <div class="col">
                        <div class="card shadow mb-3">
                            <div class="card-header py-3">
                                <p class="text-primary m-0 font-weight-bold">Information</p>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="empid"><strong>Employee ID</strong></label>
                                                <input class="form-control" type="text" placeholder="Employee ID" name="empid" id="empid" v-model="user.empId">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="email"><strong>Email Address</strong></label>
                                                <input class="form-control" type="email" placeholder="Email Address" name="email" id="email" v-model="user.email">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="first_name"><strong>First Name</strong></label>
                                                <input class="form-control" type="text" placeholder="John" name="first_name" id="firstname" v-model="user.first_name">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="last_name"><strong>Last Name</strong></label>
                                                <input class="form-control" type="text" placeholder="Dela Cruz" name="last_name" id="lastname" v-model="user.last_name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="position"><strong>Position</strong></label>
                                                <input class="form-control" type="text" placeholder="Position" name="position" id="position" v-model="user.position">
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="gender"><strong>Gender</strong></label>
                                                <select class="form-control rounded-pill`" id="gender" v-model="user.gender">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-sm-6 mb-3 mb-sm-0 form-group">
                                            <label for="gender"><strong>User Type</strong></label>
                                            <select class="form-control rounded-pill`" id="usertype" v-model="user.userType">
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group mt-5"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                                </form>
                            </div>
                        </div>
                        <div class="card shadow">
                            <div class="card-header py-3">
                                <p class="text-primary m-0 font-weight-bold">Contact</p>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group"><label for="address"><strong>Address</strong></label>
                                        <input class="form-control" type="text" placeholder="Address" name="address" id="address" v-model="user.address">
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="Contact Number"><strong>Contact Number</strong></label>
                                                <input class="form-control" type="text" placeholder="Phone Number" name="Contact Number" id="contactnumber" v-model="user.contact">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
                                </form>
                            </div>
                        </div>

                        <div class="card shadow mt-3">
                            <div class="card-header py-3">
                                <p class="text-primary m-0 font-weight-bold">Change Username or Password</p>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group"><label for="username"><strong>Username</strong></label>
                                        <input class="form-control" type="text" placeholder="Username" name="username" id="username" v-model="user.username">
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="password"><strong>Password</strong></label>
                                                <input class="form-control" type="password" placeholder="Password" name="password" id="password" v-model="user.password">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="passworduplicate"><strong>Re enter Password</strong></label>
                                                <input class="form-control" type="password" placeholder="Password" name="passworduplicate" id="passworduplicate" v-model="user.password2">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
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
                userType: "",
                address: "",
                contact: "",
                username: "",
                password: "",
                password2: "",
                empId: "wqewqeqw"
            }
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
            this.user.userType = this.userData.user_role;
            this.user.contact = this.userData.phone_num;
            this.user.username = this.userData.username;
        },
    },
    mounted () {
        this.getUserData(VueCookies.get('Token'));
        this.getPreUserData();
    }

}
</script>
<style>

</style>