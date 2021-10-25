import axios from "axios";
import router from '../../router';
import VueCookies from 'vue-cookies'

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
        const token = VueCookies.get('Token');
        const response = await axios.get('/api/users/show', {headers:{Authorization: token}})
        // console.log(response.data.users);
        commit('getAllUsers',response.data.users);
    },
    async getUser({ commit }, data){
        commit('getOne', data)
    },
    async getUserData({commit}, token){
        const response = await axios.get("/api/users/dashboard", {headers:{Authorization: token}});
        const getUser = await axios.get(`/api/users/show/${response.data._id}`, {headers:{Authorization: token}});
        commit('getData',getUser.data.user) ;
    },
    async deleteUserData({commit}){
        commit('removeData',{}) 
    },
    async registerNewUser({commit}, data){
        // const response = await axios.post('/api/users//register-user',{data}, {headers:{authorization: token}});
        const token = VueCookies.get('Token');
        axios.post('/api/users/register-user', {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response);
                commit('registerUser',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
                // commit('errorRegister',errors.response.data)
                // alert('Invalid Credentials')
            }) 
    },
    async editedUserInfo({commit}, data){
        const token = VueCookies.get('Token');
        const id = data._id;
        axios.post(`/api/users/editinfo/${id}`, {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response);
                commit('editedUserInfoMutate',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
                // commit('errorRegister',errors.response.data)
                // alert('Invalid Credentials')
            }) 
    },
    async editedUserContact({commit}, data){
        const token = VueCookies.get('Token');
        const id = data._id;
        axios.post(`/api/users/editcontact/${id}`, {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response);
                commit('editedUserInfoMutate',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
                // commit('errorRegister',errors.response.data)
                // alert('Invalid Credentials')
            }) 
    },
    async editedUsername({commit}, data){
        const token = VueCookies.get('Token');
        const id = data._id;
        axios.post(`/api/users/editusername/${id}`, {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response);
                commit('editedUserInfoMutate',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
                // commit('errorRegister',errors.response.data)
                // alert('Invalid Credentials')
            }) 
    },
    async editedPassword({commit}, data){
        const token = VueCookies.get('Token');
        const id = data._id;
        axios.post(`/api/users/editpassword/${id}`, {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response);
                commit('editedUserInfoMutate',response.data);  
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
    getAllUsers:(state,data)=>{
        state.users = data;
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
    errorRegister:(state,data)=>{
        console.log(data)
        state.errMsg = data.message
        state.hasRegisterError = true
    },
    editedUserInfoMutate:(state,data)=>{
        alert('User Information Edited Succesfully')
        router.go(router.currentRoute);
    }
    
};


export default{
    state,
    getters,
    actions,
    mutations
}