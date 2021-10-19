const state = {
   notification:[]
};

const getters = {
    allNotification: (state) => state.notification,
};

const actions = {
    async getNotification({commit},data){
        commit('push_notification',data)
    },
    async deleteNotification({commit},id){
        commit('delete_notification',id)
    }
};

const mutations = {
    push_notification:(state,data)=>{
        const notification = {
            message:data,
            id:(Math.random().toString(36)+Date.now().toString(36)).substr(2),
        }
        state.notification.push(
            notification
        );
    },
    delete_notification:(state,id)=>{
        state.notification = state.notification.filter(e=>e.id !== id);
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}