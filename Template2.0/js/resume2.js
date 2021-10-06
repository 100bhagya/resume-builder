const skill_button=document.querySelector("#b_button");
const intern_button=document.querySelector("#b1_button");
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
intern_button.addEventListener("click",funct= ()=>{

  let newinput1=document.createElement("input");
  newinput1.classList.add("form-control");
  newinput1.classList.add("form-work");
  newinput1.setAttribute("placeholder","Elaborate your work");
  newinput1.classList.add("mt-2");
  newinput1.classList.add("sub");
  let msg1=document.createElement("button");
  msg1.classList.add("form-text");
  msg1.classList.add("button-sub");
  msg1.innerText="-";



  let before=document.querySelector("#br_button");
  let after=document.querySelector("#extra");


  after.insertBefore(newinput1,before);

  after.insertBefore(msg1,before);

 msg1.addEventListener("click",()=>{
    newinput1.remove();
    msg1.remove();
  })


});


internship_button.addEventListener("click",()=>{
 

    let newinput=document.createElement("input");

    newinput.classList.add("form-control");
    newinput.classList.add("interns");
    newinput.setAttribute("placeholder","Enter here");
    newinput.classList.add("mt-2");


    let input=document.createElement("input");
    input.classList.add("form-work");
    input.classList.add("form-control");
    input.setAttribute("placeholder","Elaborate your work");
    input.classList.add("mt-2");

  

    

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
    after.insertBefore(input,before);
    after.insertBefore(date,before);
    after.insertBefore(msg,before);

    msg.addEventListener("click",()=>{
      date.remove();
      newinput.remove();
      input.remove();
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

  
 
 document.querySelector(".isnt").innerHTML=document.querySelector(".institute").value;
 document.querySelector(".perc").innerHTML=document.querySelector("#prcntge").value;
 document.querySelector(".yr").innerHTML=document.querySelector("#yE").value;

 document.querySelector(".cfirst").innerHTML=document.querySelector(".c1").value;
 document.querySelector(".c11").innerHTML=document.querySelector(".c2").value;
 document.querySelector(".c12").innerHTML=document.querySelector(".c3").value;
 document.querySelector(".c13").innerHTML=document.querySelector(".c4").value;
 document.querySelector(".c14").innerHTML=document.querySelector(".c5").value;
 document.querySelector(".c15").innerHTML=document.querySelector(".c6").value;
 document.querySelector(".c16").innerHTML=document.querySelector(".c7").value;
 document.querySelector(".c17").innerHTML=document.querySelector(".c8").value;
 
 document.querySelector(".c22").innerHTML=document.querySelector(".c1").value;
 document.querySelector(".c23").innerHTML=document.querySelector(".c2").value;
 document.querySelector(".c24").innerHTML=document.querySelector(".c3").value;
 document.querySelector(".c25").innerHTML=document.querySelector(".c4").value;
 document.querySelector(".c26").innerHTML=document.querySelector(".c5").value;
 document.querySelector(".c27").innerHTML=document.querySelector(".c6").value;
 document.querySelector(".c28").innerHTML=document.querySelector(".c7").value;
 document.querySelector(".c29").innerHTML=document.querySelector(".c8").value;
 document.querySelector(".c30").innerHTML=document.querySelector(".c9").value;
 document.querySelector(".c31").innerHTML=document.querySelector(".c10").value;
  
  
 
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
  document.querySelector("#skil-list").innerHTML=st6;
  }


// -----i edited----
// let int1=document.getElementsByClassName("form-work ");
//   let strings=''

//   for(let x of int1)
//   { if(x.value != '')
//     string+=`<li> ${x.value} </li>`;
//   }
//   if(string==''){
//     document.querySelector(".int1").setAttribute("style","display:none;");
//   }
//   else{
//   document.querySelector(".int1").setAttribute("style","display:visible;");  
//   document.querySelector("#IN-list").innerHTML=strings;
//   }

// --------i edited

  
  let int=document.getElementsByClassName("interns");
 
 const st = [];
 let k = 0 ;
  for(let e of int)
  { if(e.value=='')break;
    st[k]=` ${e.value} `;
   k++;
  }
//  ------i edited------
  let work=document.getElementsByClassName("form-work");
 
 const st1 = [];
 let l = 0 ;
  for(let f of work)
  { if(f.value=='')break;
    st1[l]=` ${f.value} `;
  l++;
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
   string1+=`<p>`+st1[j]+`</p>`;
 }
 if(string1==''){
   document.querySelector(".int1").setAttribute("style","display:none;");
 }
 else{
  document.querySelector(".int1").setAttribute("style","display:visible;");   
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
 document.querySelector(".contact").innerHTML=str_f;
  }
 document.querySelector("#input_f").setAttribute("style","display:none;");
 document.querySelector("#main").setAttribute("style","display:block;");
 document.querySelector("#temp2").setAttribute("style","display:block;");
 last.setAttribute("style","display:visible;");
 let element=document.getElementById("body")
 element.setAttribute("style","border:none;");



 document.querySelector("#deg1").innerHTML=document.querySelector("#inputboard1").value;
 document.querySelector("#in1").innerHTML=document.querySelector("#inputyear1").value;
 document.querySelector("#r1").innerHTML=document.querySelector("#inpupercentage1").value;
 document.querySelector("#y1").innerHTML=document.querySelector("#inpupass1").value;
 document.querySelector("#deg").innerHTML=document.querySelector("#inputborad").value;
 document.querySelector("#inn").innerHTML=document.querySelector("#inpuyear").value;
 document.querySelector("#r").innerHTML=document.querySelector("#inpupercentage").value;
 document.querySelector("#yre").innerHTML=document.querySelector("#inpupass").value;

 
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

