<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-body">
                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">Recent Messages</p>
                    </div>
                    <div class="messages-box messageContainerClass">
                        <div class="list-group rounded-0">
                            <div v-for="current in getUnreadMessage" :key="current._id">
                                <!-- active text-white -->
                                <a class="list-group-item list-group-item-action rounded-0" :class="{'bg-primary':!current.is_read}">
                                    <div class="media">
                                        <div class="media-body ml-4">
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <h6 class="mb-0" v-if="current.student_id != null">
                                                    <h6 class="mb-0" :class="{'font-weight-bold':!current.is_read,'text-white':!current.is_read}">{{current.student_phone}}</h6>
                                                </h6>
                                                <h6 class="mb-0" v-else>
                                                    <h6 class="mb-0" :class="{'font-weight-bold':!current.is_read,'text-white':!current.is_read}">{{current.student_phone}}</h6>
                                                </h6>
                                                <small class="small font-weight-bold">{{moment(current.createdAt).format("MMM Do")}}</small>
                                            </div>
                                            
                                            <p class="font-italic mb-0 text-small textLimit" :class="{'font-weight-bold':!current.is_read,'text-white':!current.is_read}">{{current.message}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    // import io from "socket.io-client";

    // var connectionOptions =  {
    //             "force new connection" : true,
    //             "reconnectionAttempts": "Infinity", 
    //             "timeout" : 1000,                  
    //             "transports" : ["websocket"]
    //         };

    // var socket = io.connect("http://localhost:5000",connectionOptions);

    export default {
        name:'DashboardMessage',
        computed:mapGetters(['getUnreadMessage']),
        data(){
            return{
                // socket: io(),
            }
        },
        methods: {
            ...mapActions(['getUnreadCurrentMessage']), 
            // getRealtimeData() {
            //     socket.on("newdata", fetchedData => {
            //         console.log('inside socket')
            //         this.getUnreadCurrentMessage();
                    
            //     })
            // },
        },
        created(){
            // this.getRealtimeData();
            // this.getUnreadCurrentMessage();
            window.addEventListener('load', this.getUnreadCurrentMessage())
        }
    }
</script>

<style scoped>
    .messageContainerClass {
        height:300px;
        overflow-y: scroll;
    }

    .textLimit {
        width:150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>