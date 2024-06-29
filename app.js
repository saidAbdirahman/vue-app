console.log('hello vue')

const app = Vue.createApp({
    //template: '<h1>I am the template</h1>'
    data() {
        return {
            url: 'http://www.thesaidninja.co.so',
            'showbooks':true,
           books: [
            {title: 'jecyl' ,author: 'Said abdiirahman', img: 'assets/1.jpg', isfav : true},
            {title: 'Hogamiye saxda ah' ,author: 'Eng Masoud',  img: 'assets/2.jpg', isfav : false},
            {title: 'Hayanka Noslaha' ,author: 'Said abdiirahman',  img: 'assets/3.jpg', isfav : true}
           ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showbooks = !this.showbooks
        }, 
        togglebook(book) {
           book.isfav =  !book.isfav;
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
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isfav)
        }
    }
});

app.mount('#app')