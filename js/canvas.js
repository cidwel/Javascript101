function firstCanvas() {
    let canvasRef = document.getElementById("firstCanvas");
    let ctx = canvasRef.getContext("2d");

    let image = new Image();
    image.src = 'res/yankenpo/rock.png';
    ctx.drawImage(image,image.width/8,0);
    let image2 = new Image();
    image2.src = 'res/yankenpo/paper.png';
    ctx.drawImage(image2,image2.width,0);
    let image3 = new Image();
    image3.src = 'res/yankenpo/scissors.png';
    ctx.drawImage(image3,image3.width/1.8,(image3.height+12.5));
}