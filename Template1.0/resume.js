const b_button=document.querySelector("#b_button");
const in_button=document.querySelector("#in_button");
const ed_button=document.querySelector("#ed_button");
const project_button=document.querySelector("#project_button");





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


  /*RESUME*/

  let cvgen=document.querySelector("#gene")

  cvgen.addEventListener("click",()=>{


    let names=document.querySelector(".titles");
    let nvalue=document.querySelector("#Inputname").value;
    names.innerHTML=nvalue;



    let proj=document.getElementsByClassName("projj");
    let strings=''

    for(let e of proj)
    {
      strings+=`<li> ${e.value} </li>`;

    }

    document.querySelector("#projlist").innerHTML=strings;



    document.querySelector("#git").innerHTML=document.querySelector("#Inputgit").value;
    document.querySelector("#linkedin").innerHTML=document.querySelector("#Inputlinked").value;
    document.querySelector("#otherss").innerHTML=document.querySelector("#Inputother").value;

    document.querySelector("#ph").innerHTML=document.querySelector("#Inputcontact0").value;
    document.querySelector("#mailed").innerHTML=document.querySelector("#Inputcontact").value;


    let int=document.getElementsByClassName("interns");
    let fr=document.getElementsByClassName("ff");
    let t=document.getElementsByClassName("too");
    let st=''
    for(let e of int)
    {
      st+=`<li class="it"> ${e.value} </li>`;

    }
    console.log(st);
    document.querySelector("#in-List").innerHTML=st;

    let st2=''

    /*for(let e of fr )
    {
      st2+=`<p> ${e.value} </p>`;
      
    }
    document.querySelector(".it").innerHTML=st2;*/



    let edtc=document.getElementsByClassName("edtc");
    let st3=''

    for(let e of edtc)
    {
      st3+=`<li> ${e.value} </li>`;

    }

    document.querySelector("#ed-list").innerHTML=st3;

    let ai=document.getElementsByClassName("ai");
    let st4=''

    for(let e of ai)
    {
      st4+=`<li> ${e.value} </li>`;

    }

    document.querySelector("#ai-list").innerHTML=st4;





    let skillst=document.getElementsByClassName("skillst");
    let st6=''

    for(let e of skillst)
    {
      st6+=`<li> ${e.value} </li>`;

    }
   console.log(st6);
    document.querySelector("#skilllist").innerHTML=st6;


    document.querySelector("#input_f").setAttribute("style","display:none;");
    document.querySelector("#templ").setAttribute("style","display:block;");
  })

const last=document.querySelector("#last");


last.addEventListener("click",()=>{

  last.setAttribute("style","visibility:hidden");
  window.print();
})