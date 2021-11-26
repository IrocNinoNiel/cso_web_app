<template>
    <div>
       <h1>Student Concern Table</h1>
        <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-striped table-bordered table-hover">
                <thead class="thead-dark">
                    <h1></h1>
                    <tr>
                      
                        <th>Phone Number</th>
                        <th>Query</th>
                        <th>Concern</th>
                         <th>Possible Answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>
                           <button type="button" class="btn" data-toggle="modal" data-target="#infoConcern">09384756121 </button>
                       </td>
                        <td>When is the allowance</td>
                        <td>Allowance</td>
                        <td>TBA</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DashboardUnidentifiedQueryTable',
}
</script>

<style>
.my-custom-scrollbar {
    position: relative;
    height: 1000px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}
</style>