// creo costante da Vue
const {createApp} = Vue

createApp({
    data(){
        return {
            Title: "Vue Hello!",
            titleImage: "img/img.jpg"
        }
    }
}).mount("#app")



