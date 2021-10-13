<template>
    <div class="row">
        <div class="col-lg-7 col-xl-8">
            <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="text-primary font-weight-bold m-0">Query Overview</h6>

                    <div class="queryButtonContainerClass mt-2">
                        <button class="btn btn-primary mr-3" type="button" @click="btnChangeData">Events</button>
                        <button class="btn btn-primary mr-3" type="button" @click="btnChangeData">Scholarship</button>
                        <button class="btn btn-primary mr-3" type="button" @click="btnChangeData">Allowance</button>
                        <button class="btn btn-primary mr-3" type="button" @click="btnChangeData">Others</button>
                    </div>

                    <div class="dropdown no-arrow">
                    </div>
                </div>
                
                <div class="card-body">
                    <canvas id="query-chart"></canvas>
                </div>
            </div>
        </div>
        <div class="col">
            <DashboardMessage/>
        </div>
    </div>
</template>

<script>

    import DashboardMessage from './DashboardMessage.vue'
    export default {
        
        name:'QueryChart',
        props: ['allQueries'],
        components:{DashboardMessage},
        data() {
            return {
                randomNumber1:Math.floor((Math.random() * 20) + 1),
                randomNumber2:Math.floor((Math.random() * 15) + 1),
            }
        },
        methods:{
            fillData () {
            const chartLabels = ["May", "Jun", "July", "Aug","Sep","Oct","Nov","Dec"]
            const chartData = [0, 0, 0, this.randomNumber2, this.randomNumber1, 1, 0, 0]

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
            btnChangeData(){
                this.randomNumber1 = Math.floor((Math.random() * 20) + 1)
                this.randomNumber2 = Math.floor((Math.random() * 15) + 1)
                const ctx = document.getElementById('query-chart');
                this.fillData();
                new Chart(ctx, this.queryData);
            }
        },
        mounted() {
            const ctx = document.getElementById('query-chart');
            this.fillData();
            new Chart(ctx, this.queryData);
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