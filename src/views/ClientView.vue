<template>
    <div id="ClientView">
        <h1>Componente ClientView</h1>
        <h3>Bienvenido Cliente {{  client }}</h3>
    </div>
</template>

<script>
export default{
    name:'ClientView',
    props:['client'],
    data:function(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped>
#ClientView{
    background-color: lightseagreen;
}
</style>