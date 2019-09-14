var app = new Vue({
    el:'#app',
    data:{
        newItem:'',
        todos:[]
    },
    methods:{
        addClick:function(event){
            //alert();
            var todo =  {
                item:this.newItem,
                isDone:false
            };

            // var todo = this.newItem
            if(this.newItem != ""){
                this.todos.push(todo)
            }

            this.newItem = ""
        },
        deleteClick:function(index){
            this.todos.splice(index,1)
        }
    }
})
