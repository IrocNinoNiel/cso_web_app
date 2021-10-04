<template>
    <div class="row">
        <div class="col-lg-7 col-xl-8">
            <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="text-primary font-weight-bold m-0">Query Overview</h6>
                    <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
                        <div class="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                            role="menu">
                            <p class="text-center dropdown-header">dropdown header:</p><a class="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a class="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation" href="#">&nbsp;Something else here</a></div>
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


    export default {
        
        name:'QueryChart',
        props: ['allQueries'],
        methods:{
            fillData () {
            const chartLabels = ["May", "Jun", "July", "Aug","Sep","Oct","Nov","Dec"]
            const chartData = [0, 0, 0, 0, this.allQueries.length, 1, 0, 0]

                this.queryData = {
                    type: "bar",
                    data: {
                    labels: chartLabels,
                    datasets: [
                        {
                        label: "Number of Queries",
                        data: chartData,
                        backgroundColor: "rgba(54,73,93,.5)",
                        borderColor: "#36495d",
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

</style>