var num=6;
let colors=[];
let textDisplay=document.getElementById("display");
let sq=document.getElementsByClassName("box");
let result=document.getElementById("result");
let headd=document.getElementById("headd");
let rst=document.getElementById("reset");
let easy=document.getElementById("easy");
let hard=document.getElementById("hard");
let ch=document.querySelectorAll(".choice");
hard.classList.add("highlight");

//random color for box
const ranColor=()=>
{
    let r= Math.floor(Math.random()*255+1);
    let g= Math.floor(Math.random()*255+1);
    let b= Math.floor(Math.random()*255+1);
    return "rgb("+r+", "+g+", "+b+")" ;
}

// random pick of colors
const pick=()=>
{
   return Math.floor(Math.random()*colors.length);

};
var randomPick=colors[pick()];
textDisplay.textContent=randomPick;

//picks random color assign to color array
const randomColor=(x)=>
{
    let arr=[];
    for(let i=0;i<x;i++)
    { 
        arr.push(ranColor());
    }
   return arr;
};
 colors=randomColor(num);

 //fills box with color background
function assign()
{ headd.style.background="#2a1df1"
    colors=randomColor(num);
     randomPick=colors[pick()];
    textDisplay.textContent=randomPick;
    for(let i=0;i<sq.length;i++)
        {
            if(i<num){
            sq[i].style.background=colors[i];
            sq[i].style.display="block";
            }
            else{
                sq[i].style.display="none"
            }
        }    

}

//reset or playAgainbutton
const reset=()=>
{  headd.style.background="#2a1df1";
   assign();
    
}
rst.addEventListener("click",reset);

//After validate apply to box
const correct=()=>
    {
        for(let i=0;i<sq.length;i++)
        {
            // randon colors assign
            sq[i].classList.add("fade");

            sq[i].style.background=randomPick;
            
        }
    };

    //checks for mode easy or hard
    const setup=()=>
    {
        for(let i=0;i<ch.length;i++)
    {  
        ch[i].addEventListener("click",
        function(){
            console.log("ch",ch[i]);
            easy.classList.remove("highlight");
            hard.classList.remove("highlight");
            this.classList.add("highlight");
             this.textContent==="easy"? num=3:num=6;
             assign();

        });
    }
    }

    //click box correct or not
 const validity=()=>
 {
    for(let i=0;i<sq.length;i++)
    {
        // randon colors assign
        sq[i].addEventListener("click",
        function(){
            if(randomPick===this.style.background)
            {  
                result.textContent="Correct";
                correct();
                headd.style.background=randomPick;
            }
                  else{
                result.textContent="InCorrect";
                this.classList.add("fade");
                this.style.background="grey";    
            }
        });
    }
 }

 //initial method 
function init()
{
   setup();   
   validity();
   reset();

}
init();






    

  










