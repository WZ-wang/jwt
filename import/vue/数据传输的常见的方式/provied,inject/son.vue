<template>
    <div>
        son--------{{counter}} -------> 
        <button @click="change">修改值</button>
        <Granterson  :counter="counter"></Granterson>
    </div>
</template>
<script>
import Granterson from "./granterson"
export default {
    // props:{
    //     counter:Number,
    // },
    inject:["counter"],
    methods:{
        change(){
            this.$emit("change",5666)
        }
    },
    components:{
        Granterson
    }
}
</script>