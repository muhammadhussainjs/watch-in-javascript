//const arr = [1, 2, 3, 4, 5]
// const array = arr.reduce((shuru , end)  => {
//     return shuru * end
// },0 )
// console.log(array);



const seconddiv = document.querySelector('#seconddiv')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let second = 0
let minute = 0
let hour = 0
let interval;

start.addEventListener('click' , () => {
   interval = setInterval (() => {
    second  += 1
    if(second === 60){
        second = 0
        minute += 1
    }
       else if(minute === 60){
        minute = 0
        hour += 1
       }
       else if (hour === 24) {
        clearInterval(interval)
        second = 0 
        minute = 0
        hour = 0
       }
    seconddiv.innerHTML = `${hour} : ${minute} : ${second} `
   } , 1000)
   start.disabled = true
    

})

stop.addEventListener('click' , () =>{
    clearInterval(interval)
    start.disabled = false
    
})

reset.addEventListener('click' , () => {
    clearInterval(interval)
    second = 0
    minute = 0
    hour = 0
    seconddiv.innerHTML = 0

    start.disabled = false
    
})


























const showStop = setInterval(() => {
       console.log('hello world');
}, 1000)



clearInterval(showStop)
