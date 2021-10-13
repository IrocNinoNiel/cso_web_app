import axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
    queries:[],
    query:{}
};

const getters = {
    allQueries : (state)=>state.queries,
    oneQuery : (state)=>state.query
};

const actions = {
    async getAllQueries({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/query/show", {headers:{Authorization: token}});
        console.log(response.data);
        commit('getAllQueryMutate',response.data.query_list)
    },
    
};

const mutations = {
    getAllQueryMutate:(state,data)=>{
        state.queries = data
    },
};


export default{
    state,
    getters,
    actions,
    mutations
}