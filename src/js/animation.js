/*
* 화면 애니메이션 관련 스크립트
*
* Tweenmax 라이브러리를 사용하거나 직접 스크립트를 작성합니다.
*
* JS Dependencies
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */
  //
  // hero 
  //

// function imageTween(ele) {
//   var $target = $(ele).children(), timeline = new TimelineMax({delay:-1,paused: true, repeat:-1, repeatDelay:2});
//   // init
//   $target.each(function(i){
//     var time = i + 1, imgTween = new TimelineMax({yoyo:true});
//     imgTween.fromTo($target[i], 1, {zIndex:1,ease:Power4.easeIn}, {zIndex:2,ease:Power4.easeOut}, time);
//     timeline.add(imgTween);
//   });

//   timeline.play();
// }

function imageTween(ele) {
    // 상단 페이드인 페이드아웃 슬라이드 쇼

    var $slides = $(ele).children();          //slides 
    var currentSlide = 0;               //keep track on the current slide
    var stayTime = 3;               //time the slide stays
    var slideTime = 1.3;                //fade in / fade out time

    TweenMax.set($slides.filter(":gt(0)"), {autoAlpha:0}); //we hide all images after the first one
    TweenMax.delayedCall(stayTime, nextSlide);             //start the slideshow

    function nextSlide(){                   
        TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );     //fade out the old slide
        currentSlide = ++currentSlide % $slides.length;                         //find out which is the next slide          
        TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );     //fade in the next slide
        TweenMax.delayedCall(stayTime, nextSlide);                             //wait a couple of seconds before next slide
    }
}

imageTween('.bg_sceneTween');
imageTween('.contribute_img.img1');
imageTween('.contribute_img.img2');
imageTween('.rnd-imgTweem');

// function drawsvg(ele) {
//   var $target =$(ele);

// }

// TweenMax.staggerFrom("#line path", 2, {drawSVG:"50% 50%",transformOrigin:"0% 100%"}, 0.1);


