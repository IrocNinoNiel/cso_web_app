<template>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{{notification.message}}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeNotif(notification.id)">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
       name:'NotificationMessage', 
       computed:mapGetters(['allNotification']),
       props:['notification'],
       methods:{
           ...mapActions(['deleteNotification']), 
           closeNotif(id){
               this.deleteNotification(id);
               console.log(this.allNotification);
           }
       }
    }
</script>

<style scoped>

</style>