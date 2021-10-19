<template>
    <div class="notification-list">
        <NotificationMessage v-for="notification in allNotification" 
            :key="notification._id" 
            :notification="notification"/>
    </div>
</template>

<script>
    import {mapGetters,} from 'vuex';
    import NotificationMessage  from './NotificationMessage.vue';
    export default {
        name:"NotificationList",
        computed:mapGetters(['allNotification']),
        components:{
            NotificationMessage
        }
    }
</script>

<style scoped>
    .notification-list{
        position: fixed;
        bottom: 0;
        right: 0;
        margin-right: 15px;
        width: 320px;

    }
</style>