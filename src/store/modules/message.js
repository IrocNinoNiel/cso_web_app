import axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
    messages:[],
    message:{},
    loadingSMS:false,
};

const getters = {
    allMessage : (state)=>state.messages,
    oneMessage : (state)=>state.message,
    loadingSMS: (state)=>state.loadingSMS
};

const actions = {
    async getAllMessage({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/sms/getallmessage", {headers:{Authorization: token}});
        commit('getAllMessageMutate',response.data.SMS_list)
    },

    async sentMessage({commit},data){
        // console.log(data);
        const token = VueCookies.get('Token');
        commit('loadingSMSMutate',true);
        axios.post('/api/sms/send', {data}, {headers:{authorization: token}})
            .then((response) => {    
                commit('sendSMSMutate',response.data.message);  
                commit('loadingSMSMutate',false);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    
};

const mutations = {
    getAllMessageMutate:(state,data)=>{
        state.messages = data
    },
    sendSMSMutate:(state,data)=>{
        state.messages.push(data);
    },
    loadingSMSMutate:(state,data)=>{
        state.loadingSMS = data;
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}