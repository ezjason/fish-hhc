<template>
    <div class="test" id="app">
        <span class="inner"> {{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{},
        data(){
            return{
                text:'启动第一个webpack  vue'
            }
        }
    }
</script>

<style lang="less" scoped>
    .test{
        width:400px;
        height: 100px;
        background: aqua;
        display:flex;
        align-items: center;
        justify-content: center;
        transition: width 3s;
        &:hover{
            width:300px;
        }
        .inner{
            /*font-size: 37px;*/
            font-weight: bolder;
        }
    }
</style>