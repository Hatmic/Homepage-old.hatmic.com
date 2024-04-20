import 'dart:html';
import 'dart:math' as math;

void main() {
  document.addEventListener('DOMContentLoaded', (event) {
    // img size
    var h1Height = document.querySelector('.nickname')?.offsetHeight ?? 0;
    var newImgHeight = h1Height * 7;
    document.querySelector('.avatar')?.style.height = '${newImgHeight}px';

    // p margin-left and margin-right
    var paragraphs = document.querySelectorAll('.p-intro');
    paragraphs.forEach((paragraph) {
      var marginTop = double.tryParse(window.getComputedStyle(paragraph).marginTop.replaceAll('px', '')) ?? 0;
      var marginBottom = double.tryParse(window.getComputedStyle(paragraph).marginBottom.replaceAll('px', '')) ?? 0;

      paragraph.style.marginLeft = '${marginTop}px';
      paragraph.style.marginRight = '${marginBottom}px';
    });

    // hr size
    var hrWidth = document.querySelector('.nickname').offsetWidth;
    var newHrWidth = hrWidth / 25;
    var hrs = document.querySelectorAll('.hr');
    hrs.forEach((hr) {
      hr.style.width = '${newHrWidth}px';
    });

    // get borderRadius
    adjustBorderRadius();

    // board borderRadius
    void adjustBorderRadius() {
      var divs = document.querySelectorAll('.board');
      divs.forEach((div) {
        var divHeight = div.offsetHeight;
        var borderRadiusValue = divHeight * 0.1;
        div.style.borderRadius = '${borderRadiusValue}px';
      });
    }

    // article size
    var avatarWidth = document.querySelector('.avatar').offsetWidth;
    var newArticleWidth = avatarWidth;
    document.querySelector('.article').style.width = '${newArticleWidth}px';

    // connection
    var paragraphHeight = document.querySelector('p').offsetHeight;
    var connectionImgs = document.querySelectorAll('.conimg');
    connectionImgs.forEach((connectionImg) {
      var newConnectionImgWidth = paragraphHeight * 1.2;
      connectionImg.style.width = '${newConnectionImgWidth}px';
    });

    // connection links
    var connectionImgList = [
      {'link': 'https://github.com/Hatmic', 'img': './img/icon-github.png'},
      {'link': '#', 'img': './img/icon-qq.png'}
    ];

    var conta = document.getElementById('connection');
    connectionImgList.forEach((connectionImgl) {
      var html5 = '''
        <a href="${connectionImgl['link']}" target="_blank">
            <img src="${connectionImgl['img']}" alt="" class="conimg">
        </a>
      ''';
      conta.innerHtml += html5;
    });

    // friends
    var friends = [
      {'link': 'https://coppist.github.io', 'author': 'Coppist - 奶茶'},
      {'link': 'https://tolazyer.gitee.io/artwaves', 'author': 'Tolayzer - 帅猫'},
      {'link': 'https://zybqw.github.io', 'author': 'Zybqw - 猫鱼'}
    ];

    var targ = '_blank';
    var container = document.getElementById('friends');
    friends.forEach((fri) {
      var html = '''
        <p><a href="${fri['link']}" target="$targ">${fri['author']}</a></p>
      ''';
      container.innerHtml += html;
    });
  });
}
