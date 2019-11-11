<template>
    <div>
        son--------{{counter}} -------> {{$attrs.money}}
        <button @click="change">修改值</button>
        <Granterson  :counter="counter"></Granterson>
    </div>
</template>
<script>
import Granterson from "./granterson"
export default {
    props:{
        counter:Number,
    },
    methods:{
        change(){
            this.$listeners.change(222)
        }
    },
    components:{
        Granterson
    }
}
</script>