import axios from "axios";

const state = {
    users: [
        {
            id: 1,
            name:"name",
            email:'sample@email.com',
            pass:123
        },
        {
            id: 2,
            name:"name1",
            email:'sample1@email.com',
            pass:123
        },
    ]
};

const getters = {
    allUsers: (state) => state.users
};

const actions = {
    async fetchUsers({ commit }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data);
        commit(response.data);
    }

};

const mutations = {};


export default{
    state,
    getters,
    actions,
    mutations
}