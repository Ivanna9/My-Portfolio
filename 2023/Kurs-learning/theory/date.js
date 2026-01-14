

// const start = new Date (1000 *60 * 60* 24 *365)

// const date = new Date (2019,0,11) 
// //console.log(date)

// console.log(now.getFullYear())
// console.log(now.getMonth ())
// console.log(now.getDate())
// console.log(now.getHours())

// now.setFullYear(2079)
// console.log(date)

// console.log(now.toDateString())
// console.log(now.toTimeString())

//================

//const now = new Date()

let mode ='full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
// update()

function bindMode(name) {
    return function () {
        mode = name
        update ()
    }
}

fullBtn.onclick = bindMode ('full')
dateBtn.onclick = bindMode ('date')
timeBtn.onclick = bindMode ('time')

setInterval(update, 1000)
function update (){
    output.textContent = format(mode)
}

//pure function
function format(formatMode) {

    const now = new Date ()
    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString ()
        case 'date':
            return now.toLocaleDateString ()
        case 'full':
             return now.toLocaleDateString () + ' '+ now.toLocaleTimeString ()
        default:
                return now.toLocaleTimeString ()
                                
    }

}