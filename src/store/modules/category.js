import axios from "axios";
import router from '@/router'
import Vue from 'vue';
import VueCookies from 'vue-cookies'


const state = {
    categories:[],
    category:{}
};

const getters = {
    allCategories : (state)=>state.categories,
    oneCategory : (state)=>state.category
};

const actions = {
    async getAllCategory({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/category/show", {headers:{Authorization: token}});
        // console.log(response.data);
        commit('getAllCategoryMutate',response.data.category)
    },
    async addNewCategory({commit}, data){
        const token = VueCookies.get('Token');
        axios.post('/api/category/add', {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response.data);
                commit('addNewCategoryMutate',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async deleteCategory({commit},id){
        const token = VueCookies.get('Token');
        axios.delete(`/api/category/delete/${id}`,{headers:{authorization: token}})
            .then((response)=> {
                commit('deleteCategoryMutate',id);
            })
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async editOneCategory({commit,dispatch},commitData){

        const token = VueCookies.get('Token');
        const data = commitData.category;
        const id = commitData.id;

        axios.put(`/api/category/edit/${id}`,{data},{headers:{authorization: token}})
            .then((response)=> {
                commit('editOneCategoryMutate',response.data);
                dispatch('getAllCategory')
            })
            .catch((errors) => {    
                console.log(errors);
                alert(errors)
            }) 
    }
};

const mutations = {
    getAllCategoryMutate:(state,data)=>{
        state.categories = data
    },
    addNewCategoryMutate:(state,data)=>{
        alert('Category added Succesfully')
        router.go(router.currentRoute);
    },
    deleteCategoryMutate:(state,id)=>{
        alert('Category Deleted Succesfully')
        state.categories = state.categories.filter(e=>e._id !== id);
    },
    editOneCategoryMutate:(state,data)=>{
        alert('Edited Succesfully')
        router.go(router.currentRoute);
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}