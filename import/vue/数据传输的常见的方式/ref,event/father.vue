<template>
    <div>
        fatheer----->{{counter}}
        <!-- 如果click相当原生事件用只需加个native -->
        <Son ref="son"  :counter="counter"  @change="changeValue"></Son>
    </div>
</template>
<script>
import Son from "./son"
export default {
    mounted(){
        this.$refs.son.change()
    },
    data(){
        return {
            counter:10,
        }
    },
    methods:{
        changeValue(newValue){
            this.counter = newValue
        }
    },
    components:{
        Son
    }
}
</script>