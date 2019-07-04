let num=6;
// let cc=document.querySelectorAll(".box");
let textDisplay=document.getElementById("display");
let sq=document.getElementsByClassName("box");
let result=document.getElementById("result");
let headd=document.getElementById("headd");
let rst=document.getElementById("reset");
let easy=document.getElementById("easy");
let hard=document.getElementById("hard");

const eassy=()=>
{
    easy.classList.add("highlight");
    hard.classList.remove("highlight");
    num=3; 
 colors=randomColor(num);
 randomPick=colors[pick()];
textDisplay.textContent=randomPick;
    for(let i=0;i<sq.length;i++)
    {
        if(i<num){
        sq[i].style.background=colors[i];
        console.log(colors[i]);
        }
        else{
            sq[i].style.display="none"
        }
    }    

}

easy.addEventListener("click",eassy);


const harrd=()=>
{
    easy.classList.remove("highlight");
    hard.classList.add("highlight");
     num=6;
     colors=randomColor(num);
     randomPick=colors[pick()];
    textDisplay.textContent=randomPick;
    
        for(let i=0;i<sq.length;i++)
        {
           
            sq[i].style.background=colors[i];
            
                sq[i].style.display="block"; 
        }   
}
hard.addEventListener("click",harrd);


 //random color for box
 const ranColor=()=>
 {
     let r= Math.floor(Math.random()*255+1);
     let g= Math.floor(Math.random()*255+1);
     let b= Math.floor(Math.random()*255+1);
 
     return "rgb("+r+", "+g+", "+b+")" ;
 }

 const randomColor=(x)=>
 {
     let arr=[];
     for(let i=0;i<x;i++)
     { 
         arr.push(ranColor());
     }
    return arr;
 };
  colors=randomColor(6);
 
// random pick of colors
const pick=()=>
{
    return Math.floor(Math.random()*colors.length);

};
var randomPick=colors[pick()];
textDisplay.textContent=randomPick;


//reset funcion
const reset=()=>
{  
    console.log("sd");
 colors=randomColor(num);
 randomPick=colors[pick()];
console.log(randomPick,"rrc")
textDisplay.textContent=randomPick;

    for(let i=0;i<sq.length;i++)
    {
        // randon colors assign
        sq[i].style.background=colors[i];
        console.log(colors[i])
        
    }    

    headd.style.background="#2a1df1";



    
}
rst.addEventListener("click",reset);

    
    const correct=()=>
    {
        for(let i=0;i<sq.length;i++)
        {
            // randon colors assign
            sq[i].classList.add("fade");

            sq[i].style.background=randomPick;
            
        }
    };

    //choosing the color

    

    for(let i=0;i<sq.length;i++)
    {
        // randon colors assign
    
        sq[i].style.background=colors[i];
        sq[i].addEventListener("click",function(){
          
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












