import axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
    queries:[],
    query:{},
    queriesBasedCategory:[],
    notPending:false,
    unidentifiedQuery:[],
    otherpossiblecategory:[]
};

const getters = {
    allQueries : (state)=>state.queries,
    oneQuery : (state)=>state.query,
    categoryQueries :(state)=>state.queriesBasedCategory,
    pending: (state)=>state.notPending,
    unidentifiedQuery:(state)=>state.unidentifiedQuery,
    otherpossiblecategory:(state)=>state.otherpossiblecategory
};

const actions = {
    async getAllQueries({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/query/show", {headers:{Authorization: token}});
        commit('getAllQueryMutate',response.data.query_list)
    },
    async getQueriesBaseOnCategory({commit},id){
        const token = VueCookies.get('Token');
        const response = await axios.get(`/api/query/showbycategory/${id}`, {headers:{Authorization: token}});
        commit('getQueriesBaseOnCategoryMutate',response.data.query_list)
    },
    async getUnidentifiedQuery({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get(`/api/query/unidentifiedquery`, {headers:{Authorization: token}});
        console.log(response.data)
        commit('getUnidentifiedQueryMutate',response.data.query_list)
    },
    async getOtherPossibleCategory({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get(`/api/query/showpossiblecategory`, {headers:{Authorization: token}});
        console.log(response.data)
        commit('getOtherPossibleCategoryMutate',response.data.query_list)
    }
};

const mutations = {
    getAllQueryMutate:(state,data)=>{
        state.queries = data
    },
    getQueriesBaseOnCategoryMutate:(state,data)=>{
        state.queriesBasedCategory = data;
        state.notPending = true;
    },
    getUnidentifiedQueryMutate:(state,data)=>{
        state.unidentifiedQuery = data;
    },
    getOtherPossibleCategoryMutate:(state,data)=>{
        state.otherpossiblecategory = data
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}