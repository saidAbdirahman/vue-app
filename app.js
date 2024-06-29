console.log('hello vue')

const app = Vue.createApp({
    //template: '<h1>I am the template</h1>'
    data() {
        return {
            'showbooks':true,
            'title' : 'The final project',
            'author' : 'Said Abdirahman',
            'age' : '21',
            x : 0,
            y:0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showbooks = !this.showbooks
        }, 
        
        handleEvent(e,data) {
            console.log(e,e.type);
            if(dat){
                console.log(data)
            }
        },
        Event(){
            console.log('hi');
            document.writeln('hi')
        },

        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
        // changeTitle(title){
        //      title = prompt('enter the title');
        //     this.title = title
        // }
,
    }
});

app.mount('#app')