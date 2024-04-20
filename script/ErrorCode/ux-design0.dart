import 'dart:html';
import 'dart:math' as math;

void main() {
  document.addEventListener('DOMContentLoaded', (event) {
    Element box = querySelector('.box');
    Future.delayed(Duration(milliseconds: 500), () {
      box.classes.add('show');
    });
  });

  document.addEventListener('DOMContentLoaded', (event) {
    List<Element> letters = querySelectorAll('.hatmic');
    Future.delayed(Duration(milliseconds: 2000), () {
      for (var i = letters.length - 1; i >= 0; i--) {
        Future.delayed(Duration(milliseconds: (letters.length - i) * 200), () {
          letters[i].classes.remove('show');
        });
      }
    });
  });

  document.addEventListener('mousemove', (MouseEvent e) {
    Element box = querySelector('#box');
    num mouseX = e.client.x;
    num mouseY = e.client.y;
    num direction = math.cos(mouseX / window.innerWidth * math.pi * 2);
    num offsetY = -10 + (10 * direction);
    box.style.transform = 'translate(-50%, -50%) translateY(${offsetY}px)';
  });
}
