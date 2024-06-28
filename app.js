console.log('hello vue')

const app = Vue.createApp({
    //template: '<h1>I am the template</h1>'
    data() {
        return {
            'showbooks':true,
            'title' : 'The final project',
            'author' : 'Said Abdirahman',
            'age' : '21'
        }
    },
    methods: {
        toggleShowBooks() {
            this.showbooks = !this.showbooks
        }
     
        // changeTitle(title){
        //      title = prompt('enter the title');
        //     this.title = title
        // }
    }
});

app.mount('#app')