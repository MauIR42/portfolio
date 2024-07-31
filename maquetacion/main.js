
console.log("hola");

const delay = ms => new Promise( res => setTimeout(res,ms));

async function remove(obj){
    // obj.classList.toggle(current);
}

async function add(obj,word,color){
    let bar = document.getElementById("bar");
    console.log("entra a remove");
    let len = obj.textContent.length;
    for(let i =0; i<len -1;i++){
        let c_t = obj.textContent;
        obj.textContent = c_t.substring(0,c_t.length-1);
        console.log("espera")
        await delay(50);        
    }


    let text = "";
    obj.style.color  = color;
    bar.style.borderColor = color;
    console.log("entra a add");
    for(let i =0; i<word.length;i++){
        text += word[i]
        obj.textContent = text
        await delay(50);
    }
}


function init(){

    let texts = [
        {"text":"Fullstack developer","color":"#F8F4F9"},
        {"text":"Amateur designer","color":"#6699CC"},
        {"text":"Back-end nerd","color":"#040F16"},
        {"text":"Your next developer","color":"#5158bb"},
        // {"text":"Fullstack Developer","color":"text-white"},
        // {"text":"Fullstack Developer","color":"text-white"},
    
    ]

    let subtitle = document.getElementById("movingtext");
    
    console.log(subtitle);
    let curr_indx = 0;
    const interval = setInterval(()=>{
        let next = ++curr_indx % texts.length
        let text = texts[ next]['text'];
        console.log(text)
        let color = texts[next]['color'];
        add(subtitle,text,color);
    }, 5000)

}

window.onload = init;
