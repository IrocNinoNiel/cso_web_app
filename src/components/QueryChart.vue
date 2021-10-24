<template>
    <div class="col-lg-7 col-xl-8">
        <div class="row d-flex flex-column">
            <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="text-primary font-weight-bold m-0">Query Overview</h6>
                    <div class="queryButtonContainerClass mt-2">
                        <div v-for="category in allCategories" :key="category._id">
                            <button class="btn btn-primary mr-3" type="button" @click="btnChangeData(category._id)">{{category.category_name}}</button>
                        </div>
                    </div>

                    <div class="dropdown no-arrow">
                    </div>
                </div>
                
                <div class="card-body">
                    <canvas id="query-chart"></canvas>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import chart from 'chart.js';

    export default {
        
        name:'QueryChart',
        computed:mapGetters(['allCategories','allQueries','pending','queriesBasedCategory']),
        data() {
            return {
                janCount:0,
                febCount:0,
                marCount:0,
                aprCount:0,
                mayCount:0,
                junCount:0,
                julyCount:0,
                augCount:0,
                sepCount:0,
                octCount:0,
                novCount:0,
                decCount:0,
                dataList:[]
               
            }
        },
        methods:{
            ...mapActions(['getAllCategory','getAllQueries','getQueriesBaseOnCategory']), 
            fillData () {
            const chartLabels = ["Jan","Feb","Mar","Apr","May", "Jun", "July", "Aug","Sep","Oct","Nov","Dec"]
            
            const chartData = [
                this.janCount, this.febCount, this.marCount, this.aprCount, this.mayCount, this.junCount, this.julyCount, this.augCount,this.sepCount,this.octCount,this.novCount,this.decCount
            ]

                this.queryData = {
                    type: "line",
                    data: {
                    labels: chartLabels,
                    datasets: [
                        {
                        label: "Number of Queries",
                        data: chartData,
                        backgroundColor: "rgba(78, 115, 223, 0.05)",
                        borderColor: "rgba(78, 115, 223, 1)",
                        borderWidth: 3
                        },
                    ]
                    },
                    options: {
                        responsive: true,
                        lineTension: 1,
                        scales: {
                            yAxes: [
                            {
                                ticks: {
                                beginAtZero: true,
                                padding: 25
                                }
                            }
                            ]
                        }
                    }
                }
              
            },
            btnChangeData(id){
                this.dataList = this.allQueries.filter(e=>e.category_id === id);
                this.getQueriesBaseOnCategory(id);
                if(this.dataList.length > 0){
                    this.janCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 0).length;
                    this.febCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 1).length;
                    this.marCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 2).length;
                    this.aprCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 3).length;
                    this.mayCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 4).length;
                    this.junCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 5).length;
                    this.julyCoun=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 6).length;
                    this.augCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 7).length;
                    this.sepCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 8).length;
                    this.octCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 9).length;
                    this.novCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 10).length;
                    this.decCount=this.dataList.filter(e=>new Date(e.createdAt).getMonth() == 11).length;
                } else {
                    this.janCount=0,
                    this.febCount=0,
                    this.marCount=0,
                    this.aprCount=0,
                    this.mayCount=0,
                    this.junCount=0,
                    this.julyCount=0,
                    this.augCount=0,
                    this.sepCount=0,
                    this.octCount=0,
                    this.novCount=0,
                    this.decCount=0
                }

                const ctx = document.getElementById('query-chart');
                this.fillData();
                new Chart(ctx, this.queryData);
            },
            loadCategory(){
                this.getAllCategory();
                this.getAllQueries();
            }
        },
        mounted() {
            const ctx = document.getElementById('query-chart');
            this.fillData();
            new Chart(ctx, this.queryData);
        },
        created(){
            window.addEventListener('load', this.loadCategory)
            this.getAllCategory();
            this.getAllQueries();
        }
        
    }
</script>

<style>
.queryButtonContainerClass{
    width: 400px;
    display: flex;
    overflow-x: auto;
}
</style>