<template>
    <div class="main-container">
       <Header title="New App" action="Get Started" color="blue" bgColor="blue"/>

    </div>
    <div class="main-container">
       <Header title="To do list" action="Add Task"/>
    </div>
</template>

<script>
import Header from './Header.vue'
export default{
    name: 'app',
    components:{
        Header
    }
}
</script>

<style>
#app{
    text-align: center;
    margin-top: 60px;

}
.main-container{
    width: 500px;
    border: 1px solid;
    padding: 30px;
    margin: 20px auto;
}



</style>