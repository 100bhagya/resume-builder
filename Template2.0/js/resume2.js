const skill_button=document.querySelector("#b_button");
const internship_button=document.querySelector("#in_button");
const ed_button=document.querySelector("#ed_button");
const project_button=document.querySelector("#project_button");
const responsibility_button=document.querySelector("#respon_button");
const achieve_button=document.querySelector("#ah_button");




skill_button.addEventListener("click",funct= ()=>{

  let newinput=document.createElement("input");
  newinput.classList.add("form-control");
  newinput.classList.add("skillst");
  newinput.setAttribute("placeholder","Enter here");
  newinput.classList.add("mt-2");
  newinput.classList.add("sub");
  let msg=document.createElement("button");
  msg.classList.add("form-text");
  msg.classList.add("button-sub");
  msg.innerText="-";



  let before=document.querySelector("#brief_button");
  let after=document.querySelector("#brief");


  after.insertBefore(newinput,before);

  after.insertBefore(msg,before);

 msg.addEventListener("click",()=>{
    newinput.remove();
    msg.remove();
  })


});



internship_button.addEventListener("click",()=>{

    let newinput=document.createElement("input");

    newinput.classList.add("form-control");
    newinput.classList.add("interns");
    newinput.setAttribute("placeholder","Enter here");
    newinput.classList.add("mt-2");
    let msg=document.createElement("button");
    msg.classList.add("form-text");
    msg.classList.add("button-sub");
     msg.innerText="-";


    /*From--to creation here*/

     const date=document.createElement("div");
     date.classList.add("date");

     const froms=document.createElement("label");
     froms.classList.add("col-form-label");
     froms.classList.add("from");
     froms.innerHTML="From";


     const from_ipt=document.createElement("input");
     from_ipt.classList.add("form-control");
     from_ipt.classList.add("form-control-sm");
     from_ipt.classList.add("mt-1");
     from_ipt.classList.add("ff");


     const to=document.createElement("label");
     to.classList.add("col-form-label");
     to.classList.add("from-to");
     to.innerHTML="To";

     const to_ipt=document.createElement("input");
     to_ipt.classList.add("form-control");
     to_ipt.classList.add("form-control-sm");
     to_ipt.classList.add("mt-1");
     to_ipt.classList.add("too");



     date.setAttribute("style","display:flex;");


     date.appendChild(froms);
     date.appendChild(from_ipt);
     date.appendChild(to);
     date.appendChild(to_ipt);

     

     /*-----------*/


    let before=document.querySelector("#i_button");
    let after=document.querySelector("#is");


    after.insertBefore(newinput,before);
    after.insertBefore(date,before);
    after.insertBefore(msg,before);

    msg.addEventListener("click",()=>{
      date.remove();
      newinput.remove();
      msg.remove();
    })

  })
 
  
  responsibility_button.addEventListener("click",()=>{

    let newinput=document.createElement("input");
    newinput.classList.add("form-control");
    newinput.classList.add("res");
     newinput.setAttribute("placeholder","Enter here");
    newinput.classList.add("mt-2");
    let msg=document.createElement("button");
    msg.classList.add("form-text");
    msg.classList.add("button-sub");
     msg.innerText="-";


    let before=document.querySelector("#resp_button");
    let after=document.querySelector("#responsibility");


    after.insertBefore(newinput,before);
    after.insertBefore(msg,before);


    msg.addEventListener("click",()=>{
      newinput.remove();
      msg.remove();
    })


  })


  project_button.addEventListener("click",()=>{

    let newinput=document.createElement("input");
    newinput.classList.add("form-control");
    newinput.classList.add("projj");
    newinput.setAttribute("placeholder","Enter here");
    newinput.classList.add("mt-2");
    let msg=document.createElement("button");
    msg.classList.add("form-text");
    msg.classList.add("button-sub");
     msg.innerText="-";


    let before=document.querySelector("#pro_button");  
    let after=document.querySelector("#project");  


    after.insertBefore(newinput,before);
    after.insertBefore(msg,before);



    msg.addEventListener("click",()=>{
      newinput.remove();
      msg.remove();
    })
  })




  achieve_button.addEventListener("click",()=>{

    let newinput=document.createElement("input");
    newinput.classList.add("ai");

    newinput.classList.add("form-control");
    newinput.setAttribute("placeholder","Enter here");
    newinput.classList.add("mt-2");
    let msg=document.createElement("button");
    msg.classList.add("form-text");
    msg.classList.add("button-sub");
     msg.innerText="-";


    let before=document.querySelector("#ac_button");  
    let after=document.querySelector("#ah");  


    after.insertBefore(newinput,before);
    after.insertBefore(msg,before);



    msg.addEventListener("click",()=>{
      newinput.remove();
      msg.remove();
    })
  })
