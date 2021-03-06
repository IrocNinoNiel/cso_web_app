import axios from "axios";
import router from '@/router'
import VueCookies from 'vue-cookies'

const state = {
    students:[],
    student:{}
};

const getters = {
    allStudent:(state)=>state.students,
    oneStudentQuery:(state)=>state.student,
};

const actions = {
    // async getAllStudents({commit}){
    //     const token = VueCookies.get('Token');
    //     const response = await axios.get("/api/students/show", {headers:{Authorization: token}});
    //     // console.log(response.data);
    //     commit('getAllStudentMutate',response.data.student_list)
    // },
    async getInquirer({commit}){
        const token = VueCookies.get('Token');
        const response = await axios.get("/api/students/showinquirer", {headers:{Authorization: token}});
        console.log(response.data.records);
        commit('getAllStudentMutate',response.data.records)
    },
    async registerNewStudent({commit}, data){
        const token = VueCookies.get('Token');
        axios.post('/api/students/add', {data}, {headers:{authorization: token}})
            .then((response) => {    
                console.log(response);
                commit('registerStudentMutate',response.data);  
            })    
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async deleteStudent({commit},id){
        const token = VueCookies.get('Token');
        axios.delete(`/api/students/delete/${id}`,{headers:{authorization: token}})
            .then((response)=> {
                alert(response.data.message)
                commit('deleteStudentMutate',id);
            })
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async getOneStudent({commit},id){
        const token = VueCookies.get('Token');
        axios.get(`/api/students/showinquirer/${id}`,{headers:{authorization: token}})
            .then((response)=> {
                console.log(response.data);
                commit('getOneStudentMutate',response.data.records);
            })
            .catch((errors) => {    
                alert(errors.response.data.message)
            }) 
    },
    async editOneStudent({commit},data){

        const token = VueCookies.get('Token');
        const id = router.currentRoute.params.id

        axios.put(`/api/students/edit/${id}`,{data},{headers:{authorization: token}})
            .then((response)=> {
                // console.log(response);
                commit('editOneStudentMutate',response.data);
                dispatch('getOneStudent',{id:id})
            })
            .catch((errors) => {    
                // alert(errors.response.data.message)
            }) 
    },
    async getFilteredList({commit},data){

        const token = VueCookies.get('Token');
        const id = router.currentRoute.params.id

        axios.post(`/api/students/filterstudentrecords`,{data},{headers:{authorization: token}})
            .then((response)=> {
                // console.log(response);
                commit('filterListMutate',response.data);
               
            })
            .catch((errors) => {    
                // alert(errors.response.data.message)
            }) 
    }

};

const mutations = {
    registerStudentMutate:(state,data)=>{
        alert('Register Succesfully')
        router.push('/table');
    },
    getAllStudentMutate:(state,data)=>{
        state.students = data
    },
    deleteStudentMutate:(state,id)=>{
        state.students = state.students.filter(e=>e._id !== id);
    },
    getOneStudentMutate:(state,data)=>{
        state.student = data;
    },
    editOneStudentMutate:(state,data)=>{
        console.log(data);
        alert('Edited Succesfully')
        router.push('/table');
    },
    filterListMutate:(state,data)=>{
        console.log(data);
        state.students = data.records;
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}