// creo costante da Vue
const {createApp} = Vue

createApp({
    data(){
        return {
            Title: "Vue Hello!",
            titleImage: "img/img.jpg",
            radiusImg: "image",
            textCenter: "text",
            message: "",
            textCol: "black"
        }
    },
    methods: {
        changeTitle(){
            this.Title = this.Title === "Vue Hello!" ?  "Benvenuto" : "Vue Hello!"
        },
        changeCol(){
            this.textCol = this.textCol === "red" ? "black" : "red"
        }
    },
}).mount("#app")


