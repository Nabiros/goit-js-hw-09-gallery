parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"QdeU":[function(require,module,exports) {
const t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],e=document.querySelector(".js-gallery"),o=document.querySelector(".js-lightbox"),i=document.querySelector(".lightbox__image"),n=document.querySelector('button[data-action="close-lightbox"]'),a=document.querySelector(".lightbox__content"),p=t=>{const o=document.createElement("li");o.classList.add("gallery__item");const i=document.createElement("a");i.classList.add("gallery__link"),i.setAttribute("href",t.original);const n=document.createElement("img");return n.classList.add("gallery__image"),n.setAttribute("src",t.preview),n.setAttribute("data-source",t.original),n.setAttribute("alt",t.description),i.appendChild(n),o.appendChild(i),e.appendChild(o),o},c=t.map(t=>p(t));function r(t){"ArrowRight"===t.code&&l()}function s(t){"ArrowLeft"===t.code&&h()}function d(t){"Escape"===t.code&&m()}function l(){const e=t.findIndex(t=>t.original===i.src);let o=e||0;o<t.length-1?o+=1:o=0,i.src=t[o].original,i.alt=t[o].alt}function h(){const e=t.findIndex(t=>t.original===i.src);let o=e||t.length-1;o>0?o-=1:o=t.length-1,i.src=t[o].original,i.alt=t[o].alt}function g(t){t.preventDefault(),t.target!==t.currentTarget&&(window.addEventListener("keydown",d),o.classList.add("is-open"),i.src=t.target.getAttribute("data-source"),i.alt=t.target.alt,e.addEventListener("keydown",r),e.addEventListener("keydown",s))}function m(){window.removeEventListener("keydown",d),o.classList.remove("is-open"),i.src="",i.alt="",e.removeEventListener("keydown",r),e.removeEventListener("keydown",s)}e.append(...c),e.addEventListener("click",g),n.addEventListener("click",m);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/app");
},{"./sass/main.scss":"clu1","./js/app":"QdeU"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.2d26279b.js.map