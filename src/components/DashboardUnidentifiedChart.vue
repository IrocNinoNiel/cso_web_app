<template>
    <div>
        <div class="row mt-2">
            <div class="col">
                <div class="card shadow mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h6 class="text-primary font-weight-bold m-0">Query Overview</h6>
                        <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
                                    <div class="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                                        role="menu">
                                        <p class="text-center dropdown-header">Months</p><a class="dropdown-item" role="presentation" href="#">&nbsp;January</a><a class="dropdown-item" role="presentation" href="#">&nbsp;Febraury</a>
                                     </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <canvas id="query-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label for="categoryChoose">Select Category</label>
                <select class="form-control">
                    <option value="all" selected>All</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-6 mb-2">
                <div class="card shadow border-left-primary">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2">
                                <button class="btn">
                                    <div class="text-uppercase text-primary text-xs mb-1"><span>All Unidentified QUERIES</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span>100</span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 mb-2">
                <div class="card shadow border-left-warning">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2">
                                <button class="btn">
                                    <div class="text-uppercase text-warning text-xs mb-1"><span>All Unidentified QUERIES This Month</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span>100</span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card shadow border-left-danger">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2">
                                <button class="btn">
                                    <div class="text-uppercase text-danger text-xs mb-1"><span>All Unidentified QUERIES This Week</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span>100</span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card shadow border-left-success">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mr-2">
                                <button class="btn">
                                    <div class="text-uppercase text-success text-xs mb-1"><span>All Unidentified QUERIES this day</span></div>
                                </button>
                                <div class="text-dark font-weight-bold mb-0"><span>100</span></div>
                            </div>
                            <div class="col-auto"><i class="icon ion-email fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DashboardUnidentifiedChart',
    methods:{
        fillData () {
            const chartLabels = this.chartLabels
            const chartData = this.chartData
                this.queryData = {
                    type: "doughnut",
                    data: {
                        labels: ['Allowance', 'Scholarship', 'Events', 'COE', 'Website',],
                        datasets: [
                            {
                            label: "Number of Queries",
                            data: [40, 39, 10, 40, 39,],
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
    },
    mounted() {
            const ctx = document.getElementById('query-chart');
            this.fillData();
            new Chart(ctx, this.queryData);
        },
}
</script>

<style>

</style>