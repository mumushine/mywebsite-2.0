<template>
    <div id="showme">
        <div id="top"> hello！That's me.</div>
        <img src="../assets/me1.jpeg" alt=""><br>
        <a href="#/myinfo">About me</a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#showme{
    height: 450px;
    width: 380px;
    border:1px solid #000;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
#showme img{
    height: 350px;
    width: 280px;
 
}

#showme a{
    text-decoration:none;
}

#top{
    float: top;
    height: 30px;
    
}
</style>