!function(){"use strict";window.onload=async function(){try{const e=await fetch("assets/banner.txt"),t=await e.text(),n=document.getElementById("ascii-art-container");n.innerHTML="";const o=document.getElementById("progress-bar");let a=0;const r=setInterval((()=>{if(a>=100){clearInterval(r);for(let e=0;e<t.length;e++){const o=document.createElement("div");o.classList.add("char"),o.style.left=e%80*10+"px",o.textContent=" "===t[e]?" ":t[e],o.style.animationDelay=2*Math.random()+"s",n.appendChild(o)}(e=2e3,new Promise((t=>setTimeout(t,e)))).then((async()=>{document.getElementById("loader").style.display="none",n.style.display="none",document.getElementById("terminal").style.display="block";const e=document.getElementById("ascii-art");e.style.display="block",e.innerText=t;const o=await async function(){try{const e=await fetch("assets/quotes.json"),t=await e.json(),n=t[Math.floor(Math.random()*t.length)];return`${n.quote} — ${n.author}`}catch(e){return console.error("Failed to fetch quote:",e),"Failed to fetch a quote at the moment. Please try again later."}}(),a=document.getElementById("quote-container");a.innerText=o,a.style.marginBottom="20px",a.style.color="white",document.body.style.overflow="auto",document.getElementById("userInput").focus()}))}else a+=1,o.style.width=a+"%";var e}),10)}catch(e){console.error("Failed to load ASCII art:",e)}},document.addEventListener("DOMContentLoaded",(function(){function e(e,n){const o=document.getElementById("terminal"),a=document.createElement("div");if(a.textContent=`$ ${e}`,a.classList.add("terminal-line"),o.appendChild(a),n){const e=document.createElement("pre");e.textContent=n,e.classList.add("terminal-line"),o.appendChild(e)}t(),o.scrollTop=o.scrollHeight}function t(){const e=document.getElementById("terminal"),t=document.createElement("div");t.classList.add("input-line");const n=document.createElement("span");n.textContent="$ ",t.appendChild(n);const o=document.createElement("input");o.type="text",o.id="userInput",o.autofocus=!0,t.appendChild(o);const a=document.querySelector(".input-line");a&&a.remove(),e.appendChild(t),o.focus()}document.getElementById("terminal").addEventListener("keypress",(function(n){"Enter"===n.key&&(n.preventDefault(),function(){const n=document.getElementById("userInput"),o=n.value.trim(),[a,...r]=o.split(" "),s=a.toLowerCase(),d=r.join(" ");let l;l="echo"===s?d:"date"===s?function(){const e=new Date,t={weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0,timeZoneName:"short"};return e.toLocaleDateString("en-US",t)}():o in commands?commands[o]:`Command not found: ${o}`;if("clear"===o)!function(){const e=document.getElementById("terminal");for(;e.firstChild;)e.removeChild(e.firstChild);t(),e.scrollTop=e.scrollHeight}();else if("exit"===o||"close"===o){e(o,"Exiting...BYE");const t=document.querySelector(".input-line");t&&(t.style.display="none"),setTimeout((()=>function(){document.getElementById("terminal").style.display="none",document.getElementById("ascii-art").style.display="none";const e=document.createElement("div");e.textContent="Exit Successful. Please reload the page to re-run.",e.style.color="white",e.style.marginTop="20px",document.body.appendChild(e)}()),5e3)}else e(o,l);n.value=""}())})),t()}));const e={help:"Available commands: date, ls, clear, echo, education, experience, about, exit and more...",education:"I hold a Bachelor's degree in Computer Science and currently am doing MSc - Informatikk at University of Oslo.",experience:"I have worked at REDACTED REDACTED REDACTED.",about:"I am groot. I am groot. I am groot. I am groot. I am groot. I am groot. ",whoami:"not root :P, you are www-data",clear:"",ls:"src       assets      data        please_smile.txt        banner",pwd:"/home/www-data",echo:"",cd:"permission denied",cat:"permission denied","ls -lrt":"drwxr-xr-x  4 user  www-data  128 Dec  9 19:52 src\ndrwxr-xr-x  3 user  www-data   96 Dec  9 19:52 assets\ndrwxr-xr-x  2 user  www-data   64 Dec  9 19:52 data\n-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 please_smile.txt\n-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 banner","ls -la":"drwxr-xr-x  4 user  www-data  128 Dec  9 19:52 src\ndrwxr-xr-x  3 user  www-data   96 Dec  9 19:52 assets\ndrwxr-xr-x  2 user  www-data   64 Dec  9 19:52 data\n-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 please_smile.txt\n-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 banner",la:"src\nassets\ndata\nplease_smile.txt\nbanner",ps:"PID TTY          TIME CMD\n1586 pts/0    00:00:00 bash\n5117 pts/0    00:00:00 ps",hello:"hiya, great to see you :)",hi:"hello you :)"};window.commands=e}();
