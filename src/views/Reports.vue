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
            <div class="card mb-2">
                <div class="card-body">
                     <p class="mt-3">
                        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Filters
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <div class="row mt-3">
                                    <div class="col">
                                        <ul class="">
                                            <li class="list-group-item"><input type="checkbox" value="coc" v-model="allSchool" @change="getSchoolAndCourse()">Cagayan De Oro College</li>
                                            <li class="list-group-item"><input type="checkbox" value="ustp" v-model="allSchool" @change="getSchoolAndCourse()">University Of Science and Technology of Southern Philippines</li>
                                            <li class="list-group-item"><input type="checkbox" value="xavier" v-model="allSchool" @change="getSchoolAndCourse()">Xavier University</li>
                                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="LC" @change="getSchoolAndCourse()">Lourdes College</li>
                                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="LDCU" @change="getSchoolAndCourse()">Liceo De Cagayan University</li>
                                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="SPC" @change="getSchoolAndCourse()">Southern Philippines College</li>
                                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="CU" @change="getSchoolAndCourse()">Capitol University</li>
                                            <li class="list-group-item"><input type="checkbox" v-model="allSchool" value="PCC" @change="getSchoolAndCourse()">pilgrim christian college</li>
                                        </ul>
                                    </div>
                                    <!-- <div class="col">
                                        <ul>
                                            <li class="list-group-item"><input type="checkbox" value="bsit" v-model="allCourse" @change="getSchoolAndCourse()">BSIT</li>
                                            <li class="list-group-item"><input type="checkbox" value="bschem" v-model="allCourse" @change="getSchoolAndCourse()">BSCHEM</li>
                                            <li class="list-group-item"><input type="checkbox" value="bsee" v-model="allCourse" @change="getSchoolAndCourse()">BSEE</li>
                                        </ul>
                                    </div> -->
                                </div>
                        </div>
                    </div>
                </div>
            </div>
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
            tableData:[],
            allSchool:[],
            allCourse:[],
        }
    },
     methods: {
         ...mapActions(['getAllQueries','getQueriesBaseOnCategory','getOtherPossibleCategory','getAllCategory']), 
            getSchoolAndCourse(){
                if(this.category == 'all'){
                    console.log(this.allQueries);

                    let tempList = this.allQueries;

                    if(this.allSchool.length != 0){
                        tempList = tempList.filter(e=>e.student);
                        console.log(tempList);
                        tempList = tempList.filter((el) => {
                            return this.allSchool.some((f) => {
                                return f.toLowerCase() === el.student.school.toLowerCase();
                            });
                        });
                    }

                    if(this.allCourse.length != 0){
                        tempList = tempList.filter(e=>e.student);
                        tempList = tempList.filter((el) => {
                            return this.allCourse.some((f) => {
                                return f.toLowerCase() === el.student.course.toLowerCase()
                            });
                        });
                    }

                    this.categoryList = tempList
                }else{

                    let tempList = this.allQueries.filter(e=>e.category_id === this.category);

                    if(this.allSchool.length != 0){
                        tempList = tempList.filter(e=>e.student);
                        tempList = tempList.filter((el) => {
                            return this.allSchool.some((f) => {
                                return f.toLowerCase() === el.student.school.toLowerCase();
                            });
                        });
                    }

                    if(this.allCourse.length != 0){
                        tempList = tempList.filter(e=>e.student);
                        tempList = tempList.filter((el) => {
                            return this.allCourse.some((f) => {
                                return f.toLowerCase() === el.student.course.toLowerCase()
                            });
                        });
                    }

                    this.categoryList = tempList
                }

                this.dataNow = this.getRecentData(this.categoryList);
                this.dataMonth = this.getMonthData(this.categoryList);
                this.tableData = this.categoryList;
                this.getLabels(1);
                this.getData(1);

            },
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
                const tempList = query.filter(e=>new Date(e.createdAt).getMonth() === new Date().getMonth())
                return tempList.filter(e=>new Date(e.createdAt).getDate() === new Date().getDate())
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
        window.addEventListener('load', this.loadData)
    },
}
</script>

<style>

</style>