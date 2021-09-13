import axios from "axios";
import router from '../../router';

const state = {
    users: [],
    user:{},
    datauser:{},
    errMsg:"",
    hasRegisterError:false
};

const getters = {
    allUsers: (state) => state.users,
    oneUser: (state) => state.user,
    userData: (state) => state.datauser,
    errorMessage:(state)=>state.errMsg,
    checkRegisterError:(state)=>state.hasRegisterError,
};

const actions = {
    async fetchUsers({ commit }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit(response.data);
    },
    async getUser({ commit }, data){
        commit('getOne', data)
    },
    async getUserData({commit}, token){
        const response = await axios.get("/api/users/dashboard", {headers:{Authorization: token}});
        commit('getData',response.data) 
    },
    async deleteUserData({commit}){
        commit('removeData',{}) 
    },
    async registerNewUser({commit}, data, token){
        // const response = await axios.post('/api/users//register-user',{data}, {headers:{authorization: token}});
        axios.post('/api/users//register-user', {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response);
                commit('registerUser',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
                // commit('errorRegister',errors.response.data)
                // alert('Invalid Credentials')
            }) 
    }

};

const mutations = {
    getOne:(state,data)=>{
        state.user = data;
    },
    getData:(state,data)=>{
        state.datauser = data;
    },
    removeData:(state,data)=>{
        state.datauser = data
    },
    registerUser:(state,data)=>{
        state.hasRegisterError = false
        alert('Register Succesfully')
        router.push('/manageusers');
    },
    // errorRegister:(state,data)=>{
    //     console.log(data)
    //     state.errMsg = data.message
    //     state.hasRegisterError = true
    // }
};


export default{
    state,
    getters,
    actions,
    mutations
}