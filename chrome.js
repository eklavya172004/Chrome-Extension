
const inputbtn = document.getElementById("input-btn");

let myleads = [];
// myleads = JSON.parse(myleads);
// myleads.push("www.eklavya.com");

// myleads = JSON.stringify(myleads);
// console.log(typeof myleads);

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deletebtn = document.getElementById("input-delete");
const tabbtn = document.getElementById("input-tab");
// localStorage.setItem("myleads","www.eklavya172004.com");
// console.log(localStorage.getItem("myleads"));
// localStorage.clear();
// console.log(localStorage.getItem("myleads"));

const leadsfromlocalstorage =  JSON.parse(localStorage.getItem("myleads"));
// console.log(leadsfromlocalstorage);
if(leadsfromlocalstorage ){
    myleads = leadsfromlocalstorage;
    render(myleads);    
}

function render(leads){
    let listitems = "";
    for(let i=0; i<leads.length; i++){
        listitems += ` <li><a href='${leads[i]}' target='_blank'>
         ${leads[i]} 
        </a></li>`; 
    }
    ulEl.innerHTML = listitems;
}

tabbtn.addEventListener("click", function(){  
      
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads", JSON.stringify(myleads) )
        render(myleads);
    })
    inputEl.value = "";
})

inputbtn.addEventListener("click",function(){

    myleads.push(inputEl.value);
    inputEl.value = ""; //clear out input field
    localStorage.setItem("myleads",JSON.stringify(myleads));

    // myleads = JSON.parse(myleads);

    console.log(localStorage.getItem("myleads"));
    render(myleads);
})

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myleads = [];
    render(myleads);
    ulEl.innerHTML = "";
    inputEl.value = "";
})

