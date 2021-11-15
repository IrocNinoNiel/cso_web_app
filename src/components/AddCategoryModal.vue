<template>
    <div>
        <!-- Add Category Modal -->
        <div class="modal fade" id="addCategoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="user" @submit="addCategory">
                        <div class="form-group">
                            <input class="form-control form-control-user" type="text" id="category_name" placeholder="Category Title" name="category_name" v-model="category.category_name" :class="[error.category_name ? errorClass : '']">
                        </div>
                        <input type="submit" value="Add New Category " class="btn btn-primary btn-block text-white btn-user">
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
        name:"AddCategoryModal",
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
            }
        },
        methods: {
            ...mapActions(['getAllCategory','addNewCategory']), 
            addCategory(e){
                e.preventDefault();

                this.hasNoError = true;
                this.category.category_name == "" ? (this.error.category_name = true, this.hasNoError = false): this.error.category_name = false;

                if(!this.hasNoError){
                    alert('Please Input All Fields');
                }else{
                    this.addNewCategory(this.category);
                }
            }
        }
    }
</script>

<style>

</style>