let templatek=0;
let triggers=0;

let bt=4;


document.querySelector("#yes").addEventListener("click",()=>{
  triggers++;
  console.log(triggers);
})

document.querySelector("#Btech").addEventListener("click",()=>{
 bt=4;
})

document.querySelector("#idD").addEventListener("click",()=>{

  bt=2;
 })


document.querySelector("#yes").addEventListener("click",()=>{

   if(triggers%2!=0)
   {
    let semx= document.querySelector(".semx");
   
   let semx0= document.querySelector(".semx0");
   
   let hear=document.querySelector(".hear");
   
   hear.setAttribute("style","display:block;");
   semx0.setAttribute("style","display:inline;margin-left:1rem"); 
   semx.setAttribute("style","display:inline;");

   let c9=document.querySelector(".c9");
    c9.setAttribute("style","display:none;");
    let c10=document.querySelector(".c10");
    c10.setAttribute("style","display:none;");

   
   document.querySelector("#Btech").addEventListener("click",()=>{
    let c9=document.querySelector(".c9");
    c9.setAttribute("style","display:none;");
    let c10=document.querySelector(".c10");
    c10.setAttribute("style","display:none;");
   })

   document.querySelector("#idD").addEventListener("click",()=>{
    let c9=document.querySelector(".c9");
    c9.setAttribute("style","display:inline;");
    let c10=document.querySelector(".c10");
    c10.setAttribute("style","display:inline;");
   })


   if(bt==4)
   {
   let c9=document.querySelector(".c9");
   c9.setAttribute("style","display:none;");
   let c10=document.querySelector(".c10");
   c10.setAttribute("style","display:none;");
   }


   if(bt==2)
   { 
    let c9=document.querySelector(".c9");
   c9.setAttribute("style","display:inline;");
   let c10=document.querySelector(".c10");
   c10.setAttribute("style","display:inline;");
   }
  }

  
  })

 


const nos=document.querySelector("#yes");
nos.addEventListener("click",()=>{
  if(triggers%2==0)
  {
  let semx= document.querySelector(".semx");
  semx.setAttribute("style","display:none;");
  let semx0= document.querySelector(".semx0");
  semx0.setAttribute("style","display:none;margin-left:1rem");
  let hear=document.querySelector(".hear");
  
  hear.setAttribute("style","display:none;");
  }
 })


