<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from "./todo/header.vue"
    import Footer from "./todo/footer.jsx"
    import Todo from "./todo/todo.vue"
    export default {
        components:{
            Header,Footer,Todo
        }
    }
</script>

<style lang="stylus" scoped>
    #app {
        position absolute
        top 0
        left 0
        bottom 0
        right 0

    }
    #cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom:0;
        background: #2ac845;
        opacity: 0.3;
        z-index: -1;
    }
</style>