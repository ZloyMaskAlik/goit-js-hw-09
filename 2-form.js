import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const l=document.querySelector("form");let t={email:"",message:""};const s=()=>{try{if(Object.values(t).includes(""))return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));t=e;for(const o in e)l.elements[o].value=e[o]}catch(e){console.log(e)}};s();const c=e=>{const{target:o}=e,a=o.value.trim(),r=o.name;t[r]=a,localStorage.setItem("feedback-form-state",JSON.stringify(t))},n=e=>{if(e.preventDefault(),Object.values(t).includes(""))alert`Fill please all fields`;else{console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state");const o=Object.keys(t);for(const a of o)t[a]!==""&&(t[a]="")}};l.addEventListener("change",c);l.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
