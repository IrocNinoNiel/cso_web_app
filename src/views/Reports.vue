<template>
    <div>
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 class="text-dark mb-0">Reports</h3>
        </div>
        <QueryListTable :queryTableList="this.allQueries"/>
        <QueryChart :allQueries="this.allQueries"/>
        <SpecifiedConcernList :specifiedConcernListData="this.allQueries"/>
    </div>
</template>

<script>
// import Chart from 'chart.js'
// import queryChartData from '../query.js'
import {mapActions, mapGetters} from 'vuex';
import QueryListTable from '../components/QueryListTable.vue';
import SpecifiedConcernList from '../components/SpecifiedConcernList.vue';
import QueryChart from '../components/QueryChart.vue';

export default {
    
    name:'Reports',
    computed:mapGetters(['allQueries']),
    components:{QueryListTable,SpecifiedConcernList,QueryChart},
    data() {
        return {
            // queryChartData: queryChartData,
            queryData: null,
            concernList:[],
        }
    },
     methods: {
         ...mapActions(['getAllQueries']), 
        // fillData () {
        //     const chartLabels = ["May", "Jun", "July", "Aug","Sep","Oct","Nov","Dec"]
        //     const chartData = [0, 0, 0, 0, this.allQueries.length, 1, 0, 0]

        //     this.queryData = {
        //         type: "bar",
        //         data: {
        //         labels: chartLabels,
        //         datasets: [
        //             {
        //             label: "Number of Queries",
        //             data: chartData,
        //             backgroundColor: "rgba(54,73,93,.5)",
        //             borderColor: "#36495d",
        //             borderWidth: 3
        //             },
        //         ]
        //         },
        //         options: {
        //             responsive: true,
        //             lineTension: 1,
        //             scales: {
        //                 yAxes: [
        //                 {
        //                     ticks: {
        //                     beginAtZero: true,
        //                     padding: 25
        //                     }
        //                 }
        //                 ]
        //             }
        //         }
        //     }
              
        // }
    },
    mounted() {
        this.getAllQueries();
        // console.log(this.allQueries.length);
        // const ctx = document.getElementById('query-chart');
        // this.fillData();
        // new Chart(ctx, this.queryData);
    }
}
</script>

<style>

</style>