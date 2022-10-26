

const d = document;

export default function contactoValidacion(){
   const $form= d.querySelector(".form");
    const $inputs=d.querySelectorAll(".input");

   console.log($inputs)

   $inputs.forEach(input=>{
    const $span=d.createElement("span");
    $span.id=input.name;
    $span.textContent=input.title;
    $span.classList.add("form-error","none");
    input.insertAdjacentElement("afterend",$span);
   });

    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(".input")){
        let $input=e.target;
        let pattern=$input.pattern || $input.dataset.pattern;

        console.log($input,pattern);
        

        if(pattern && $input.value!==""){
            let regex = new RegExp(pattern);
            return !regex.exec($input.value)
             ? d.getElementById($input.name).classList.add("is-active")
             : d.getElementById($input.name).classList.remove("is-active");

        }
        if(!pattern){
            return $input.value===""
            ? d.getElementById($input.name).classList.add("is-active")
             : d.getElementById($input.name).classList.remove("is-active");

        }
        
    }
    })

}