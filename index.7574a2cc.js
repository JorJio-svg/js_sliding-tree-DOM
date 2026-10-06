document.querySelectorAll(".tree li").forEach(function(e){if(e.childNodes.length>1){var t=e.firstChild.textContent.trim(),n=document.createElement("span");n.append(t),e.firstChild.replaceWith(n),n.addEventListener("click",function(e){e.target.nextElementSibling.hidden=!e.target.nextElementSibling.hidden})}});
//# sourceMappingURL=index.7574a2cc.js.map
