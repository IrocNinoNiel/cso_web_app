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
                            <a class="list-group-item list-group-item-action active text-white rounded-0">
                                <div class="media">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jason Doe</h6>
                                            <small class="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p class="font-italic mb-0 text-small">When is our grades due?</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">631928476891</h6><small class="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">631928476891</h6><small class="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">631928476891</h6><small class="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">631928476891</h6><small class="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'DashboardMessage'
    }
</script>

<style scoped>
.messageContainerClass {
  height:300px;
  overflow-y: scroll;
}
</style>