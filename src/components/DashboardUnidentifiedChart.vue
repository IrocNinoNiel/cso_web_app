<template>
    <div class="col align-self-center">
        <div>
            <div class="mb-4 align-self-center">
                <div class="card shadow mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h6 class="text-primary font-weight-bold m-0">General Query Overview</h6>
                        <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
                                    <div class="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                                        role="menu">
                                        <p class="text-center dropdown-header">Months</p>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(1)">&nbsp;January</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(2)">&nbsp;Febraury</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(3)">&nbsp;March</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(4)">&nbsp;April</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(5)">&nbsp;May</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(6)">&nbsp;June</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(7)">&nbsp;July</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(8)">&nbsp;August</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(9)">&nbsp;September</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(10)">&nbsp;October</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(11)">&nbsp;November</button>
                                        <button class="dropdown-item" role="presentation" href="#" @click="changeQueryByDate(12)">&nbsp;December</button>
                                        </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <canvas id="query-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'DashboardUnidentifiedChart',
    computed:mapGetters(['unidentifiedQueryByMonth','allCategories']),
    data(){
        return{
            unidentifiedQuery:[],
            chartLabels:[],
            chartData:[]
        }
    },
    methods:{
        ...mapActions(['ShowUnidentifiedQueryByMonth','getAllCategory']),
        fillData () {
            const chartLabels = this.chartLabels
            const chartData = this.chartData
                this.queryData = {
                    type: "doughnut",
                    data: {
                        labels: this.chartLabels,
                        datasets: [
                            {
                            label: "Number of Queries",
                            data: this.chartData,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(43, 7, 16)',
                                'rgb(245, 148, 103)',
                                'rgb(26, 186, 240)',
                                'rgb(39, 96, 115)',
                                'rgb(205, 212, 207)',
                                'rgb(255, 205, 86)',
                                'rgb(167, 235, 185)',
                                'rgb(10, 66, 250)',
                            ],
                            borderColor: "rgb(255, 255, 255)",
                            borderWidth: 3
                            },
                        ]
                    },
                    
                }
              
        },
        changeQueryByDate(number){
            const data = {month:number};
            this.ShowUnidentifiedQueryByMonth(data);
            setTimeout(() => {
                console.log(this.unidentifiedQueryByMonth)
                console.log(this.allCategories)
                this.unidentifiedQuery = this.unidentifiedQueryByMonth

                this.chartData = [];
                this.allCategories.forEach(e=>{
                    const countLength = this.unidentifiedQuery.filter(x=>x.possible_category == e.category_name);
                    this.chartData.push(countLength.length)
                });
                console.log(this.chartData);
        
                const ctx = document.getElementById('query-chart');
                this.fillData();
                new Chart(ctx, this.queryData);
            }, 1000);
        }
    },
    // mounted() {
    //         const ctx = document.getElementById('query-chart');
    //         this.fillData();
    //         new Chart(ctx, this.queryData);
    // },
    created(){

        this.getAllCategory();
        const month = new Date()
        const data = {month:month.getMonth()+1};
        this.ShowUnidentifiedQueryByMonth(data);
        setTimeout(() => {
            this.unidentifiedQuery = this.unidentifiedQueryByMonth
            this.allCategories.forEach(e=>this.chartLabels.push(e.category_name))
            this.allCategories.forEach(e=>{
                const countLength = this.unidentifiedQuery.filter(x=>x.possible_category == e.category_name);
                this.chartData.push(countLength.length)
            });
    
            const ctx = document.getElementById('query-chart');
            this.fillData();
            new Chart(ctx, this.queryData);
        }, 1000);
    }
}
</script>

<style>

</style>