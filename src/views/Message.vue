<template>
    <div>
        <div class="card shadow">
            <div class="card-header py-3">                 
                <button class="btn btn-primary" @click='toggle = !toggle' type="button" style="margin-top: 0px;margin-right: 0px;margin-bottom: 0px;padding-top: 6px;padding-bottom: 6px;padding-left: 12px;">
                    <p v-if="toggle" class="mt-2">Broadcast Message</p>
                    <p v-else class="mt-2">Direct Message</p>
                </button>
            </div>
            <div class="card-body" v-show="toggle">
                <ArchivedMessage/>
            </div>
            <div class="card-body" v-show="!toggle">
                <BroadcastMessage/>
            </div>
        </div>    
    </div>
</template>

<script>

import ArchivedMessage from './ArchivedMessage.vue'
import BroadcastMessage from '../components/BroadcastMessage.vue'
export default {
    name:'Message',
    components:{ArchivedMessage,BroadcastMessage},
    data () {
        return {
            toggle: true
        }
    },
}
</script>

<style>

</style>