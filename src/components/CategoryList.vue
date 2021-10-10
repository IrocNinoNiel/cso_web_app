<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-xl-3 mb-4" v-for="category in allCategories" :key="category._id">
                <div class="card shadow border-left-primary py-2">
                    <div class="card-body">
                        <div class="row align-items-center no-gutters">
                            <div class="col mr-2">
                                <div class="mb-2">
                                    <a class="btn" data-toggle="collapse" :href="'#'+category._id" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>{{category.category_name}}</span></div>
                                    </a>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span></span></div>
                                </div>
                                <div class="collapse" :id=category._id>
                                    <div class="row ml-1 mt-2">
                                        <div class="mr-1">
                                            <button class="btn btn-danger" @click="deleteOneCategory(category._id)"><i class="far fa-times-circle"></i></button>
                                        </div>
                                        <div class="ml-1">
                                            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editCategoryModal" @click="populateModalEdit(category)">
                                                <i class="fas fa-user-edit"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Category Modal -->
        <div class="modal fade" id="editCategoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit FAQ</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="user" @submit="editCategory">
                        <div class="form-group">
                            <input class="form-control form-control-user" type="text" id="category_name" placeholder="Category Title" name="category_name" v-model="category.category_name" :class="[error.category_name ? errorClass : '']">
                        </div>
                        <input type="submit" value="Edit Category " class="btn btn-primary btn-block text-white btn-user">
                    </form>
                </div>

                </div>
            </div>
        </div>

    </div>
    

    
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
   
    export default {
        name:"CategoryList",
         computed:mapGetters(['allCategories','oneCategory']),
        data(){
            return {
                category:{
                    category_name:""
                },
                error:{
                    category_name:"",
                },
                errorClass: 'border-danger',
                hasNoError:true,
                categoryEditID:null
            }
        },
        methods: {
            ...mapActions(['getAllCategory','addNewCategory','deleteCategory','editOneCategory']), 
            deleteOneCategory(id){
                console.log(id);
                if(confirm('Are you sure?')){
                    this.deleteCategory(id);
                }
            },
            editCategory(e){
                e.preventDefault();

                this.hasNoError = true;
                this.category.category_name == "" ? (this.error.category_name = true, this.hasNoError = false): this.error.category_name = false;

                if(!this.hasNoError){
                    alert('Please Input All Fields');
                }else{
                    const data = {
                        category:this.category,
                        id:this.categoryEditID
                    };
                    this.editOneCategory(data);
                }
            },
             populateModalEdit(category){
                this.category.category_name = category.category_name;
                this.categoryEditID = category._id;
            }
        
        },
        mounted(){
            this.getAllCategory();
        }
    }
</script>

<style>

</style>