const generate= document.getElementById("gene");
generate.addEventListener("click",()=>{

  
 
 document.querySelector(".isnt").innerHTML=markuptext2(markuptext(document.querySelector(".institute").value,"*","strong"),"_","em");
 document.querySelector(".perc").innerHTML=markuptext2(markuptext(document.querySelector("#prcntge").value,"*","strong"),"_","em");
 document.querySelector(".yr").innerHTML=markuptext2(markuptext(document.querySelector("#yE").value,"*","strong"),"_","em");

 document.querySelector(".cfirst").innerHTML=markuptext2(markuptext(document.querySelector(".c1").value,"*","strong"),"_","em");
 document.querySelector(".c11").innerHTML=markuptext2(markuptext(document.querySelector(".c2").value,"*","strong"),"_","em");
 document.querySelector(".c12").innerHTML=markuptext2(markuptext(document.querySelector(".c3").value,"*","strong"),"_","em");
 document.querySelector(".c13").innerHTML=markuptext2(markuptext(document.querySelector(".c4").value,"*","strong"),"_","em");
 document.querySelector(".c14").innerHTML=markuptext2(markuptext(document.querySelector(".c5").value,"*","strong"),"_","em");
 document.querySelector(".c15").innerHTML=markuptext2(markuptext(document.querySelector(".c6").value,"*","strong"),"_","em");
 document.querySelector(".c16").innerHTML=markuptext2(markuptext(document.querySelector(".c7").value,"*","strong"),"_","em");
 document.querySelector(".c17").innerHTML=markuptext2(markuptext(document.querySelector(".c8").value,"*","strong"),"_","em");
 
 document.querySelector(".c22").innerHTML=markuptext2(markuptext(document.querySelector(".c1").value,"*","strong"),"_","em");
 document.querySelector(".c23").innerHTML=markuptext2(markuptext(document.querySelector(".c2").value,"*","strong"),"_","em");
 document.querySelector(".c24").innerHTML=markuptext2(markuptext(document.querySelector(".c3").value,"*","strong"),"_","em");
 document.querySelector(".c25").innerHTML=markuptext2(markuptext(document.querySelector(".c4").value,"*","strong"),"_","em");
 document.querySelector(".c26").innerHTML=markuptext2(markuptext(document.querySelector(".c5").value,"*","strong"),"_","em");
 document.querySelector(".c27").innerHTML=markuptext2(markuptext(document.querySelector(".c6").value,"*","strong"),"_","em");
 document.querySelector(".c28").innerHTML=markuptext2(markuptext(document.querySelector(".c7").value,"*","strong"),"_","em");
 document.querySelector(".c29").innerHTML=markuptext2(markuptext(document.querySelector(".c8").value,"*","strong"),"_","em");
 document.querySelector(".c30").innerHTML=markuptext2(markuptext(document.querySelector(".c9").value,"*","strong"),"_","em");
 document.querySelector(".c31").innerHTML=markuptext2(markuptext(document.querySelector(".c10").value,"*","strong"),"_","em");
  
  
 
  let proj=document.getElementsByClassName("projj");
  let strings=''

  for(let e of proj)
  { if(e.value != '')
    strings+=`<li> ${e.value} </li>`;
  }
  if(strings==''){
    document.querySelector(".projects").setAttribute("style","display:none;");
  }
  else{
  document.querySelector(".projects").setAttribute("style","display:visible;"); 
  strings = markuptext(strings,"*","strong"); 
  strings = markuptext2(strings,"_","em");
  document.querySelector("#PJ-list").innerHTML=strings;
  }

  document.querySelector("#names_").innerHTML=document.querySelector("#name").value;

  let skillst=document.getElementsByClassName("skillst");
  let st6=''

  for(let e of skillst)
  { if(e.value != '')
    st6+=`<li> ${e.value} </li>`;

  }
  if(st6 == ''){
    document.querySelector(".skl").setAttribute("style","display:none;");
  }
  else{
    document.querySelector(".skl").setAttribute("style","display:visible;");
    st6 = markuptext(st6,"*","strong");
    st6 = markuptext2(st6,"_","em");
  document.querySelector("#skil-list").innerHTML=st6;
  }
  
  let int=document.getElementsByClassName("interns");
 
 const st = [];
 let k = 0 ;
  for(let e of int)
  { if(e.value=='')break;
    st[k]=` ${e.value} `;
k++;
  }
 
  let fr = document.getElementsByClassName("ff");

  const str1 =[];
  let i=0;
 for(let e of fr){
   if(e.value=='')break;
 str1[i]=` ${e.value} `;
 i++;
  }


  let to2 = document.getElementsByClassName("too");
  const str2 =[];
  i=0;
  for(let e of to2){
    if(e.value=='')break;
    str2[i]= ` ${e.value} `;
    i++;
  }
 
 let string1='';
 for(let j=0;j<k;j++)
 { 
   string1 += `<li style="display:flex;justify-content:space-between;list-style:none;background:#e3e3e3;;padding:2px;margin-bottom:4px;">`+ `<h6 style="font-weight:700;margin-left:1rem;">`+ st[j] + `</h6>`;
   string1 += `<div>`+ `<h7 style="margin-right:2rem;">`  + str1[j]  + '&nbsp' + '-';
   string1 +=  '&nbsp'+ str2[j] + `</h7>` +`</div>`+ `</li>` ;
 }
 if(string1==''){
   document.querySelector(".int1").setAttribute("style","display:none;");
 }
 else{
  document.querySelector(".int1").setAttribute("style","display:visible;");   
  string1 = markuptext(string1,"*","strong");
  string1 = markuptext2(string1,"_","em");
 document.querySelector("#IN-list").innerHTML=string1;
 }
  let ai=document.getElementsByClassName("ai");
  let st4=''

  for(let e of ai)
  { if(e.value!='')
    st4+=`<li> ${e.value} </li>`;

  }
  if(st4==''){
    document.querySelector(".honours").setAttribute("style","display:none;");
  }
  else{
    document.querySelector(".honours").setAttribute("style","display:visible;"); 
    st4 = markuptext(st4,"*","strong");   
    st4 = markuptext2(st4,"_","em");
  document.querySelector("#AC-list").innerHTML=st4;
  }
  let res=document.getElementsByClassName("res");
  let st0=''

  for(let e of res)
  {  if(e.value!='')
    st0+=`<li> ${e.value} </li>`;

  }
  if(st0==''){
    document.querySelector(".por").setAttribute("style","display:none;");
  }
  else{
  document.querySelector(".por").setAttribute("style","display:visible;"); 
  st0 = markuptext(st0,"*","strong");
  st0 = markuptext2(st0,"_","em"); 
  document.querySelector("#P-list").innerHTML=st0;
  }
  let str88 = document.getElementById("Inputaddres").value;
  if(str88!=''){
  document.querySelector(".address").innerHTML= "Address : " + str88;
  }


  document.getElementById("gitT").innerHTML = document.getElementById("Inputgit").value;
  document.getElementById("linkedT").innerHTML = document.getElementById("Inputlinked").value;
  document.getElementById("portfolioT").innerHTML = document.getElementById("Inputother").value;


 let str87=document.getElementById("Inputcontact0").value;
 let str4="Contact : ";
 let str_f=str4+str87;
  
  if(str87!=''){
    str_f = markuptext(str_f,"*","strong");
    str_f = markuptext2(str_f,"_","em");
 document.querySelector(".contact").innerHTML=str_f;
  }
 document.querySelector("#input_f").setAttribute("style","display:none;");
 document.querySelector("#main").setAttribute("style","display:block;");
 document.querySelector("#temp2").setAttribute("style","display:block;");
 last.setAttribute("style","display:visible;");
 let element=document.getElementById("body")
 element.setAttribute("style","border:none;");



 document.querySelector("#deg1").innerHTML=markuptext2(markuptext(document.querySelector("#inputboard1").value,"*","strong"),"_","em");
 document.querySelector("#in1").innerHTML=markuptext2(markuptext(document.querySelector("#inputyear1").value,"*","strong"),"_","em");
 document.querySelector("#r1").innerHTML=markuptext2(markuptext(document.querySelector("#inpupercentage1").value,"*","strong"),"_","em");
 document.querySelector("#y1").innerHTML=markuptext2(markuptext(document.querySelector("#inpupass1").value,"*","strong"),"_","em");
 document.querySelector("#deg").innerHTML=markuptext2(markuptext(document.querySelector("#inputborad").value,"*","strong"),"_","em");
 document.querySelector("#inn").innerHTML=markuptext2(markuptext(document.querySelector("#inpuyear").value,"*","strong"),"_","em");
 document.querySelector("#r").innerHTML=markuptext2(markuptext(document.querySelector("#inpupercentage").value,"*","strong"),"_","em");
 document.querySelector("#yre").innerHTML=markuptext2(markuptext(document.querySelector("#inpupass").value,"*","strong"),"_","em");

 
 let temp=document.getElementById("temp2");
 temp.classList.add("scaling");

 if(bt==4)
 {
 document.querySelector("#btechsid").innerHTML="Btech";
 }
 if(bt==2)
 {
 document.querySelector("#btechsid").innerHTML="IDD"; 
 }
 
 if((bt==4) &&(triggers%2!=0))
 { 
 
  let tablesem4=document.querySelector(".semdisp4");
  tablesem4.setAttribute("style","display:none;");
   let tablesem=document.querySelector(".semdisp");
   tablesem.setAttribute("style","display:table;");
  
 }

 else if((bt==2) && (triggers%2!=0))
  { 
    
    let tablesem4=document.querySelector(".semdisp4");
    tablesem4.setAttribute("style","display:table;");
    let tablesem=document.querySelector(".semdisp");
    tablesem.setAttribute("style","display:none;");
    
  }
  else if(triggers%2==0){
    let tablesem=document.querySelector(".semdisp");
    tablesem.setAttribute("style","display:none;");
    let tablesem4=document.querySelector(".semdisp4");
    tablesem4.setAttribute("style","display:none;");    
  }

  const button3=document.querySelector(".button3");
  button3.setAttribute("style","display:visible;");
}
);
const last=document.querySelector("#last");

