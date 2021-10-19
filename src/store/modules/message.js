import axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
    messages:[],
    message:{},
    loadingSMS:false,
    studentList:[],
    messageList:[],
    unreadMessage:[],
    isActive:'',
    afterSend:false
};

const getters = {
    allMessage : (state)=>state.messages,
    oneMessage : (state)=>state.message,
    loadingSMS: (state)=>state.loadingSMS,
    studentNumberList: (state)=>state.studentList,
    studentMessageList: (state)=>state.messageList,
    getUnreadMessage:(state)=>state.unreadMessage,
    isActive:(state) => state.isActive,
    afterSend:(state) => state.afterSend
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
    },
    async getUnreadCurrentMessage({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/sms/getunreadcurrentmessage", {headers:{Authorization: token}});
        commit('getUnreadCurrentMessageMutate',response.data)
    },
    async getActive({commit},number){
        commit('getActiveMutate',number)
    },
    async getAfterSend({commit},value){
        commit('getAfterSendMutate',value)
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
    getUnreadCurrentMessageMutate:(state,data)=>{
        state.unreadMessage = data.SMS_list
    },
    getActiveMutate:(state,number)=> {
        state.isActive = number
    },
    getAfterSendMutate:(state,value)=> {
        state.afterSend = value
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}