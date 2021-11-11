<template>
    <div>              
        <div class="row rounded-lg  ">
            <!-- Users box-->
            <div class="col-3 px-0">
            <div class="bg-white">
        
                <div class="bg-gray px-4 py-2 bg-light">
                    <p class="h5 mb-0 py-1">Messages</p>
                </div>
                <div class="messages-box messageContainerClass">
                    <div class="list-group rounded-0">
                        <div v-for="(student, index) in studentNumberList" :key="student">
                            <button class="list-group-item list-group-item-action rounded-0" :class="{ 'active ':isActive == student,'text-white':isActive == student}">
                                <div class="media" @click="changeStudentMessage(student)">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0" :class="{'font-weight-bold':!previewMessage[index].is_read}">{{student}}</h6>
                                            <!-- <small class="small font-weight-bold">25 Dec</small> -->
                                        </div>

                                        <p class="font-italic mb-0 text-small textLimit" :class="{'font-weight-bold':!previewMessage[index].is_read}">{{previewMessage[index].message}}</p>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <!-- <button class="list-group-item list-group-item-action rounded-0">
                            <div class="media">
                                <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">25 Dec</small>
                                </div>
                                <p class="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </button> -->
                    </div>
                </div>
            </div>
            </div>
            <!-- Chat Box-->
            <div class="col-9 px-0">
                <div class="px-4 py-5 chat-box bg-white messageContainerClass" id="messagesContainer">
                    <div v-for="message in studentMessageList" :key="message._id">
                        <!-- Sender Message-->
                        <div v-if="message.type == 'send'">
                            <div class="media w-50 mb-3">
                                <div class="media-body ml-3">
                                    <div class="bg-light rounded py-2 px-3 mb-2">
                                    <p class=" h6 mb-0 text-muted">{{message.message}}</p>
                                    </div>
                                    <!-- <p class="small text-muted">{{message.createdAt}}</p> -->
                                    <div class="row">
                                        <div class="col">
                                            <span class="text-small text-muted fontDate"><small>{{moment(message.createdAt).format("MMM Do YY")}}</small></span>
                                        </div>
                                        <div class="col text-right">
                                            <span class="text-small text-muted fontDate"><small>{{moment(message.createdAt).fromNow()}}</small></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Reciever Message-->
                        <div v-if="message.type == 'recieve'">
                            <div class="media w-50 ml-auto mb-3">
                                <div class="media-body">
                                    <div class="bg-primary rounded py-2 px-3 mb-2">
                                    <p class="text-small mb-0 text-white">{{message.message}}</p>
                                    </div>
                                    <!-- <p class="small text-muted">{{message.createdAt}}</p> -->
                                    <div class="row">
                                        <div class="col">
                                            <span class="text-small text-muted fontDate"><small>{{moment(message.createdAt).format("MMM Do YY")}}</small></span>
                                        </div>
                                        <div class="col text-right">
                                            <span class="text-small text-muted fontDate"><small>{{moment(message.createdAt).fromNow()}}</small></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if='loadingSMS'>
                        <div class="media w-50 mb-3">
                            <div class="media-body ml-3">
                                <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">{{data.tempt}}</p>
                                </div>
                                    <vueSpinner/>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="afterSend">
                            <div class="media w-50 mb-3">
                                <div class="media-body ml-3">
                                    <div class="bg-light rounded py-2 px-3 mb-2">
                                        <p class="text-small mb-0 text-muted">{{data.tempt}}</p>
                                    </div>
                                    <span><small class="fontDate">{{moment().format("MMM Do YY")}}</small></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!-- Typing area -->
                <form class="bg-light mb-5" @submit="sendMessage">
                    <div class="input-group">
                    <input type="text" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light" name="message" v-model="data.text">
                    <div class="input-group-append">
                        <button id="button-addon2" type="submit" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                    </div>
                    </div>
                </form>
        
            </div>
        </div>

        
                
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import { uuid } from 'vue-uuid';
    import Spinner from 'vue-simple-spinner';

    // import io from "socket.io-client";

    // var connectionOptions =  {
    //             "force new connection" : true,
    //             "reconnectionAttempts": "Infinity", 
    //             "timeout" : 1000,                  
    //             "transports" : ["websocket"]
    //         };

    // var socket = io.connect("http://localhost:5000",connectionOptions);

    export default {
        name:"ArchivedMessage",
        components: {
            vueSpinner: Spinner
        },
        computed:mapGetters(['allMessage','loadingSMS','studentNumberList','studentMessageList','isActive','afterSend','previewMessage']),
        data() {
            return {
                // socket: io(),
                data:{
                    text:"",
                    number:"",
                    tempt:'',
                },
                uuid: uuid.v1(),
                fillData: 0,
            }
        },
        methods: {
            ...mapActions(['getAllMessage','sentMessage','getCurrentMessage','getActive','getAfterSend','makeUnreadRead','getUnreadCurrentMessage']), 
            changeStudentMessage(number){
                this.makeUnreadRead(number);
                this.getActive(number);
                this.getCurrentMessage(number);
                this.getAfterSend(false)
                this.activate();
                this.getUnreadCurrentMessage();
            },
            sendMessage(e){
                e.preventDefault();

                if(this.data.text != ''){
                    this.data.number = this.isActive;
                    this.sentMessage(this.data)
                    this.data.tempt = this.data.text;
                    this.data.text = '';
                    this.getAfterSend(true)
                }
            
                this.scrollToEnd();
            },
            scrollToEnd: function() {    	
                var container = this.$el.querySelector("#messagesContainer");
                container.scrollTop = container.scrollHeight;
            },
            activate() {
                setTimeout(() => this.scrollToEnd(), 500);
            },
            // getRealtimeData() {
            //     socket.on("newdata", fetchedData => {
            //         console.log(this.isActive);
            //         this.getAllMessage();
            //         this.getCurrentMessage(this.isActive);
            //         this.afterSend = false;
            //     })
            // },
            loadData(){
                this.getAllMessage();
                const num = this.studentNumberList[0];
                if(this.isActive != '' || this.isActive != undefined){
                    this.makeUnreadRead(this.isActive);
                }
                this.getUnreadCurrentMessage();
                this.getCurrentMessage(num);
                this.getActive(this.studentNumberList[0])
                // this.getRealtimeData()
                this.activate();
            }
        },
        mounted() {
            this.loadData();
        },
        created() {
            // this.getRealtimeData()
            window.addEventListener('load', this.loadData)
        },
    }
</script>

<style>

    .messageContainerClass {
    height:500px;
    overflow-y: scroll;
    }

    .fontDate{
        font-size: 10px;
    }

    .textLimit {
        width:150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>