var block1,block2,block3,block4;
var ball, edges,ballImg,ballImg1,ballImg2,ballImg3,ballImg4;
var music;
var gameState = "play"

function preload(){
    music = loadSound("music.mp3")
    
    ballImg = loadAnimation("white.png")
    ballImg1 = loadAnimation("blue.png")
    ballImg2 = loadAnimation("cyan.png")
    ballImg3 = loadAnimation("orange.png")
    ballImg4 = loadAnimation("yellow.png")
}


function setup(){
    createCanvas(800,600);

    edges = createEdgeSprites();

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "red";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red"

    block4 = createSprite(700,580,200,30)
    block4.shapeColor = "blue"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 8
    ball.velocityY = 4;

    ball.addAnimation("whitecolor",ballImg)
    ball.addAnimation("bluecolor",ballImg1)
    ball.addAnimation("cyancolor",ballImg2)
    ball.addAnimation("orangecolor",ballImg3)
    ball.addAnimation("yellowcolor",ballImg4)

}

function draw() {
    background(rgb(169,169,169));

    textAlign(CENTER)
    textSize(30)
    text("Blue buttons to play sound",width/2,height/4 - 20)
    text("Red buttons to stop sound",width/2,height/4 + 20)
    text("Arrow keys to change direction",width/2,height/4 + 60)

    block1.visible = 1
    block2.visible = 1
    block3.visible = 1
    block4.visible = 1

    ball.changeAnimation("whitecolor",ballImg)
    ball.scale = 0.1
    ball.debug = true
    ball.setCollider("circle",0,0,200)

    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(keyDown("d") || keyDown("right")){
        ball.velocityX = 5
    }

    if(keyDown("a") || keyDown("left")){
        ball.velocityX = -5
    }

    if(keyDown("w") || keyDown("up")){
        ball.velocityY = -5
    }

    if(keyDown("s") || keyDown("down")){
        ball.velocityY = 5
    }

    if(block1.isTouching(ball)){
        //ball.shapeColor = "blue";
        ball.changeAnimation("bluecolor",ballImg1)
        ball.scale = 0.13
        music.play();
        block1.visible = 0
        ball.debug = true
        ball.setCollider("circle",0,0,200)
    }

    if(block2.isTouching(ball)){
        ball.changeAnimation("orangecolor",ballImg3)
        ball.scale = 0.2
        music.play();
        block2.visible = 0
        music.play()
        ball.setCollider("circle",0,0,200)
    }
    

    if(block3.isTouching(ball)){
        ball.changeAnimation("orangecolor",ballImg3)
        ball.scale = 0.2
        music.play();
        block3.visible = 0
        ball.setCollider("circle",0,0,200)
    }

    if(block4.isTouching(ball)){
        music.play();
        block4.visible = 0
        ball.changeAnimation("bluecolor",ballImg1)
        ball.scale = 0.13       
        ball.setCollider("circle",0,0,200)
    }

    if(block4.isTouching(block3)){
        block4.bounceOff(block3)
        block3.bounceOff(block4)
    }

    if(block4.isTouching(block2)){
        block4.bounceOff(block2)
        block2.bounceOff(block4)
    } 

    if(block4.isTouching(block1)){
        block4.bounceOff(block1)
        block1.bounceOff(block4)
    }

    if(block1.isTouching(block2)){
        block1.bounceOff(block2)
        block2.bounceOff(block1)
    }

    if(block1.isTouching(block3)){
        block1.bounceOff(block3)
        block3.bounceOff(block1)
    }

    if(block2.isTouching(block3)){
        block2.bounceOff(block3)
        block3.bounceOff(block2)
    }

    if(ball.isTouching(block2) || ball.isTouching(block3)){
        music.stop()
    }

/*if(block1.visible === 0 && block2.visible === 0 && block3.visible === 0 && 
    block4.visible === 0 && ball.y < 500){

        block1.visible = 1
        block2.visible = 1
        block3.visible = 1
        block4.visible = 1
        }*/

    drawSprites();
}
