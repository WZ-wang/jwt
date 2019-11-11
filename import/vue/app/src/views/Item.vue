<template>
      <li>
          <p>{{data.title}}<span @click="isShow">{{isshow? " -":" +"}}</span></p>
            <ul v-if="data.children" v-show="isshow">
                <Item :data="item" v-for="(item,index) in data.children" :key="index">{{item.title}}</Item>
            </ul>
      </li>
</template>

<script>
export default {
    name:"Item",
    props:{
        data:Object
    },
    data(){
        return{
            isshow:false
        }
    },
    methods:{
        isShow(){
            this.isshow = !this.isshow
        }
    }
}
</script>
