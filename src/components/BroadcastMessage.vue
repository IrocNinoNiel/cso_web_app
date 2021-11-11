<template>
    <div>
       <div class="broadcastinput">
           <form action="#" class="bg-light">
                <div class="input-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <div class="input-group-append">
                        <button id="button-addon2" type="submit" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                    </div>
                </div>
            </form>
       </div>
       <p class="mt-3">
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Filters
            </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                  <div class="row mt-3">
                        <div class="col">
                            <ul class="">
                                <li class="list-group-item"><input type="checkbox">All Schools</li>
                                <li class="list-group-item"><input type="checkbox">Cagayan De Oro College</li>
                                <li class="list-group-item"><input type="checkbox">University Of Science and Technology of Southern Philippines</li>
                                <li class="list-group-item"><input type="checkbox">Xavier University</li>
                            </ul>
                        </div>
                        <div class="col">
                            <ul>
                                <li class="list-group-item"><input type="checkbox">All Courses</li>
                                <li class="list-group-item"><input type="checkbox">BSIT</li>
                                <li class="list-group-item"><input type="checkbox">BS CHEM</li>
                                <li class="list-group-item"><input type="checkbox">BS EE</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name:"BroadcastMessage",
        
    }
</script>

<style>

</style>