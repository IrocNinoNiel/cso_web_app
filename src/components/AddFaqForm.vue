<template>
    <div>
       <form class="user" @submit="addFaq">
            <div class="form-group">
                <input class="form-control form-control-user" type="text" id="faq_title" placeholder="FAQ Title" name="faq_title" v-model="faq.faq_title" :class="[error.faq_title ? errorClass : '']">
            </div>
            <div class="form-group">
                <select class="form-control " id="faq_category" v-model="faq.category_id" :class="[error.category_id ? errorClass : '']">
                    <option :value="category._id" v-for="category in allCategories" :key="category._id">{{category.category_name}}</option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-outline-primary" type="button" @click="addUtterances">Add Utterances</button>
                <p class="text-danger" v-if="noUtternaces">Please Add Utterances</p>
                <p class="text-danger" v-if="hasEmptyUtternaces">Empty Utterances</p>
           </div>
           <div class="form-group">
               <div v-for="(utterances, index) in faq.faq_utterances" :key="index">
                   <div class="row m-2">
                       <div class="col col-8">
                           <input v-model="utterances.value" class="form-control form-control-user" type="text">
                       </div>
                       <div class="col">
                           <button @click="deleteUtterances(index)" class="btn btn-outline-danger" type="button"><i class="far fa-times-circle"></i></button>
                       </div>
                   </div>
            </div>
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
        computed:mapGetters(['allFaq','userData','allCategories']),
        data(){
            return{
                faq:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:"",
                    category_id:"",
                    faq_utterances:[]
                },
                error:{
                    faq_title:"",
                    faq_answer:"",
                    officer_id:"",
                    category_id:"",
                    faq_utterances:[]
                },
                errorClass: 'border-danger',
                hasNoError:true,
                noUtternaces:false,
                hasEmptyUtternaces:false
            }
        },
        methods: {
            ...mapActions(['getAllFaqs','addNewFaq','getAllCategory']), 
            addFaq: function(e){
                e.preventDefault();

                this.hasNoError = true;
                this.hasEmptyUtternaces = false;

                this.faq.faq_title == "" ? (this.error.faq_title = true, this.hasNoError = false): this.error.faq_title = false;
                this.faq.faq_answer == "" ? (this.error.faq_answer = true, this.hasNoError = false): this.error.faq_answer = false;
                this.faq.category_id == "" ? (this.error.category_id = true, this.hasNoError = false): this.error.category_id = false;

                this.faq.faq_utterances.length < 1 ? (this.noUtternaces = true, this.hasNoError = false): this.noUtternaces = false;

                this.faq.faq_utterances.forEach(element => {
                    if(element.value == ""){
                        this.hasEmptyUtternaces = true;
                        this.hasNoError = false
                    }
                });




                
                if(!this.hasNoError){
                    alert('Please Input All Fields');
                }else{
                    this.faq.officer_id = this.userData._id
                    this.addNewFaq(this.faq);
                }
                
            },
            addUtterances: function(){
                this.faq.faq_utterances.push({ value: '' });
            },
            deleteUtterances: function(index){
                this.faq.faq_utterances.splice(index,1);
            }
        },
        mounted(){
            this.getAllCategory();
        }
    }
</script>

<style>

</style>