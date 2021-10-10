<template>
    <div>
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 class="text-dark mb-0">Category</h3>
        </div>
        <div class="mb-3">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addCategoryModal">Add Category</button>
        </div>
        <CategoryList/>
        <AddCategoryModal/>
       
    </div>
</template>

<script>
    import AddCategoryModal from '../components/AddCategoryModal.vue';
    import CategoryList from '../components/CategoryList.vue';
    export default {
        name:"category",
        components: {
            AddCategoryModal,
            CategoryList
        }
    }
</script>

<style>

</style>