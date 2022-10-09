const images = [ "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
//Math.random() * number : output 0~ number-1
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImage";
bgImage.style =
  "position: absolute; width:100%; height:100%; left:0px; top:0px; z-index:-1;opacity:80%;";

document.body.appendChild(bgImage);
/*          append: 맨 뒤에    prepend: 맨 위에 추가
insertBefore() 메소드를 사용하시면 됩니다
이 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다.
const h2 = document.querySelector("#clock")
document.body.insertBefore(bgImage, h2);
두개의 인자중에 앞의 bgImage는 새로운 노드 즉 추가하고 싶은 노드이고 h2는 참조할 노드입니다. 즉 이렇게 코드를 짜시면 h2요소 앞에 bgImage가 추가되게 됩니다.*/

