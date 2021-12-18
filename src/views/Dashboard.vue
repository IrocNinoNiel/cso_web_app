<template>
    
  <div id="page-top">
      <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-primary p-0">
          <div class="container-fluid d-flex flex-column p-0">
            <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0 navbar-brand-main" href="#">
              <div class="sidebar-brand-icon rotate-n-15"></div>
              <div class="sidebar-brand-text mx-3"><span></span></div>
            </a>
            <hr class="sidebar-divider my-0">
            <ul class="nav navbar-nav text-light" id="accordionSidebar">
                <li class="nav-item" role="presentation"><router-link to="/" class="nav-link"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></router-link></li>
                 <li class="nav-item" role="presentation" v-show="this.userData.user_role == 'admin'">
                    <router-link to="/manageusers" class="nav-link"><i class="fas fa-users"></i><span>Manage User</span></router-link>
                </li>
                <li class="nav-item" role="presentation">
                    <router-link to="/profile" class="nav-link">
                      <i class="fas fa-user"></i><span>Profile</span>
                    </router-link>
                    <router-link to="/message" class="nav-link"><i class="icon ion-android-mail"></i><span>Messages</span></router-link>
                </li>
                <li class="nav-item" role="presentation">
                    <router-link to="/table" class="nav-link"><i class="fas fa-bars"></i><span>Student Records</span></router-link>
                    <router-link to="/reports" class="nav-link"><i class="icon ion-arrow-graph-up-right"></i><span>Reports</span></router-link>
                    <router-link to="/faq" class="nav-link"><i class="fas fa-question-circle"></i><span>FAQ's</span></router-link>
                    <router-link to="/category" class="nav-link"><i class="fas fa-book"></i><span>Category</span></router-link>
                    <a class="nav-link" v-on:click="logout"><i class="fas fa-arrow-left"></i><span>Log Out</span></a>
                </li>
              <li class="nav-item" role="presentation"></li>
              <li class="nav-item" role="presentation"></li>
            </ul>
            <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
          </div>
        </nav>
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
              <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                   <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button> 
                      <ul class="nav navbar-nav flex-nowrap ml-auto">
                        <AlertUnreadMessage/>
                        <div class="d-none d-sm-block topbar-divider"></div>
                        <li class="nav-item dropdown no-arrow" role="presentation">
                          <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="d-none d-lg-inline mr-2 text-gray-600 small">{{this.userData.first_name +' '+this.userData.last_name}}</span>
                        
                            <img src="@/assets/img/avatars/profile.jpg/" class="border rounded-circle img-profile">
                            </a>
                              <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu">
                                  <a class="dropdown-item" role="presentation" href="/profile">
                                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a>
                                  <div v-show="this.userData.user_role == 'admin'">
                                    <a class="dropdown-item" role="presentation" href="systemlog">
                                    <i class="fas fa-clipboard-check"></i>&nbsp;System Log</a>
                                  </div>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" role="presentation" v-on:click="logout">
                                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                              </div>
                          </div>
                        </li>
                      </ul>
            </div>
            </nav>
            
            <div class="container-fluid">
                <router-view/>
            </div>
            <NotificationList/>
          </div>
        <footer class="bg-white sticky-footer">
            <div class="container my-auto">
                
            </div>
        </footer>
        </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';   
import VueCookies from 'vue-cookies'
import axios from "axios";
import router from "../router"  
import {mapGetters, mapActions} from 'vuex';
import NotificationList from '../components/NotificationList.vue';
import AlertUnreadMessage from '../components/AlertUnreadMessage.vue';

// import io from "socket.io-client";
// var connectionOptions =  {
//   "force new connection" : true,
//   "reconnectionAttempts": "Infinity", 
//   "timeout" : 1000,                  
//   "transports" : ["websocket"]
// };
// var socket = io.connect("http://localhost:5000",connectionOptions);

export default {
  name: 'App',
   data() {    
            return {    
                user: {    
                    name:"",
                    type:1
                },
                // socket: io(),   
            }    
        }, 
    components:{NotificationList,AlertUnreadMessage},
    computed:mapGetters(['userData','isActive','allNotification']),
    methods: {    
      ...mapActions(['getUserData','deleteUserData','getNotification','getUnreadCurrentMessage','getAllMessage','getCurrentMessage','getAfterSend','getUnidentifiedQuery','getOtherPossibleCategory']), 
            getUserData1: function() {  
              console.log(VueCookies.get('Token'))  
                let self = this    
                axios.get("/api/users/dashboard", {headers:{
                  Authorization: VueCookies.get('Token')
                }})    
                    .then((response) => {    
                        this.getUserData(VueCookies.get('Token'));
                        // this.updateForm(this.userData);
                        // console.log(this.userData);
                        console.log(this.user.name);
                        if(!this.userData.first_name){
                          this.user.name = 'user'
                        }else {
                          this.user.name = this.userData.first_name +' '+this.userData.last_name;
                        }
                        // self.$set(this, "user", response.data.user)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/login")    
                    })    
            },
            logout: function (e) {
                if(confirm('Are you sure?')){
                  this.deleteUserData();
                  VueCookies.remove('Token')
                  router.push("/login")
                }
            },
            // getRealtimeData() {
            //   console.log('here')
            //     socket.on("newdata", fetchedData => {
            //         console.log('inside socket')
            //         this.getNotification('New Message Recieved!')
            //         this.getUnreadCurrentMessage();
                    
            //     })
            // },
        },   
    mounted () {
      console.log(this.allNotification);
      console.log('here 1')
      // Toggle the side navigation
      this.getUserData1()  
    $("#sidebarToggle, #sidebarToggleTop").on('click', function() {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      }
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      }
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });

    // Scroll to top button appear
    $(document).on('scroll', function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      e.preventDefault();
    });

    },
    created(){
      // this.getRealtimeData();
    },
    sockets: {
      connect() {
        // Fired when the socket connects.
        // this.isConnected = true;
        console.log('connected1')
      },

      disconnect() {
        // this.isConnected = false;
      },

      // Fired when the server sends something on the "messageChannel" channel.
      messageChannel(data) {
        console.log(data);
        // this.socketMessage = data
      },
      onNewMessage(){
        console.log('new message')
      },
      newdata(data){
        console.log(data);
        this.getNotification(data)
        this.getAllMessage();
        this.getUnidentifiedQuery();
        this.getUnreadCurrentMessage();
        this.getOtherPossibleCategory();
        if(this.isActive != '' || this.isActive != undefined){
          this.getCurrentMessage(this.isActive);
        }
        this.getAfterSend(false);
        console.log(this.allNotification);
      },
      newSMSFromOfficer(){
        if(this.isActive != ''){
          this.getCurrentMessage(this.isActive);
        }
        this.getAfterSend(false);
      },
    },
}
</script>

<style>

</style>