// hero 

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.hero_title1 = function() {
    this.initialize(img.hero_title1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,250);


(lib.hero_title2 = function() {
    this.initialize(img.hero_title2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,229);


(lib.hero_title3 = function() {
    this.initialize(img.hero_title3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,224);


(lib.hero_title4 = function() {
    this.initialize(img.hero_title4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,739,275);


(lib.kanarb = function() {
    this.initialize(img.kanarb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,497,423);


(lib.map_greydot = function() {
    this.initialize(img.map_greydot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1181,709);


(lib.map_orangedot = function() {
    this.initialize(img.map_orangedot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1181,709);


(lib.txt4_gp = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.hero_title4();
    this.instance.parent = this;
    this.instance.setTransform(-270.7,-27.7,0.733,0.733);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.7,-27.7,541.5,201.5);


(lib.txt3_gp = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.hero_title3();
    this.instance.parent = this;
    this.instance.setTransform(-91.9,-82,0.733,0.733);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-82,184,164.1);


(lib.txt2_gp = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.hero_title2();
    this.instance.parent = this;
    this.instance.setTransform(-66.3,-83.9,0.733,0.733);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-83.9,132.6,167.8);


(lib.txt1_gp = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.hero_title1();
    this.instance.parent = this;
    this.instance.setTransform(-99.3,-91.6,0.733,0.733);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-91.6,198.6,183.2);


(lib.ral_gp = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.kanarb();
    this.instance.parent = this;
    this.instance.setTransform(-182.1,-154.9,0.733,0.733);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.1,-154.9,364.2,310);


(lib.map2_gp = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.map_orangedot();
    this.instance.parent = this;
    this.instance.setTransform(-590.5,-354.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-590.5,-354.5,1181,709);


(lib.map1_gp = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.map_greydot();
    this.instance.parent = this;
    this.instance.setTransform(-590.5,-354.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-590.5,-354.5,1181,709);


// stage content:
(lib.hero = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // timeline functions:
    this.frame_437 = function() {
        /* Stop at This Frame
        The  timeline will stop/pause at the frame where you insert this code.
        Can also be used to stop/pause the timeline of movieclips.
        */
        
        //this.stop();
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(437).call(this.frame_437).wait(1));

    // Layer 8
    this.instance = new lib.txt1_gp("synched",0);
    this.instance.parent = this;
    this.instance.setTransform(457.5,253.8,2.037,2.037,0,0,0,0.1,0.1);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:457.3,y:253.6,alpha:1},13,cjs.Ease.circIn).wait(19).to({startPosition:0},0).to({x:641.2,y:398.9},9).wait(375));

    // Layer 7
    this.instance_1 = new lib.txt2_gp("synched",0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(594.3,246.2,2.316,2.316,0,0,0,0,0.1);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:245.9,alpha:1},13,cjs.Ease.circIn).wait(13).to({startPosition:0},0).to({x:778.2,y:391.2},9).wait(375));

    // Layer 5
    this.instance_2 = new lib.txt3_gp("synched",0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(731,244.1,2.169,2.169);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},12,cjs.Ease.circIn).wait(9).to({startPosition:0},0).to({x:914.9,y:389.3},9).wait(375));

    // Layer 6
    this.instance_3 = new lib.txt4_gp("synched",0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(628.8,335.8,1.428,1.428);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},11,cjs.Ease.circIn).wait(4).to({startPosition:0},0).to({x:812.7,y:481},9).wait(375));

    // ral
    this.instance_4 = new lib.ral_gp("synched",0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(615.1,358,0.132,0.132);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360,alpha:0.941},17,cjs.Ease.quadIn).to({regY:0.1,scaleX:0.46,scaleY:0.46,x:777.7,y:174.1},9).wait(375));

    // Layer 1 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_14 = new cjs.Graphics().p("AhpBqQgsgsAAg+QAAg+AsgrQArgtA+ABQA/gBArAtQAtArgBA+QABA+gtAsQgrAsg/AAQg+AAgrgsg");
    var mask_graphics_15 = new cjs.Graphics().p("AlbFcQiRiQABjMQgBjLCRiQQCQiQDLAAQDMAACQCQQCQCQAADLQAADMiQCQQiQCQjMAAQjLAAiQiQg");
    var mask_graphics_16 = new cjs.Graphics().p("ApNJOQj1j1ABlZQgBlZD1j0QD0j0FZAAQFaAAD0D0QD0D0AAFZQAAFZj0D1Qj0D0laAAQlZAAj0j0g");
    var mask_graphics_17 = new cjs.Graphics().p("As/NAQlZlZABnnQgBnmFZlZQFYlYHnAAQHnAAFZFYQFYFZAAHmQAAHnlYFZQlZFYnnAAQnnAAlYlYg");
    var mask_graphics_18 = new cjs.Graphics().p("AwxQxQm8m9AAp0QAAp0G8m9QG9m8J0AAQJ1AAG9G8QG8G9AAJ0QAAJ0m8G9Qm9G9p1AAQp0AAm9m9g");
    var mask_graphics_19 = new cjs.Graphics().p("A0jUjQogogAAsDQAAsCIgohQIhogMCAAQMDAAIhIgQIgIhAAMCQAAMDogIgQohIhsDAAQsCAAohohg");
    var mask_graphics_20 = new cjs.Graphics().p("A4UYVQqFqFAAuQQAAuPKFqFQKFqFOPAAQOQAAKFKFQKFKFAAOPQAAOQqFKFQqFKFuQAAQuPAAqFqFg");
    var mask_graphics_21 = new cjs.Graphics().p("A8GcHQrqrpABweQgBwdLqrpQLprpQdAAQQeAALpLpQLpLpAAQdQAAQerpLpQrpLpweAAQwdAArprpg");
    var mask_graphics_22 = new cjs.Graphics().p("A/4f5QtNtNAAysQAAyrNNtNQNNtNSrAAQSsAANNNNQNNNNAASrQAASstNNNQtNNNysAAQyrAAtNtNg");
    var mask_graphics_23 = new cjs.Graphics().p("EgjqAjqQuxuxAA05QAA04OxuyQOyuxU4AAQU6AAOxOxQOxOyAAU4QAAU5uxOxQuxOy06AAQ04AAuyuyg");
    var mask_graphics_24 = new cjs.Graphics().p("EgncAncQwVwVAA3HQAA3GQVwWQQWwVXGAAQXHAAQWQVQQVQWAAXGQAAXHwVQVQwWQW3HAAQ3GAAwWwWg");
    var mask_graphics_25 = new cjs.Graphics().p("EgrNArOQx6x5AA5VQAA5UR6x5QR5x6ZUAAQZVAAR5R6QR6R5AAZUQAAZVx6R5Qx5R65VAAQ5UAAx5x6g");
    var mask_graphics_26 = new cjs.Graphics().p("EgvAAvAQzdzeAA7iQAA7iTdzeQTfzdbhAAQbjAATdTdQTeTeAAbiQAAbizeTeQzdTe7jAAQ7hAAzfzeg");
    var mask_graphics_27 = new cjs.Graphics().p("EgyxAyyQ1C1CAA9wQAA9vVC1CQVC1CdvAAQdwAAVCVCQVCVCAAdvQAAdw1CVCQ1CVC9wAAQ9vAA1C1Cg");
    var mask_graphics_28 = new cjs.Graphics().p("Eg2jA2jQ2m2lAA/+QAA/9Wm2mQWm2mf9AAQf+AAWlWmQWnWmAAf9QAAf+2nWlQ2lWn/+AAQ/9AA2m2ng");
    var mask_graphics_29 = new cjs.Graphics().p("Eg6VA6VUgYKgYKAAAgiLUAAAgiKAYKgYLUAYLgYKAiKAAAUAiMAAAAYJAYKUAYLAYLAAAAiKUAAAAiLgYLAYKUgYJAYLgiMAAAUgiKAAAgYLgYLg");
    var mask_graphics_30 = new cjs.Graphics().p("Eg+HA+HUgZugZuAAAgkZUAAAgkYAZugZvUAZvgZuAkYAAAUAkZAAAAZuAZuUAZvAZvAAAAkYUAAAAkZgZvAZuUgZuAZvgkZAAAUgkYAAAgZvgZvg");
    var mask_graphics_31 = new cjs.Graphics().p("EhB5BB5UgbSgbSAAAgmnUAAAgmmAbSgbSUAbTgbTAmmAAAUAmmAAAAbTAbTUAbTAbSAAAAmmUAAAAmngbTAbSUgbTAbTgmmAAAUgmmAAAgbTgbTg");
    var mask_graphics_32 = new cjs.Graphics().p("EhFqBFrUgc3gc2AAAgo1UAAAgozAc3gc3UAc3gc3AozAAAUAo0AAAAc3Ac3UAc3Ac3AAAAozUAAAAo1gc3Ac2Ugc3Ac3go0AAAUgozAAAgc3gc3g");
    var mask_graphics_33 = new cjs.Graphics().p("EhJdBJcUgeageaAAAgrCUAAAgrBAeagebUAecgebArBAAAUArCAAAAebAebUAebAebAAAArBUAAAArCgebAeaUgebAecgrCAAAUgrBAAAgecgecg");
    var mask_graphics_34 = new cjs.Graphics().p("EhNOBNOUgf/gf+AAAgtQUAAAgtPAf/gf/UAf/gf/AtPAAAUAtQAAAAf+Af/UAgAAf/AAAAtPUAAAAtQggAAf+Ugf+AgAgtQAAAUgtPAAAgf/ggAg");
    var mask_graphics_35 = new cjs.Graphics().p("EhRABRAUghjghjAAAgvdUAAAgvcAhjghkUAhkghjAvcAAAUAvdAAAAhjAhjUAhkAhkAAAAvcUAAAAvdghkAhjUghjAhkgvdAAAUgvcAAAghkghkg");
    var mask_graphics_36 = new cjs.Graphics().p("EhUyBUyUgjHgjHAAAgxrUAAAgxqAjHgjIUAjIgjHAxqAAAUAxrAAAAjHAjHUAjIAjIAAAAxqUAAAAxrgjIAjHUgjHAjIgxrAAAUgxqAAAgjIgjIg");
    var mask_graphics_37 = new cjs.Graphics().p("EhYjBYkUgksgkrAAAgz5UAAAgz4AksgkrUAkrgksAz4AAAUAz5AAAAkrAksUAksAkrAAAAz4UAAAAz5gksAkrUgkrAksgz5AAAUgz4AAAgkrgksg");
    var mask_graphics_38 = new cjs.Graphics().p("EhcVBcVUgmQgmPAAAg2GUAAAg2FAmQgmQUAmQgmQA2FAAAUA2GAAAAmQAmQUAmQAmQAAAA2FUAAAA2GgmQAmPUgmQAmRg2GAAAUg2FAAAgmQgmRg");
    var mask_graphics_39 = new cjs.Graphics().p("EhgHBgHUgn0gnzAAAg4UUAAAg4SAn0gn1UAn0gn0A4TAAAUA4UAAAAnzAn0UAn1An1AAAA4SUAAAA4Ugn1AnzUgnzAn0g4UAAAUg4TAAAgn0gn0g");
    var mask_graphics_40 = new cjs.Graphics().p("Ehj5Bj5UgpYgpXAAAg6iUAAAg6gApYgpZUApYgpYA6hAAAUA6iAAAApXApYUApZApZAAAA6gUAAAA6igpZApXUgpXApYg6iAAAUg6hAAAgpYgpYg");
    var mask_graphics_41 = new cjs.Graphics().p("EhnrBnrUgq8gq8AAAg8vUAAAg8uAq8gq8UAq9gq9A8uAAAUA8vAAAAq8Aq9UAq9Aq8AAAA8uUAAAA8vgq9Aq8Ugq8Aq8g8vAAAUg8uAAAgq9gq8g");
    var mask_graphics_42 = new cjs.Graphics().p("EhrdBrdUgsggsgAAAg+9UAAAg+7AsggshUAshgshA+8AAAUA+9AAAAsgAshUAshAshAAAA+7UAAAA+9gshAsgUgsgAsgg+9AAAUg+8AAAgshgsgg");
    var mask_graphics_43 = new cjs.Graphics().p("EhvOBvPUguFguEAAAhBLUAAAhBJAuFguFUAuEguFBBKAAAUBBLAAAAuDAuFUAuGAuFAAABBJUAAABBLguGAuEUguDAuEhBLAAAUhBKAAAguEguEg");
    var mask_graphics_44 = new cjs.Graphics().p("EhzABzBUgvpgvoAAAhDZUAAAhDXAvpgvpUAvpgvoBDXgABUBDYAABAvoAvoUAvqAvpAAABDXUAAABDZgvqAvoUgvoAvohDYAAAUhDXAAAgvpgvog");

    this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_15,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_16,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_17,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_18,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_19,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_20,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_21,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_22,x:950,y:291}).wait(1).to({graphics:mask_graphics_23,x:950,y:291}).wait(1).to({graphics:mask_graphics_24,x:950,y:291}).wait(1).to({graphics:mask_graphics_25,x:950,y:291}).wait(1).to({graphics:mask_graphics_26,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_27,x:950,y:291}).wait(1).to({graphics:mask_graphics_28,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_29,x:950.1,y:291.1}).wait(1).to({graphics:mask_graphics_30,x:950,y:291}).wait(1).to({graphics:mask_graphics_31,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_32,x:950,y:291}).wait(1).to({graphics:mask_graphics_33,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_34,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_35,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_36,x:950.1,y:291}).wait(1).to({graphics:mask_graphics_37,x:950,y:291}).wait(1).to({graphics:mask_graphics_38,x:950,y:291}).wait(1).to({graphics:mask_graphics_39,x:950,y:291}).wait(1).to({graphics:mask_graphics_40,x:950,y:291}).wait(1).to({graphics:mask_graphics_41,x:950,y:291}).wait(1).to({graphics:mask_graphics_42,x:950,y:291}).wait(1).to({graphics:mask_graphics_43,x:950,y:291}).wait(1).to({graphics:mask_graphics_44,x:950,y:291}).wait(394));

    // map2
    this.instance_5 = new lib.map2_gp("synched",0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(600.5,359.5);
    this.instance_5._off = true;

    var maskedShapeInstanceList = [this.instance_5];

    for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(30).to({startPosition:0},0).wait(394));

    // map1
    this.instance_6 = new lib.map1_gp("synched",0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(600.5,359.5,0.275,0.275);
    this.instance_6.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.quadOut).to({scaleX:1.05,scaleY:1.05},3).to({scaleX:1,scaleY:1},2).wait(30).to({startPosition:0},0).wait(394));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958,522,541.5,347.4);
