<template>
    <header>
       <h1 :style="{ color: color }">{{ title }}</h1>
       <button @click="handleClick()" :style="{ background: bgColor}" class="btn">{{ action }}</button>
    </header>
</template>

<script>
export default{
    name: "Header",
    props:{
        title: String,
        action: String,
        color: String,
        bgColor: String
    },
    methods: {
        handleClick(){
            console.log("clicked success")
        }
    },
}
</script>

<style>
    .btn{
    height: 30px;
    width: 100px;
    background-color: yellowgreen;
    border-radius: 5px;
}
h1{
        color: "green";
}
</style>