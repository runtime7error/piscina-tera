<template>
<headerComponent></headerComponent>
<tabPanel></tabPanel>
</template>

<script>
import headerComponent from './components/header.vue'
import tabPanel from './components/tabPanel.vue'

export default {
    name: 'App',
    components: {
        headerComponent,
        tabPanel
    },
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}
</script>
