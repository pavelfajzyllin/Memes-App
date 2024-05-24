const textTopInputNode = document.querySelector('.text-top-input');
const textBottomInputNode = document.querySelector('.text-bottom-input');
const sectionImgNode = document.querySelector('.img-and-text');
const textTopOnImg = document.querySelector('.textTop-on-img');
const textBottomOnImg = document.querySelector('.textBottom-on-img');
const selectorMemes = document.querySelector('.selector-mems');
const sectionSelector = document.querySelector('.section-selector');
const imgSection = document.querySelector('.img-tut');

const URL = 'https://api.imgflip.com/get_memes'


getMemes(URL);

function addText() {
textTopInputNode.addEventListener('keyup', () => renderTextTop());
textBottomInputNode.addEventListener('keyup', () => renderTextBottom());
}


// getMemes(URL);
// функции отображения текста из инпутов
function renderTextTop (){
    clearTextTopOnImg();
    let textTop = textTopInputNode.value;
    textTopOnImg.innerHTML +=`
    <p class="text-top">${textTop}</p>
    `
}
function renderTextBottom (){
    clearTextBottomOnImg();
    let textBottom = textBottomInputNode.value;
    textBottomOnImg.innerHTML +=`
    <p class="text-bottom">${textBottom}</p>
    `
}
// функции очистки предыдущего текста на картинке
function clearTextTopOnImg (){
    textTopOnImg.innerHTML = '';
}
function clearTextBottomOnImg (){
    textBottomOnImg.innerHTML = '';
}

//API 
function showMemes(respData) {

    respData.memes.forEach((mem) => {
        selectorMemes.innerHTML += `
        <option class='selected_mem' value="${mem.url}">${mem.name}</option>
        `;



        sectionSelector.appendChild(selectorMemes);
    });
    selectorMemes.addEventListener('change', () => renderImg(selectorMemes.value));
    addText();
}


async function getMemes (url) {
    const resp = await fetch(url);
    let respData = await resp.json();
    respData = respData.data
    showMemes(respData);

   

    }

function renderImg(mem_url) {
    imgSection.innerHTML = '';

    imgSection.innerHTML +=`
    <img class="img-mem" src="${mem_url}" alt="" srcset="">
    `
}

