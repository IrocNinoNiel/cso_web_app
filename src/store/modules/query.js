import axios from "axios";
import VueCookies from 'vue-cookies'
import router from '@/router'

const state = {
    queries:[],
    query:{},
    queriesBasedCategory:[],
    notPending:false,
    unidentifiedQuery:[],
    otherpossiblecategory:[],
    unidentifiedQueryByMonth:[],
    currentUnidentifedQuery:[],
};

const getters = {
    allQueries : (state)=>state.queries,
    oneQuery : (state)=>state.query,
    categoryQueries :(state)=>state.queriesBasedCategory,
    pending: (state)=>state.notPending,
    unidentifiedQuery:(state)=>state.unidentifiedQuery,
    otherpossiblecategory:(state)=>state.otherpossiblecategory,
    unidentifiedQueryByMonth:(state)=>state.unidentifiedQueryByMonth,
    currentUnidentifedQuery:(state)=>state.currentUnidentifedQuery,
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
    },
    async changeCategoryofQuery({commit,dispatch},data){
        const token = VueCookies.get('Token');
        const response = await axios.post(`/api/query/changequerycategory/${data.id}`,{data}, {headers:{Authorization: token}});

        dispatch('getAllQueries');
        dispatch('getOtherPossibleCategory');
        commit('changeCategoryofQueryMutate',response.data)
    },
    async ShowUnidentifiedQueryByMonth({commit},data){
        const token = VueCookies.get('Token');
        const response = await axios.post(`/api/query/show-unidentified-query-by-month`,{data}, {headers:{Authorization: token}});

        commit('showUnidentifiedQueryByMonthMutate',response.data.query_list)
    },
    async GetCurrentUnidentifiedQuery({commit},data){
        const token = VueCookies.get('Token');
        const response = await axios.post(`/api/query/get-current-unidentified-query`,{data}, {headers:{Authorization: token}});

        commit('getCurrentUnidentifiedQueryMutate',response.data.query_list)
    },
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
    },
    changeCategoryofQueryMutate:(state,data)=>{
        alert(data.message)
        router.go(router.currentRoute);
    },
    showUnidentifiedQueryByMonthMutate:(state,data)=>{
        state.unidentifiedQueryByMonth = data;
    },
    getCurrentUnidentifiedQueryMutate:(state,data)=>{
        state.currentUnidentifedQuery = data
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}