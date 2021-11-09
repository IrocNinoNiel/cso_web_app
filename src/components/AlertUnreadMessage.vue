<template>
    <div>
        <li class="nav-item dropdown no-arrow mx-1" role="presentation">
            <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-envelope fa-fw"></i><span class="badge badge-danger badge-counter" v-if="unReadMessage.length != 0">{{this.unReadMessage.length}}</span></a>
                <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                role="menu">
                    <h6 class="dropdown-header">Unread Messages</h6>
                    <div v-for="unread in unReadMessage" :key="unread._id">
                        <a class="d-flex align-items-center dropdown-item" href="/message">
                            <div class="font-weight-bold">
                                <div class="text-truncate"><span>{{unread.message}}</span></div>
                                <p class="small text-gray-500 mb-0">{{unread.student_phone}} - {{moment(unread.createdAt).fromNow()}}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
        </li>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name:'AlertUnreadMessage',
        computed:mapGetters(['unReadMessage']),
    }
</script>

<style scoped>

</style>