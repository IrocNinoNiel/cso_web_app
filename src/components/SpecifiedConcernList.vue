<template>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="text-primary font-weight-bold m-0">Specified Concerns</h6>
            </div>
            <div class="card-body">
                <h4 class="small font-weight-bold">Others<span class="float-right">8</span></h4>
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
</template>

<script>
    export default {
        name:'SpecifiedConcernList',
        props: ['specifiedConcernListData']
        
    }
</script>

<style>

</style>