// library properties:
lib.properties = {
    id: '680857A06202574091B7AFEA8C83D517',
    width: 1180,
    height: 708,
    fps: 24,
    color: "#222222",
    opacity: 1.00,
    manifest: [
        {src:"img/hero/hero_title1.png?1508131847123", id:"hero_title1"},
        {src:"img/hero/hero_title2.png?1508131847123", id:"hero_title2"},
        {src:"img/hero/hero_title3.png?1508131847123", id:"hero_title3"},
        {src:"img/hero/hero_title4.png?1508131847123", id:"hero_title4"},
        {src:"img/hero/kanarb.png?1508131847123", id:"kanarb"},
        {src:"img/hero/map_greydot.png?1508131847123", id:"map_greydot"},
        {src:"img/hero/map_orangedot.png?1508131847123", id:"map_orangedot"}
    ],
    preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
    an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if(an.bootcompsLoaded.length > 0) {
        for(var i=0; i<an.bootcompsLoaded.length; ++i) {
            fnCallback(an.bootcompsLoaded[i]);
        }
    }
};

an.compositions = an.compositions || {};
an.compositions['680857A06202574091B7AFEA8C83D517'] = {
    getStage: function() { return exportRoot.getStage(); },
    getLibrary: function() { return lib; },
    getSpriteSheet: function() { return ss; },
    getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for(var j=0; j<an.bootstrapListeners.length; j++) {
        an.bootstrapListeners[j](id);
    }
}

