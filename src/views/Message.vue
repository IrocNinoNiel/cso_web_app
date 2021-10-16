<template>
    <div>
        <div class="card shadow">
            <div class="card-header py-3">                
                <button class="btn btn-primary" type="button" style="margin-top: 0px;margin-right: 0px;margin-bottom: 0px;padding-top: 6px;padding-bottom: 6px;padding-left: 12px;">Chat Bot messages</button>
            </div>
            <div class="card-body">
                <ArchivedMessage/>
            </div>
        </div>    
    </div>
</template>

<script>

import ArchivedMessage from './ArchivedMessage.vue'
export default {
    name:'Message',
    components:{ArchivedMessage}
}
</script>

<style>

</style>