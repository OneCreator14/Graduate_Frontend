<template>
   <div class="wrapper">
     <h3 class="block">Создание заявления</h3>
     <div class="back">
 
     </div>
 
   </div>
 </template>
 
 <script setup>
 </script>
 
 <style lang="scss" scoped>
 .wrapper{
   background: var(--background-secondary);
   padding: 30px;
 }
 
 .block{
   position: relative;
   z-index: 2;
   background: var(--background-primary);
   line-height: 30px;  
   margin: 0;
   padding: 15px;
   width: fit-content;
   border-radius: 7px 7px 0 0;
   box-shadow: 0px -5px 5px 1px rgba(0, 0, 0, 0.1);
   background: var(--background-primary);
 }
 
 .back{
   z-index: 1;
   background: var(--background-primary);
   margin-top: -5px;
   width: 1200px;
   height: 600px;
   border-radius: 7px;
   box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
 }
 </style>