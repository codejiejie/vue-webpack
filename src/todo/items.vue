<template>
    <div :class="['todo-item',todo.completed ? 'completed' : '']">
        <input
                type="checkbox"
                class="toggle"
                v-model="todo.completed"

        >
        <label>
            {{todo.content}}
        </label>
        <button class="destory" @click="deleteTodo"></button>
    </div>
</template>

<script>
    export default {
        props:{
            todo:{
                type:Object,
                required:true
            }
        },
        methods:{
            deleteTodo(){
                this.$emit("del",this.todo.id)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .todo-item{
        position: relative;
        font-size: 24px;
        /*background: red;*/
        border-bottom: 1px solid rgba(0,0,0,.6);
    &:hover{
    .destory:after{
        content:"x"
    }
    }

    label{
        white-space: pre-line;
        word-break: break-all;
        padding:0px 60px 15px 15px;
        margin-left: 100px;
        line-height: 1.2;
        /*transition:color 0.4s;*/
        display: block;
        /*text-align: center;*/
    }
    &.completed{
    label{
        color: #000;
        text-decoration: line-through;

    }
    }

    }
    .toggle{
        border: none;
        width: 40px;
        height: 40px;
        /*background: #fff;*/
        border-radius: 50%;
        text-align: center;
        position: absolute;
        top: 0;
        bottom:0;
        margin: auto 0 ;
        appearance:none;
        outline: none;

    &:after{
         content: url("../assets/images/circle.svg");
     }
    &:checked:after{
         line-height: 66px;
         content: url("../assets/images/done.svg");
     }
    }
    .destory{
        position: absolute;
        top: 0;
        bottom: 0;
        right:10px;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: red;
        transition:color 4s ease-out ;
        appearance:none;
        border-width:0 ;
        outline: none;
        background-color: transparent;
    }
</style>