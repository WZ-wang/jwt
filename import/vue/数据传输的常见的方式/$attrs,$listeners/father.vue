<template>
    <div>
        fatheer----->{{counter}}
        <Son :money="money" :counter="counter" @change="changeValue"></Son>
    </div>
</template>
<script>
import Son from "./son"
export default {
    data(){
        return {
            counter:0,
            money:555
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