let ress=document.querySelector("#main");

let opt = {
  margin:       0,
  filename:     'myresume.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        {  format: 'a4', orientation: 'portrait' }
};

last.addEventListener("click",()=>{
  
  ress.classList.add("scale");
  html2pdf(ress,opt);
})


const lastest=document.querySelector("#lastest");

lastest.addEventListener("click",()=>{

 document.querySelector("#input_f").setAttribute("style","display:visible;");
 document.querySelector("#main").setAttribute("style","display:none;");
 document.querySelector("#temp2").setAttribute("style","display:none;");
 document.querySelector("#last").setAttribute("style","display:none;");
 lastest.setAttribute("style","display:none");


})

function markuptext(text,identifier,htmltag)
{
    var array = text.split(identifier);
    var previous = "";
    const l1 = array.length;
   // console.log(l1);
    var previous_i;
    for (i = 0; i < array.length; i++) {
        if (i % 2)
        {  let f=0;
          if(eval(i)>2)
          {  k = eval(i-2);
             if(array[k]=="**"){
               f=1;
               array[k]="*";
               array[k+1]="<"+htmltag+">"+previous+"</"+htmltag+">";
             }
          } 
          if(eval(i)==eval(l1-1) && f==0){
            //console.log(l1);
            array[eval(l1-1)]= "*"+array[eval(l1-1)];
          }
        }
        else if (i!=0)
        { 
            previous_i = eval(i-1);
            var l = previous.length;
            if(previous[0]!=" " && previous[l-1]!=" " && l>0)
            array[previous_i] = "<"+htmltag+">"+previous+"</"+htmltag+">";
            else if(previous[0]==" " && previous[l-1]==" " && l>0)
            {array[previous_i]= "* " + previous+ " *";
            }
            else if(previous[0]==" "){
              array[previous_i]= '* '+previous+"*";
            }
            else if(previous==""){
              array[previous_i]= "**"+previous;
            }
            else{
              array[previous_i]= "*"+previous+" *";
            }
        }
        previous = array[i];
    }
 //   console.log(l1);
   
    var newtext = "";
    for (i = 0; i < array.length; i++) {
        newtext += array[i];
    }
    return newtext;
}
function markuptext2(text,identifier,htmltag)
{
    var array = text.split(identifier);
    var previous = "";
    const l1 = array.length;
   // console.log(l1);
    var previous_i;
    for (i = 0; i < array.length; i++) {
        if (i % 2)
        {  let f=0;
          if(eval(i)>2)
          {  k = eval(i-2);
             if(array[k]=="__"){
               f=1;
               array[k]="_";
               array[k+1]="<"+htmltag+">"+previous+"</"+htmltag+">";
             }
          } 
          if(eval(i)==eval(l1-1) && f==0){
            //console.log(l1);
            array[eval(l1-1)]= "_"+array[eval(l1-1)];
          }
        }
        else if (i!=0)
        { 
            previous_i = eval(i-1);
            var l = previous.length;
            if(previous[0]!=" " && previous[l-1]!=" " && l>0)
            array[previous_i] = "<"+htmltag+">"+previous+"</"+htmltag+">";
            else if(previous[0]==" " && previous[l-1]==" " && l>0)
            {array[previous_i]= "_ " + previous+ " _";
            }
            else if(previous[0]==" "){
              array[previous_i]= '_ '+previous+"_";
            }
            else if(previous==""){
              array[previous_i]= "__"+previous;
            }
            else{
              array[previous_i]= "_"+previous+" _";
            }
        }
        previous = array[i];
    }
 //   console.log(l1);
   
    var newtext = "";
    for (i = 0; i < array.length; i++) {
        newtext += array[i];
    }
    return newtext;
}