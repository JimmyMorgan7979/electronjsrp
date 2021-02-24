const ipc = require('electron').ipcRenderer;
const fs = require('fs');

let count = 0;
let rawdata = fs.readFileSync('count.json');
let student = JSON.parse(rawdata);
count = student.count
document.getElementById('click-counter').innerHTML = count




document.getElementById('countbtn').onclick = function(){
    count ++;
    document.getElementById('click-counter').innerHTML = count;
    console.log(count);
    let data = `{"count":"${count}"}`
    fs.writeFileSync('count.json', data);

// THIS IS THE MAGIC LINE THAT SENDS THE COUNT BACK TO MAIN
//'getCount' is what ive named the 'signal' that gets transmitted, the receiver in the main must be named the same
    ipc.send('getCount',count)
    }


    // This is a listener that will receive a 'message' from main
ipc.on('countreply',(event,args)=>{
    reply.innerHTML = args;
})

