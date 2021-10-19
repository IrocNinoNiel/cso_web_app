import axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
    queries:[],
    query:{},
    queriesBasedCategory:[],
    notPending:false
};

const getters = {
    allQueries : (state)=>state.queries,
    oneQuery : (state)=>state.query,
    categoryQueries :(state)=>state.queriesBasedCategory,
    pending: (state)=>state.notPending,
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
        commit('getQueriesBaseOnCategory',response.data.query_list)
    }
};

const mutations = {
    getAllQueryMutate:(state,data)=>{
        state.queries = data
    },
    getQueriesBaseOnCategory:(state,data)=>{
        state.queriesBasedCategory = data;
        state.notPending = true;
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}