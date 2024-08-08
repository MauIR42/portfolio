
console.log("hola");

const delay = ms => new Promise( res => setTimeout(res,ms));

let actual = "None"

async function remove(obj){
    // obj.classList.toggle(current);
}

async function add(obj,word,color){
    let bar = document.getElementById("bar");
    let len = obj.textContent.length;
    for(let i =0; i<len -1;i++){
        let c_t = obj.textContent;
        obj.textContent = c_t.substring(0,c_t.length-1);
        await delay(100);        
    }
    let text = "";
    obj.style.color  = color;
    bar.style.borderColor = color;
    for(let i =0; i<word.length;i++){
        text += word[i]
        obj.textContent = text
        await delay(100);
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
    
    let curr_indx = 0;
    const interval = setInterval(()=>{
        let next = ++curr_indx % texts.length
        let text = texts[ next]['text'];
        let color = texts[next]['color'];
        add(subtitle,text,color);
    }, 5000)

}

function select(objective){
    let curr = document.getElementById(actual);
    if(curr)
        curr.classList.remove("selected");
    actual = objective + '-button';
    if(objective != 'main')
        document.getElementById(actual).classList.add("selected");
    // document.getElementById(objective).scrollIntoView({behavior:"smooth",block:"start"})
    let obj = document.getElementById(objective);
    var elementPosition = obj.getBoundingClientRect().top;
    let offset = elementPosition + window.scrollY - 100;
    window.scrollTo({
        top: offset,
        behavior: "smooth"
   });


}

window.onload = init;
