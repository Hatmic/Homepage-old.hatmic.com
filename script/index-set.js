// img size
document.addEventListener("DOMContentLoaded", function() {
    let h1Height = document.querySelector('.nickname').offsetHeight;
    let newImgHeight = h1Height * 7;
    
    document.querySelector('.avatar').style.height = newImgHeight + 'px';
});

// p margin-left and margin-right
document.addEventListener("DOMContentLoaded", function() {
    let paragraphs = document.querySelectorAll('.p-intro');
    paragraphs.forEach(function(paragraph) {
        let marginTop = parseFloat(window.getComputedStyle(paragraph).marginTop);
        let marginBottom = parseFloat(window.getComputedStyle(paragraph).marginBottom);

        paragraph.style.marginLeft = marginTop + 'px';
        paragraph.style.marginRight = marginBottom + 'px';
    });
});

// hr size
document.addEventListener("DOMContentLoaded", function(){
    let hrWidth = document.querySelector('.nickname').offsetWidth;
    let newHrWidth = hrWidth / 25;

    let hrs = document.querySelectorAll('.hr');
    hrs.forEach(function(hr) {
        hr.style.width = newHrWidth + 'px';
    });
});

// get borderRadius
document.addEventListener("DOMContentLoaded", function(){
    adjustBorderRadius();
});

// board borderRadius
function adjustBorderRadius() {
    let divs = document.querySelectorAll('.board');
    divs.forEach(function(div) {
        let divHeight = div.offsetHeight;
        let borderRadiusValue = divHeight * 0.1;
        div.style.borderRadius = borderRadiusValue + 'px';
    });
}

// article size
document.addEventListener("DOMContentLoaded", function() {
    let avatarWidth = document.querySelector('.avatar').offsetWidth;
    let boardDiv = document.querySelector('.board');
    let articleDiv = boardDiv.querySelector('.article');

    boardDiv.style.width = avatarWidth + 'px';

    let articleWidth = avatarWidth - 2 * 4; // 考虑padding
    articleDiv.style.width = articleWidth + 'px';

    let lineHeight = parseFloat(window.getComputedStyle(articleDiv).lineHeight);
    let articleHeight = 3 * lineHeight; // 假设每行文本的高度相同

    articleDiv.style.height = articleHeight + 'px';

    let paragraphs = articleDiv.querySelectorAll('p');
    paragraphs.forEach(function(paragraph) {
        let paragraphWidth = paragraph.offsetWidth;
        let fontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
        let lines = Math.ceil(paragraphWidth / (articleWidth - fontSize));
        if (lines > 1) {
            paragraph.style.whiteSpace = 'normal';
        }
    });
});

// friends
var friends = [
    {
        link: "https://coppist.github.io", 
        author: "Coppist - 奶茶"
    }, 
    {
        link: "https://tolazyer.gitee.io/artwaves",
        author: "Tolayzer - 帅猫"
    },
    {
        link: "https://zybqw.github.io",
        author: "Zybqw - 猫鱼"
    }
];

var targ = "_blank";

var container = document.getElementById("friends");

friends.forEach(function (fri) {
    var html = `
        <p><a href="${fri.link}" target="${targ}">${fri.author}</a></p>
    `;

    container.innerHTML += html;
});