var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["682e458b-73d7-4dfd-9f12-88aa271c9983","20dcef4b-08de-4159-b4bf-ed5621590055","a231befc-9f03-4c1f-9536-823ec8420f24"],"propsByKey":{"682e458b-73d7-4dfd-9f12-88aa271c9983":{"name":"kidportrait_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy/category_faces/kidportrait_05.png","frameSize":{"x":314,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":314,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy/category_faces/kidportrait_05.png"},"20dcef4b-08de-4159-b4bf-ed5621590055":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"a231befc-9f03-4c1f-9536-823ec8420f24":{"name":"american_fries_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H3JeLyLNjBkd8yZWqoVRXr.DuliunK38/category_food/american_fries.png","frameSize":{"x":278,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"H3JeLyLNjBkd8yZWqoVRXr.DuliunK38","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H3JeLyLNjBkd8yZWqoVRXr.DuliunK38/category_food/american_fries.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.

car1.velocityY=8;
car2.velocityY=8;
car3.velocityY=-8;
car4.velocityY=-8;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
   car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
   car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
   car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
//Add the condition to make the sam move left and right
if(keyDown("right")){
sam.x=sam.x+1;
}
if(keyDown("left")){
  sam.x-=1;
}
//Add the condition to reduce the life of sam if it touches the car.
 
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
    sam.x=20;
    sam.y=190;
    life=life+1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
