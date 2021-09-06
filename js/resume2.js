const b_button=document.querySelector("#b_button");
const in_button=document.querySelector("#in_button");
const ed_button=document.querySelector("#ed_button");
const project_button=document.querySelector("#project_button");
const respon_button=document.querySelector("#respon_button");





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
     ip.classList.add("ff");



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
  ed_button.addEventListener("click",()=>{

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


  })
  
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


const generate= document.getElementById("gene");
generate.addEventListener("click",()=>{

  

  
  let proj=document.getElementsByClassName("projj");
  let strings=''

  for(let e of proj)
  {
    strings+=`<li> ${e.value} </li>`;

  }

  document.querySelector("#PJ-list").innerHTML=strings;


  let skillst=document.getElementsByClassName("skillst");
  let st6=''

  for(let e of skillst)
  {
    st6+=`<li> ${e.value} </li>`;

  }
  document.querySelector("#skil-list").innerHTML=st6;
  
  let int=document.getElementsByClassName("interns");
  let st='';
  for(let e of int)
  {
    st+=`<li> ${e.value} </li>`;

  }

  document.querySelector("#IN-list").innerHTML=st;
  
  let ai=document.getElementsByClassName("ai");
  let st4=''

  for(let e of ai)
  {
    st4+=`<li> ${e.value} </li>`;

  }

  document.querySelector("#AC-list").innerHTML=st4;

  let res=document.getElementsByClassName("res");
  let st0=''

  for(let e of res)
  {
    st0+=`<li> ${e.value} </li>`;

  }

  document.querySelector("#P-list").innerHTML=st0;

  document.querySelector(".address").innerHTML=document.getElementById("Inputaddres").value;


 
  /*document.querySelector(".contact").innerHTML=document.getElementById("Inputcontact0").value;
  
 */ 
 let str87=document.getElementById("Inputcontact0").value;
 let str4="address";
 let str_f=str4+str87;
  
  
 document.querySelector(".contact").innerHTML=str_f;

 document.querySelector("#input_f").setAttribute("style","display:none;");
 document.querySelector("#temp2").setAttribute("style","display:block;");
 last.setAttribute("style","display:visible;");
 let element=document.getElementById("body")
 element.setAttribute("style","border:none;");
})
const last=document.querySelector("#last");

let ress=document.querySelector("#temp2");

last.addEventListener("click",()=>{
  
  ress.classList.add("scale");
  /*last.setAttribute("style","visibility:hidden");*/
  html2pdf(ress);
})