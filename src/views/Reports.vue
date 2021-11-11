<template>
    <div>
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <div class="form-group">
                <label for="categoryChoose">Select Category</label>
                <select class="form-control" id="categoryChoose" v-model="category" @change="onClick">
                    <option value="all" selected>All</option>
                    <option :value="cat._id" v-for="cat in allCategories" :key="cat._id">{{cat.category_name}}</option>
                </select>
            </div>
        </div>
        <div v-if="this.category == null">
            <h1 class="text-center">Choose a category please</h1>
        </div>
        <div v-else-if="this.category == this.categoryOther">
            <OtherQueryList/>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow border-left-success py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <button class="btn" @click="changeTableData(1)">
                                        <div class="text-uppercase text-success font-weight-bold text-xs mb-1"><span>Total QUERIES</span></div>
                                    </button>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span>{{categoryList.length}}</span></div>
                                </div>
                                <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow border-left-warning py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <button class="btn" @click="changeTableData(2)">
                                        <div class="text-uppercase text-warning font-weight-bold text-xs mb-1"><span>Total QUERIES This Month</span></div>
                                    </button>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span>{{dataMonth.length}}</span></div>
                                </div>
                                <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow border-left-primary py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <button class="btn" @click="changeTableData(3)">
                                        <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Total QUERIES this Day</span></div>
                                    </button>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span>{{dataNow.length}}</span></div>
                                </div>
                                <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <QueryChartReport :chartLabels="label" :chartData="data"/>
            </div>
            <div class="row">
                <TableStudentReport :queryTableList="tableData"/>
            </div>
        </div>
    </div>
</template>

<script>
// import Chart from 'chart.js'
// import queryChartData from '../query.js'
import {mapActions, mapGetters} from 'vuex';
import QueryChartReport from '../components/QueryChartReport.vue'
import TableStudentReport from '../components/TableStudenReport.vue'
import OtherQueryList from '../components/OtherQueryList.vue'
export default {
    
    name:'Reports',
    computed:mapGetters(['allQueries','allCategories','categoryQueries','otherpossiblecategory']),
    components:{QueryChartReport,TableStudentReport,OtherQueryList},
    data() {
        return {
            category:null,
            categoryOther:null,
            data:[],
            label:[],
            categoryList:[],
            dateNow:new Date,
            dataNow:[],
            dataMonth:[],
            tableData:[]
        }
    },
     methods: {
         ...mapActions(['getAllQueries','getQueriesBaseOnCategory','getOtherPossibleCategory','getAllCategory']), 
            onClick(){

                this.categoryOther = this.allCategories.find(e=> e.category_name == 'others')._id;
                
                this.getAllQueries;
                if(this.category == 'all'){
                    this.categoryList = this.allQueries;
                }else{
                    this.categoryList = this.allQueries.filter(e=>e.category_id === this.category);
                }

                this.dataNow = this.getRecentData(this.categoryList);
                this.dataMonth = this.getMonthData(this.categoryList);
                this.tableData = this.categoryList;
                this.getLabels(1);
                this.getData(1);
            },
            getLabels(type){
                if(type == 1){
                    this.label = ["Jan","Feb","Mar","Apr","May", "Jun", "July", "Aug","Sep","Oct","Nov","Dec"]
                }else if(type == 2){

                }else{
                    
                }
            },
            getData(type){
                if(type == 1){
                    this.data = [
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 0).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 1).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 2).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 3).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 4).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 5).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 6).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 7).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 8).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 9).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 10).length,
                        this.categoryList.filter(e=>new Date(e.createdAt).getMonth() == 11).length,
                    ]
                } else if(type == 2){
                    
                }else{

                }
            },
            loadData(){
                this.getAllQueries();
                this.getAllQueries();
                this.getAllCategory();
                this.getOtherPossibleCategory();
            },
            getRecentData(query){
                return query.filter(e=>new Date(e.createdAt).getDate() === new Date().getDate())
            },
            getMonthData(query){
                return query.filter(e=>new Date(e.createdAt).getMonth() === new Date().getMonth())
            },
            changeTableData(e){
                if(e == 1){
                    this.tableData = this.categoryList;
                }else if(e == 2){
                    this.tableData = this.dataMonth;
                }else if(e == 3){
                    this.tableData = this.dataNow;
                }
            }
    },
    created() {
        this.getAllQueries();
        this.getAllCategory();
        this.getOtherPossibleCategory();
    },
    created(){
        window.addEventListener('load', this.loadData)
    }
}
</script>

<style>

</style>