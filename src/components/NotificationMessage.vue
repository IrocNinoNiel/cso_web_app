<template>
    <div class="alert alert-dismissible fade show" :class="notification.isUnkown ? 'alert-danger' : 'alert-success'" role="alert-primary">
        <strong>{{notification.message}}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeNotif(notification.id)">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
       name:'NotificationMessage', 
       props:['notification'],
       methods:{
           ...mapActions(['deleteNotification']), 
           closeNotif(id){
               this.deleteNotification(id);
           }
       }
    }
</script>

<style scoped>

</style>