<template>
    <div class="home">
        <div class="row">
            <div class="col">
                <div class="container-fluid">
                    <div class="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 class="text-dark mb-0">Student Query</h3>
                    </div>
                    
                    <div class="row">
                        <div class="col col-8">
                           <div class="row mr-2">
                                <DashboardIdentifiedQueryTable/>
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
                                    <h3 class="text-dark mb-0">Unknown Query</h3>
                                </div>
                                <DashboardUnknownQueryList/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <UnidentifiedQueryList/>
                            </div>
                            <div class="row mt-5">
                                <UnidentifiedNumberQueryList/>
                            </div>
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
import DashboardIdentifiedQueryTable from '../components/DashboardIdentifiedQueryTable.vue';
import UnidentifiedNumberQueryList from '../components/UnidentifiedNumberQueryList.vue';
import DashboardUnknownQueryList from '../components/DashboardUnknownQueryList.vue'

export default {
    name: 'Home',
    computed:mapGetters(['allQueries']),
    components:{QueryListTable,SpecifiedConcernList,QueryChart,DashboardMessage,UnidentifiedQueryList,DashboardUnidentifiedChart,DashboardUnidentifiedQueryTable,DashboardIdentifiedQueryTable,UnidentifiedNumberQueryList,DashboardUnknownQueryList},

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