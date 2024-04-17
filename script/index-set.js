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
    let newArticleWidth = avatarWidth;
    
    document.querySelector('.article').style.width = newArticleWidth + 'px';
});

// connection
document.addEventListener("DOMContentLoaded", function() {
    let paragraphHeight = document.querySelector('p').offsetHeight;

    let connectionImgs = document.querySelectorAll('.conimg');

    connectionImgs.forEach(function(connectionImg) {
        let newConnectionImgWidth = paragraphHeight * 1.2;
        connectionImg.style.width = newConnectionImgWidth + 'px';
    });
});

var connectionImgList = [
    {
        link: "https://github.com/Hatmic",
        img: "./img/icon-github.png"
    },
    {
        link: "#",
        img: "./img/icon-qq.png"
    }
]

var conta = document.getElementById("connection");

connectionImgList.forEach(function (connectionImgl) {
    var html5 = `
        <a href="${connectionImgl.link}" target="_blank">
            <img src="${connectionImgl.img}" alt="" class="conimg">
        </a>
    `;

    conta.innerHTML += html5;
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