<template>
    <div>
       <form class="user" @submit="addFaq">
            <div class="form-group">
                <input class="form-control form-control-user" type="text" id="faq_title" placeholder="FAQ Title" name="faq_title" v-model="faq.faq_title" :class="[error.faq_title ? errorClass : '']">
            </div>
            <div class="form-group">
                <select class="form-control " id="faq_category">
                    <option value="" selected>Select Category</option>
                    <option value="">Allowance</option>
                    <option value="">Enrollment</option>
                    <option value="">Grades</option>
                    <option value="">Events</option>
                </select>
            </div>
           <div class="form-group">
                <input class="form-control form-control-user" type="text" id="faq_utterances" placeholder="FAQ utterances" name="faq_utterances">
           </div>
            <div class="form-group">
                <textarea class="form-control" type="text" id="faq_answer" placeholder="FAQ Answer" name="faq_answer" v-model="faq.faq_answer" :class="[error.faq_answer ? errorClass : '']" rows="5"></textarea>
            </div>
            <input type="submit" value="Add Faq " class="btn btn-primary btn-block text-white btn-user">
       </form>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name:"AddFaqForm",
        computed:mapGetters(['allFaq','userData']),
        data(){
            return{
                faq:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:""
                },
                error:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:""
                },
                errorClass: 'border-danger',
                hasNoError:true
            }
        },
        methods: {
            ...mapActions(['getAllFaqs','addNewFaq']), 
            addFaq: function(e){
                e.preventDefault();

                this.hasNoError = true;

                this.faq.faq_title == "" ? (this.error.faq_title = true, this.hasNoError = false): this.error.faq_title = false;
                this.faq.faq_answer == "" ? (this.error.faq_answer = true, this.hasNoError = false): this.error.faq_answer = false;

                if(!this.hasNoError){
                    alert('Please Input All Fields');
                }else{
                    this.faq.officer_id = this.userData._id
                    this.addNewFaq(this.faq);
                }
                
            }
        }
    }
</script>

<style>

</style>