an.getComposition = function(id) {
    return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("680857A06202574091B7AFEA8C83D517");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images=comp.getImages();    
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }    
}
function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(var i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    var preloaderDiv = document.getElementById("_preload_div_");
    preloaderDiv.style.display = 'none';
    canvas.style.display = 'block';
    exportRoot = new lib.hero();
    stage = new lib.Stage(canvas);
    stage.addChild(exportRoot); 
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }       
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {      
        var lastW, lastH, lastS=1;      
        window.addEventListener('resize', resizeCanvas);        
        resizeCanvas();     
        function resizeCanvas() {           
            var w = lib.properties.width, h = lib.properties.height;            
            var iw = window.innerWidth, ih=window.innerHeight;          
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;          
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                }               
                else if(!isScale) {                 
                    if(iw<w || ih<h)                        
                        sRatio = Math.min(xRatio, yRatio);              
                }               
                else if(scaleType==1) {                 
                    sRatio = Math.min(xRatio, yRatio);              
                }               
                else if(scaleType==2) {                 
                    sRatio = Math.max(xRatio, yRatio);              
                }           
            }           
            canvas.width = w*pRatio*sRatio;         
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w*sRatio+'px';             
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;           
            stage.scaleY = pRatio*sRatio;           
            lastW = iw; lastH = ih; lastS = sRatio;     
        }
    }
    makeResponsive(false,'both',false,1);   
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

init();