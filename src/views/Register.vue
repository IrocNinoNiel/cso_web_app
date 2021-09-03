<template>
    <div class="bg-gradient-primary register-div border" :style="{ backgroundImage: 'url(' + require('@/assets/img/background.png') + ')' }">
    
        <div class="container">
            <div class="card shadow-lg o-hidden border-0 my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-flex">
                            <div class="flex-grow-1 bg-register-image"  :style="{ backgroundImage: 'url(' + require('@/assets/img/cso.jpg') + ')' }"></div>
                        </div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h4 class="text-dark mb-4">Register</h4>
                                </div>
                                <form class="user">
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Username" name="user_name"></div>
                                        <div class="col-sm-6"><input class="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Phone Number" name="phone_number"></div>
                                    </div>
                                    <div class="form-group"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email"></div>
                                    <div class="form-group"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="ID" placeholder="Employee ID Number" name="emp_ID"></div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password"></div>
                                        <div class="col-sm-6"><input class="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat"></div>
                                    </div><router-link to="dashboard" class="btn btn-primary btn-block text-white btn-user" type="submit">Register Account</router-link>
                                    <hr>
                                    <hr>
                                </form>
                                <div class="text-center"><router-link to="login" class="small">Forgot Password?</router-link></div>
                                <div class="text-center"><router-link to="login" class="small">Already have an account? Login!</router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Register"  
    }
</script>

<style>
.register-div{
    height: 100vh;
}
</style>