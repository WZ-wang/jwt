<template>
    <div>
        fatheer----->{{counter}}
        <Son  @change="changeValue"></Son>
    </div>
</template>
<script>
import Son from "./son"
export default {
    data(){
        return {
            counter:10,
            money:555
        }
    },
    provide(){
        return{
            counter:this.counter
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