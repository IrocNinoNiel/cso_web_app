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
    afterSend:false,
    previewMessage:[],
    unReadMessage:[],
};

const getters = {
    allMessage : (state)=>state.messages,
    oneMessage : (state)=>state.message,
    loadingSMS: (state)=>state.loadingSMS,
    studentNumberList: (state)=>state.studentList,
    studentMessageList: (state)=>state.messageList,
    getUnreadMessage:(state)=>state.unreadMessage,
    isActive:(state) => state.isActive,
    afterSend:(state) => state.afterSend,
    previewMessage:(state)=>state.previewMessage,
    unReadMessage:(state)=>state.unReadMessage,
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
        console.log(response.data);
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
    async sentMessageDashboard({commit},data){
        const token = VueCookies.get('Token');
        commit('loadingSMSMutate',true);
        axios.post('/api/sms/send', {data}, {headers:{authorization: token}})
            .then((response) => {    
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
    },
    async makeUnreadRead({commit}, student_num){
        const token = VueCookies.get('Token');
        await axios.get(`/api/sms/changesmsstatus/${student_num}`, {headers:{Authorization: token}});
        // dispatch('getUnreadCurrentMessage')
        commit('makeUnreadReadMutate');
    },
    async sendBroadcastMessage({commit}, data){
        const token = VueCookies.get('Token');
        try{
            commit('loadingSMSMutate',true);
            axios.post(`/api/sms/sendbroadcastmessage/`, {data},{headers:{Authorization: token}})
                .then(response=>{
                    console.log(response);
                    commit('sendBroadcastMutate',response.data.message);  
                    commit('loadingSMSMutate',false);  
                })
                .catch(err=>{
                    console.log(err)
                    alert(err.message)
                    commit('loadingSMSMutate',false);  

                })
        }catch(e){
            alert(e.message);
        }
    }
    
};

const mutations = {
    getAllMessageMutate:(state,data)=>{
        state.messages = data.SMS_list
        state.studentList = data.studentNumList
        state.previewMessage = data.previewMessage
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
        state.unreadMessage = data.SMS_list;
        state.unReadMessage = data.unread_sms_list;
    },
    getActiveMutate:(state,number)=> {
        state.isActive = number
    },
    getAfterSendMutate:(state,value)=> {
        state.afterSend = value
    },
    makeUnreadReadMutate:(state)=> {
        console.log('changes')
    },
    sendBroadcastMutate:(state,data)=>{
        alert(data);
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}