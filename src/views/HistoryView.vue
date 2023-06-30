<template>
    <div id="HistoryView">
        <h1>Componente HistoryView</h1>
        <div v-bind:class="[backStyle? backGround : normal]">
            <h2>Nuestra Historia</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae iste dolorum laborum, error distinctio libero eligendi iusto assumenda eum natus reiciendis! Velit deleniti beatae mollitia esse eveniet eos incidunt?</p>
        </div>
    </div>
</template>

<script>
export default{
    name:'HistoryView',
    props:{
        backStyle:{
            type:Boolean,
            default:false,
        }
    },
    data:function(){
        return{
            normal:'normal',
            backGround:'backGround',
        }
    },
    methods:{

    }
}
</script>

<style scoped>
#HistoryView{
    background-color: moccasin;
}

.normal{
    border: 2px solid red;
    width: 60%;
    margin: 0 auto;
}

.backGround{
    border: 2px solid green;
    width: 60%;
    margin: 0 auto;
    background-color: gray;
    color: blue;
}
</style>