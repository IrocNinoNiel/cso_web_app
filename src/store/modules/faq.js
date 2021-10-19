import axios from "axios";
import router from '@/router'
import Vue from 'vue';
import VueCookies from 'vue-cookies'


const state = {
    faqs:[],
    faq:{},
};

const getters = {
    allFaq : (state)=>state.faqs,
    oneFaq : (state)=>state.faq,
};

const actions = {
    async getAllFaqs({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/FAQ/show", {headers:{Authorization: token}});
        // console.log(response.data);
        commit('getAllFAQMutate',response.data.FAQ_list)
    },
    async addNewFaq({commit}, data){
        const token = VueCookies.get('Token');
        axios.post('/api/FAQ/add', {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response.data);
                commit('addNewFaqMutate',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async deleteFaq({commit},id){
        const token = VueCookies.get('Token');
        axios.delete(`/api/FAQ/delete/${id}`,{headers:{authorization: token}})
            .then((response)=> {
                commit('deleteFaqMutate',id);
            })
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async getOneFaq({commit}){
        const token = VueCookies.get('Token');
        const id = router.currentRoute.params.id
        axios.get(`/api/FAQ/show/${id}`,{headers:{authorization: token}})
            .then((response)=> {
                commit('getOneFaqMutate',response.data.FAQ);
            })
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async editOneFaq({commit,dispatch},commitData){

        const token = VueCookies.get('Token');
        const data = commitData.faq;
        const id = commitData.id;

        axios.put(`/api/FAQ/edit/${id}`,{data},{headers:{authorization: token}})
            .then((response)=> {
                commit('editOneFaqMutate',response.data);
                dispatch('getAllFaqs')
            })
            .catch((errors) => {    
                console.log(errors);
                alert(errors)
            }) 
    }
};

const mutations = {
    getAllFAQMutate:(state,data)=>{
        state.faqs = data
        console.log(state.faqs);
    },
    addNewFaqMutate:(state,data)=>{
        alert('FAQ added Succesfully')
        router.push('/faq');
    },
    deleteFaqMutate:(state,id)=>{
        alert('FAQ Deleted Succesfully')
        state.faqs = state.faqs.filter(e=>e._id !== id);
    },
    getOneFaqMutate:(state,data)=>{
        state.faq = data;
    },
    editOneFaqMutate:(state,data)=>{
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