<template>
    <div>
        <h1>404 - PAGE NOT FOUND</h1>
        <vs-button 
            @click="$router.push({name: 'Home'})"
            style="margin-top: 30px;">
            Go To Homepage
        </vs-button>
    </div>
</template>