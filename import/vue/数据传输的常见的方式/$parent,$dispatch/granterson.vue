<template>
    <div>
        granterson
        <button @click="change">修改</button>
    </div>
</template>
<script>
export default {
    props:{
        counter:Number
    },
    methods:{
        change(){
           this.$dispatch("change",55)
        }
    },
}
</script>