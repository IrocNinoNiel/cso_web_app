<template>
    <div>
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 class="text-dark mb-0">Reports</h3>
        </div>
        <div class="row">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>School</th>
                                <th>Concern</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Dela Cerna</td>
                                <td>XU</td>
                                <td>Release of allowance</td>
                            </tr>
                            <tr>
                                <td>Anthony Perez</td>
                                <td>XU</td>
                                <td>Grade Maintenance</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
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
        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="text-primary font-weight-bold m-0">Specified Concerns</h6>
                    </div>
                    <div class="card-body">
                        <h4 class="small font-weight-bold">Others<span class="float-right">7</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"><span class="sr-only">20%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Events<span class="float-right">12</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;"><span class="sr-only">40%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Scholarships<span class="float-right">20</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Allowance<span class="float-right">25</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span class="sr-only">80%</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
import queryChartData from '../query.js'

export default {
    name:'Reports',
    data() {
        return {
        queryChartData: queryChartData
        }
    },
    mounted() {
        const ctx = document.getElementById('query-chart');
        new Chart(ctx, this.queryChartData);
    }
}
</script>

<style>

</style>