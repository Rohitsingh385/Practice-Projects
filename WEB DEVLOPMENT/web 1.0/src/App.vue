<template>

<div v-show="!isEditMode" id="main-container">
        <h1>User profile</h1>
        <img :src="image" alt="image"/>

        <span>Name: </span><b id="name">{{ name }}</b>
        <hr/>
        <span>Email: </span><b id="email">{{ email }}</b>
        <hr/>
        <span>Interest: </span><b id="interest">{{ interest }}</b>
        <hr/>
        <button @click="handleEditProfile">Edit profile</button>
    </div>

    <div v-show="isEditMode" id="update-container">
        <h1>User profile</h1>
        <img :src="image"  alt="image"/>

        <span>Name: </span><input id="input-name" v-model="name"/>
        <hr/>
        <span>Email: </span><input id="input-email" v-model="email"/>
        <hr/>
        <span>Interest: </span><input id="input-interest" v-model="interest"/>
        <hr/>
        <button @click="handleUpdateProfile">Update profile</button>
    </div>

</template>

<script>
import image from './img1.jpg'
export default{
    name: 'App',

    data() {
        return {
            image: image,
            name: "Rohit Kumar",
            email: "rk301855@gmail.com",
            interest: "web dev",
            isEditMode: false,
        }
    },
    methods: {
            handleEditProfile(){
            
            this.isEditMode = true
        },
            handleUpdateProfile(){
                
            this.isEditMode = false
                
            }
    },
}
</script>

<style>
img{
    height: 300px;
    width: 300px;
    display: block;
    margin-bottom: 25px;
}

#main-container{
    width: 50%;
    margin: auto;
}
hr{
    
    margin: 20px 0;
    width: 500px;
}
button{
    cursor: pointer;
    width: 130px;
    height: 30px;
    
}
#update-container{
    width: 50%;
    margin: auto;
}

</style>