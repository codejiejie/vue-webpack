<template>
    <section class="real-app">
        <input
                type="text"
                class="add-input"
                autofocus="autofocus"
                placeholder="接下去干什么?"
                @keyup.enter="addTodo"
        >
        <Items
                :todo="todo"
                v-for="todo in filteredTodos"
                :key="todo.id"
                @del="deleteTodo"
        />
        <Tabs
                :filter="filter"
                :todos="todos"
                @toggle="toggleFilter"
                @clearAllCompleted="clearAllCompleted"
        />
    </section>
</template>

<script>
    import Items from "./items.vue"
    import Tabs from "./tabs.vue"
    let id = 0;
    export default {
        data(){
            return {

                todos:[],
                filter:"all"
            }

        },
        components:{
            Items,Tabs
        },
        computed:{
            filteredTodos(){
                if(this.filter === "all") {
                    return this.todos
                }
                const completed = this.filter === "completed";
                return this.todos.filter(todo => completed === todo.completed)
            }
        },

        methods: {
            addTodo(e){
                this.todos.unshift({
                    id:id++,
                    content:e.target.value.trim(),
                    completed:false
                })
                content:e.target.value=""
            },
            deleteTodo(id){
                this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
            },
            toggleFilter(state){
                this.filter=state
            },
            clearAllCompleted(){
                this.todos=this.todos.filter( todo => !todo.completed)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .real-app{
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }
    .add-input{
        position: relative;
        height: 40px;
        padding:0 50px ;
        font-size: 30px;
        width: 496px ;
    }
</style>