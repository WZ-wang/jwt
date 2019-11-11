<template>
    <div>
        fatheer----->{{counter}}
        <!-- <Son :counter="counter" @change="changeValue"></Son> -->
        <!-- 简写：:counter.sync="counter" 等同于<Son :counter="counter" @change="changeValue"></Son> 
        且changeValue也不用写 son里面接收时需要写成 this.$emit("update:counter",100) 固定写法。
        还有一个v-model简写类似 值固定是value emit是input-->
        <Son :counter.sync="counter" ></Son> 
    </div>
</template>
<script>
import Son from "./son"
export default {
    data(){
        return {
            counter:0
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