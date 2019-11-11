<template>
    <div>
        son--------{{counter}}
        <button @click="change">修改值</button>
        <Granterson></Granterson>
    </div>
</template>
<script>
import Granterson from "./granterson"
export default {
    props:{
        counter:Number
    },
    methods:{
        change(){
            this.$emit("change",100)
            // this.$emit("update:counter",100)
        }
    },
    components:{
        Granterson
    }
}
</script>