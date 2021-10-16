import axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
    messages:[],
    message:{},
    loadingSMS:false,
    studentList:[],
    messageList:[]
};

const getters = {
    allMessage : (state)=>state.messages,
    oneMessage : (state)=>state.message,
    loadingSMS: (state)=>state.loadingSMS,
    studentNumberList: (state)=>state.studentList,
    studentMessageList: (state)=>state.messageList
};

const actions = {
    async getCurrentMessage({commit},student_num){
        const token = VueCookies.get('Token');
     
        const response = await axios.get(`/api/sms/getcurrentmessage/${student_num}`, {headers:{Authorization: token}});
        commit('getCurrentMessageMutate',response.data)
    },
    async getAllMessage({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/sms/getallmessage", {headers:{Authorization: token}});
        commit('getAllMessageMutate',response.data)
    },
    async sentMessage({commit},data){
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
    }
    
};

const mutations = {
    getAllMessageMutate:(state,data)=>{
        state.messages = data.SMS_list
        state.studentList = data.studentNumList
    },
    getCurrentMessageMutate:(state,data)=>{
        state.messageList = data.currentMessageList
    },
    sendSMSMutate:(state,data)=>{
        state.messages.push(data);
    },
    loadingSMSMutate:(state,data)=>{
        state.loadingSMS = data;
    },
    SOCKET_MESSAGEFROMSTUDENT:(state,data)=>{
        state.messages = data;
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}