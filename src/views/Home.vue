<template>
    <div class="home">
        <div class="row">
            <div class="col">
                <div class="container-fluid">
                    <div class="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 class="text-dark mb-0">Categorized Student Query</h3>
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
                    
                    <div class="row">
                        <div class="col col-8">
                            <!-- <div class="row">
                                <div class="col">
                                    <QueryChart/>
                                </div>
                            </div>
                            <div class="row mr-2">
                                <QueryListTable/>
                            </div> -->

                           <div class="row mr-2">
                                <DashboardUnidentifiedQueryTable/>
                            </div>
                            <hr>
                            <div class="row mr-2 mt-5">
                                <div class="d-sm-flex justify-content-between align-items-center mb-4">
                                    <h3 class="text-dark mb-0">Uncategorized Student Query</h3>
                                </div>
                                <DashboardUnidentifiedQueryTable/>
                            </div>
                            <hr>
                            <div class="row mr-2 mt-5">
                                <div class="d-sm-flex justify-content-between align-items-center mb-4">
                                    <h3 class="text-dark mb-0">Unidentified Inquirer Query</h3>
                                </div>
                                <DashboardUnidentifiedQueryTable/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <UnidentifiedQueryList/>
                            </div>
                            <div class="row mt-5">
                                <UnidentifiedQueryList/>
                            </div>
                            <!-- <div class="row mt-2">
                                <DashboardMessage/>
                            </div> -->
                        </div>
                    </div>
                    <!-- <div class="mb-5">
                        <div class="row">
                            <QueryChart/>
                            <div class="col">
                                <UnidentifiedQueryList/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-left">
                            <QueryListTable/>
                        </div>
                        <div class="col-4">
                            <div class="">
                                <DashboardMessage/>
                            </div>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import DashboardMessage from '../components/DashboardMessage.vue'
import QueryListTable from '../components/QueryListTable.vue';
import SpecifiedConcernList from '../components/SpecifiedConcernList.vue';
import QueryChart from '../components/QueryChart.vue';
import UnidentifiedQueryList from '../components/UnidentifiedQueryList.vue'
import DashboardUnidentifiedChart from '../components/DashboardUnidentifiedChart.vue'
import DashboardUnidentifiedQueryTable from '../components/DashboardUnidentifiedQueryTable.vue'

export default {
    name: 'Home',
    computed:mapGetters(['allQueries']),
    components:{QueryListTable,SpecifiedConcernList,QueryChart,DashboardMessage,UnidentifiedQueryList,DashboardUnidentifiedChart,DashboardUnidentifiedQueryTable},

    methods: {
        ...mapActions(['getAllQueries']), 
    },
    mounted() {
        this.getAllQueries();
    }
}
</script>

<style>

</style>