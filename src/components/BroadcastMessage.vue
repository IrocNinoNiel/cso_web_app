<template>
    <div>
       <div class="broadcastinput">
           <form action="#" class="bg-light" @submit="submitBroadCastMessage">
                <div class="input-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  v-model="broadcastMessage"></textarea>
                    <div class="input-group-append">
                        <button id="button-addon2" type="submit" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                    </div>
                </div>
            </form>
       </div>
       <div v-if='loadingSMS' class="mb-2 mt-3">
            <vueSpinner/>
        </div>
       <p class="mt-3">
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Filters
            </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <div class="row mt-3">
                    <div class="col">
                        <ul class="">
                            <li class="list-group-item"><input type="checkbox" v-model="allSchoolCheck" value="all" >All Schools</li>
                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="COC" :disabled="allSchoolCheck">Cagayan De Oro College</li>
                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="USTP" :disabled="allSchoolCheck">University Of Science and Technology of Southern Philippines</li>
                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="XU" :disabled="allSchoolCheck">Xavier University</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import Spinner from 'vue-simple-spinner';
    export default {
        name:"BroadcastMessage",
        computed:mapGetters(['loadingSMS']),
        components: {
            vueSpinner: Spinner
        },
        data() {
            return {
                allSchool:[],
                allCourse:[],
                allSchoolCheck:true,
                allCourseCheck:true,
                broadcastMessage:''
            }
            
        },
        methods:{
            ...mapActions(['sendBroadcastMessage']),
            submitBroadCastMessage(e){
                e.preventDefault();
                console.log('here');
    
                console.log(this.allSchool.length);
                console.log(this.allCourse.length);
                if((!this.allSchoolCheck && this.allSchool.length == 0 )|| (!this.allCourseCheck && this.allCourse.length == 0)){
                    alert('Please Add Filter')
                }else{
                    const schoolFilter = this.allSchoolCheck ? [] : this.allSchool;
                    const courseFilter = this.allCourseCheck ? [] : this.allCourse;

                    if(this.broadcastMessage.length < 1){
                        alert('Empty Broadcast Message');
                    }else{
                        const data = {
                            message: this.broadcastMessage,
                            school:schoolFilter,
                            course:courseFilter,
                        }
                        this.sendBroadcastMessage(data);
                        this.broadcastMessage = '';
                    }
                }

                
            }
        }
        
    }
</script>

<style>

</style>