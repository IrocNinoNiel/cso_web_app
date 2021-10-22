<template>
    <div class="col-lg-5 col-xl-5 col">
        <div class="row d-flex flex-column">
            <div class="card shadow mb-4">
                <div class="card-body">
                    <canvas id="query-chart"></canvas>
                </div>
            </div>
        </div>
        <div class="row d-flex flex-column">
            <div class="card shadow mb-4">
                <div class="card-body">
                    <canvas id="query-chart1"></canvas>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
  export default {
        name:'QueryChartReport',
        props:['chartLabels','chartData'],
        data() {
            return {
                
               
            }
        },
        watch: { 
            chartData: function(newVal, oldVal) { // watch it
                const ctx = document.getElementById('query-chart');
                this.fillData();
                new Chart(ctx, this.queryData);

                const ctx1 = document.getElementById('query-chart1');
                this.fillData1();
                new Chart(ctx1, this.queryData);
                
            }
        },
        methods:{
            
            fillData () {
            const chartLabels = this.chartLabels
            const chartData = this.chartData
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

            fillData1 () {
            const chartLabels = this.chartLabels
            
            const chartData = this.chartData

                this.queryData = {
                    type: "pie",
                    data: {
                    labels: chartLabels,
                    datasets: [
                        {
                        label: "Number of Queries",
                        data: chartData,
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
                            'rgb(210, 235, 167)',
                            'rgb(50, 168, 82)'
                        ],
                        borderColor: "rgba(78, 115, 223, 1)",
                        borderWidth: 3
                        },
                    ]
                    },
                    
                }
              
            },
        },
        mounted() {
            const ctx = document.getElementById('query-chart');
            this.fillData();
            new Chart(ctx, this.queryData);

            const ctx1 = document.getElementById('query-chart1');
            this.fillData1();
            new Chart(ctx1, this.queryData);
        },
        
    }
</script>

<style>

</style>