<template>
    <div class="home">
        <div class="row">
            <div class="col">
                <div class="container-fluid">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 class="text-dark mb-0">Dashboard</h3>
            </div>
            <!-- <div class="row">
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow border-left-primary py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Frequently asked questions</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span></span></div>
                                </div>
                                <div class="col-auto"><i class="fas fa-question-circle fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow border-left-success py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-success font-weight-bold text-xs mb-1"><span>UNREAD QUERIES</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span>12</span></div>
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
                                    <div class="text-uppercase text-warning font-weight-bold text-xs mb-1"><span>TOTAL ACTIVE SCHOLAR STUDENTS</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span>4105</span></div>
                                </div>
                                <div class="col-auto"><i class="icon ion-person-stalker fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            
            <div class="mb-5">
                <QueryChart :allQueries="this.allQueries"/>
            </div>
            <div class="row">
                <div class="col-4">
                    <SpecifiedConcernList :specifiedConcernListData="this.allQueries"/>
                </div>
                <div class="col text-left">
                    <QueryListTable :queryTableList="this.allQueries"/>
                </div>
            </div>

        </div>
            </div>
        </div>
    </div>
</template>

<script>

import Chart from 'chart.js'
import {mapActions, mapGetters} from 'vuex';

import QueryListTable from '../components/QueryListTable.vue';
import SpecifiedConcernList from '../components/SpecifiedConcernList.vue';
import QueryChart from '../components/QueryChart.vue';

export default {
    name: 'Home',
    computed:mapGetters(['allQueries']),
    components:{QueryListTable,SpecifiedConcernList,QueryChart},

    methods: {
        ...mapActions(['getAllQueries']), 
    },
    mounted() {
        this.getAllQueries();
        console.log(this.allQueries);
    }
}
</script>

<style>

</style>