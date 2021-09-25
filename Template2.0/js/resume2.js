const b_button=document.querySelector("#b_button");
const in_button=document.querySelector("#in_button");
const ed_button=document.querySelector("#ed_button");
const project_button=document.querySelector("#project_button");
const respon_button=document.querySelector("#respon_button");
const ah_button=document.querySelector("#ah_button");




b_button.addEventListener("click",funct= ()=>{

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



in_button.addEventListener("click",()=>{

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

     const label=document.createElement("label");
     label.classList.add("col-form-label");
     label.classList.add("from");
     label.innerHTML="From";


     const ipt=document.createElement("input");
     ipt.classList.add("form-control");
     ipt.classList.add("form-control-sm");
     ipt.classList.add("mt-1");
     ipt.classList.add("ff");


     const labe=document.createElement("label");
     labe.classList.add("col-form-label");
     labe.classList.add("from-to");
     labe.innerHTML="To";

     const ip=document.createElement("input");
     ip.classList.add("form-control");
     ip.classList.add("form-control-sm");
     ip.classList.add("mt-1");
     ip.classList.add("too");



     date.setAttribute("style","display:flex;");


     date.appendChild(label);
     date.appendChild(ipt);
     date.appendChild(labe);
     date.appendChild(ip);

     

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
 /* ed_button.addEventListener("click",()=>{

    let newinput=document.createElement("input");
    newinput.classList.add("form-control");
    newinput.classList.add("edtc");
     newinput.setAttribute("placeholder","Enter here");
    newinput.classList.add("mt-2");
    let msg=document.createElement("button");
    msg.classList.add("form-text");
    msg.classList.add("button-sub");
     msg.innerText="-";


    let before=document.querySelector("#e_button");
    let after=document.querySelector("#ed");


    after.insertBefore(newinput,before);
    after.insertBefore(msg,before);


    msg.addEventListener("click",()=>{
      newinput.remove();
      msg.remove();
    })


  })*/
  
  respon_button.addEventListener("click",()=>{

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




  ah_button.addEventListener("click",()=>{

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
     templatek=1;
    let c9=document.querySelector(".c9");
    c9.setAttribute("style","display:none;");
    let c10=document.querySelector(".c10");
    c10.setAttribute("style","display:none;");
   })

   document.querySelector("#idD").addEventListener("click",()=>{
    let c9=document.querySelector(".c9");
    templatek=6;
    c9.setAttribute("style","display:inline;");
    let c10=document.querySelector(".c10");
    c10.setAttribute("style","display:inline;");
   })


   if(bt==4)
   {
   templatek=1;
   let c9=document.querySelector(".c9");
   c9.setAttribute("style","display:none;");
   let c10=document.querySelector(".c10");
   c10.setAttribute("style","display:none;");
   }


   if(bt==2)
   { 
     templatek=6;
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

  let acad=document.getElementsByClassName("edtc");
  let st12=''

  for(let e of acad)
  { if(e.value == '')break;
    st12+=`<li> ${e.value} </li>`;

  }
  if(st12==''){
    document.querySelector(".acd").setAttribute("style","display:none;");
  }
  else{
  document.querySelector("#acad-list").innerHTML=st12;
  } 

  
 
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
 document.querySelector(".c30").innerHTML=document.querySelector(".c8").value;
 document.querySelector(".c31").innerHTML=document.querySelector(".c8").value;
  
  
 
  let proj=document.getElementsByClassName("projj");
  let strings=''

  for(let e of proj)
  { if(e.value == '')break;
    strings+=`<li> ${e.value} </li>`;

  }
  if(strings==''){
    document.querySelector(".projects").setAttribute("style","display:none;");
  }
  else{
  document.querySelector("#PJ-list").innerHTML=strings;
  }

  let skillst=document.getElementsByClassName("skillst");
  let st6=''

  for(let e of skillst)
  { if(e.value == '')break;
    st6+=`<li> ${e.value} </li>`;

  }
  if(st6 == ''){
    document.querySelector(".skl").setAttribute("style","display:none;");
  }
  else{
  document.querySelector("#skil-list").innerHTML=st6;
  }
  
  let int=document.getElementsByClassName("interns");
 // let st='';
 const st = [];
 let k = 0 ;
  for(let e of int)
  { if(e.value=='')break;
    st[k]=` ${e.value} `;
k++;
  }
 // document.querySelector("#IN-list").innerHTML=st;
  let fr = document.getElementsByClassName("ff");
 // let str1 =''
  const str1 =[];
  let i=0;
 for(let e of fr){
   if(e.value=='')break;
 str1[i]=` ${e.value} `;
 i++;
  }

  //document.querySelector("#F-list").innerHTML=str1;
  let to = document.getElementsByClassName("too");
  const str2 =[];
  i=0;
  for(let e of to){
    if(e.value=='')break;
    str2[i]= ` ${e.value} `;
    i++;
  }
 // document.querySelector("#T-list").innerHTML=str2;
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
 document.querySelector("#IN-list").innerHTML=string1;
 }
  let ai=document.getElementsByClassName("ai");
  let st4=''

  for(let e of ai)
  { if(e.value=='')break;
    st4+=`<li> ${e.value} </li>`;

  }
  if(st4==''){
    document.querySelector(".honours").setAttribute("style","display:none;");
  }
  else{
  document.querySelector("#AC-list").innerHTML=st4;
  }
  let res=document.getElementsByClassName("res");
  let st0=''

  for(let e of res)
  {  if(e.value=='')break;
    st0+=`<li> ${e.value} </li>`;

  }
  if(st0==''){
    document.querySelector(".por").setAttribute("style","display:none;");
  }
  document.querySelector("#P-list").innerHTML=st0;
  let str88 = document.getElementById("Inputaddres").value;
  if(str88!=''){
  document.querySelector(".address").innerHTML= "Address : " + str88;
  }

  /*document.querySelector(".contact").innerHTML=document.getElementById("Inputcontact0").value;
  
 */ 
 let str87=document.getElementById("Inputcontact0").value;
 let str4="Contact : ";
 let str_f=str4+str87;
  
  if(str87!=''){
 document.querySelector(".contact").innerHTML=str_f;
  }
 document.querySelector("#input_f").setAttribute("style","display:none;");
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
   document.querySelector(".iddbte").innerHTML="Btech";
 }
 if(bt==0)
 {
   document.querySelector(".iddbte").innerHTML="IDD";
 }
 if(templatek==1)
 { 
   
   let tablesem=document.querySelector(".semdisp");
   tablesem.classList.add("display");
  
 }

 else if(templatek==6)
  { 
    let tablesem4=document.querySelector(".semdisp4");
    tablesem4.classList.add("display");
    
    
  }

  const button3=document.querySelector(".button3");
  button3.setAttribute("style","display:visible;");
}
);
const last=document.querySelector("#last");

let ress=document.querySelector("#temp2");

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
 document.querySelector("#temp2").setAttribute("style","display:none;");
 document.querySelector("#last").setAttribute("style","display:none;");
 lastest.setAttribute("style","display:none");


})

