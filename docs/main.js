/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var canvasBody = document.querySelector(\"canvas\"),\n\t\t\tcanvas = canvasBody.getContext(\"2d\"),\n\t\t\t\n\t\t\tw = canvasBody.width = window.innerWidth, //Full width\n\t\t\th = canvasBody.height = window.innerHeight, //Full height\n\t\t\t\n\t\t\ttick = 0, //Tick in time\n\t\t\t\n\t\t\t//YOU CAN CHANGE OPTIONS HERE. DO NOT REALLY MESS WITH STUFF BELOW THAT\n\t\t\topts = { //Options, you can change those\n\t\t\t\tbackgroundColor: \"white\",\n\t\t\t\tparticleColor: \"#fcfcfc\",\n        opacity: 0.2,\n\t\t\t\tparticleAmount: 60,\n\t\t\t\tdefaultSpeed: 0.1,\n\t\t\t\taddedSpeed: 0.1,\n\t\t\t\t\n\t\t\t\tdefaultRadius: 2,\n\t\t\t\taddedRadius: 10,\n\t\t\t\t\n\t\t\t\tcommunicationRadius: 150, //The radius for the line\n\t\t\t},\n\t\t\tparticles = [],\n\t\t\t\n\t\t\tParticle = function(Xpos, Ypos){ \n\t\t\t\tthis.x = Xpos ? Xpos : Math.random()*w; //If there is not position stated, it takes a random position\n\t\t\t\tthis.y = Ypos ? Ypos : Math.random()*h; //Same here\n\t\t\t\tthis.speed = opts.defaultSpeed + Math.random()*opts.addedSpeed; //Speed + a bit of random one\n\t\t\t\tthis.directionAngle = Math.floor(Math.random()*360); //The angle of this particle its moving. !!!! TRUE ONLY ON INIT\n\t\t\t\tthis.color = opts.particleColor;\n\t\t\t\tthis.radius = opts.defaultRadius + Math.random()*opts.addedRadius; //Radius + a bit of random radius\n        if(this.radius >= 5 ){this.shrinkOrGrow = 'shrink'}else{this.shrinkOrGrow = 'grow'};\n\t\t\t\tthis.d = { //Object, stores directions. Computes directions according to the random this.directionAngle\n\t\t\t\t\tx: Math.cos(this.directionAngle)*this.speed,\n\t\t\t\t\ty: Math.sin(this.directionAngle)*this.speed\n\t\t\t\t};\n\t\t\t\tthis.update = function(){ //The update function. The function that calculates next coordinates\n\t\t\t\t\tthis.border(); //Checks if this particles touches the border and THEN computes the next coordinates\n\t\t\t\t\tthis.x += this.d.x; //Just adding the direction to the X\n\t\t\t\t\tthis.y += this.d.y; //Same but with Y\n          if(this.shrinkOrGrow == 'shrink'){this.radius -= 0.02};\n          if(this.shrinkOrGrow == 'grow'){this.radius += 0.02};\n          if(this.radius <= opts.defaultRadius){this.shrinkOrGrow = 'grow'}\n          if(this.radius >= opts.addedRadius){this.shrinkOrGrow = 'shrink'}\n\t\t\t\t};\n\t\t\t\tthis.border = function(){ //The border function. Checks if this thing touches the border\n\t\t\t\t\tif(this.x >= w || this.x <= 0){ //X walls\n\t\t\t\t\t\tthis.d.x *= -1;\n\t\t\t\t\t}\n\t\t\t\t\tif(this.y >= h || this.y <= 0){ //Floor and ceiling\n\t\t\t\t\t\tthis.d.y *= -1;\n\t\t\t\t\t}\n\t\t\t\t\tthis.x > w ? this.x = w : this.x; //This is really important.\n\t\t\t\t\tthis.y > h ? this.y = h : this.y; //Same\n\t\t\t\t\tthis.x < 0 ? this.x = 0 : this.x; //Same\n\t\t\t\t\tthis.y < 0 ? this.y = 0 : this.y; //Same\n\t\t\t\t\t/* line ~49 explanation\n\t\t\t\t\t\tBecause sometimes the speed of the particle can be faster, so it doesn't touch the border - it goes through. And when it goes back it doesn't go all the way inside - it stucks there. So, you have to set the X to the point when it touches. Same with Y\n\t\t\t\t\t*/\n\t\t\t\t\t\n\t\t\t\t};\n\t\t\t\tthis.draw = function(){ //Just draws the points. Pretty easy. Takes the coords, color, radius - draws.\n\t\t\t\t\tcanvas.beginPath();\n\t\t\t\t\tcanvas.arc(this.x, this.y, this.radius, 0, Math.PI*2);\n          \n          // canvas.shadowColor = 'white';\n          // canvas.shadowBlur= this.radius;\n          \n          // Destroys performance\n          // canvas.filter = 'blur(1px)';\n          var gradient = canvas.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);\n          gradient.addColorStop(0, 'gray');\n          gradient.addColorStop(1, 'transparent');\n\t\t\t\t\t\n          canvas.closePath();\n\t\t\t\t\tcanvas.fillStyle = gradient;\n\t\t\t\t\tcanvas.fill();\n\t\t\t\t};\n\t\t\t},\n\t\t\tcheckDistance = function(x1, y1, x2, y2){ //You got it. The point on the graph distance formula.\n\t\t\t\treturn Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n\t\t\t},\n\t\t\t//Here goes the function that makes lines!\n\t\t\t// @param point1 -\tThe point that check for neighboors\n\t\t\t// @param father - \tThe array the point suppose to take thing from\n\t\t\tcommunicatePoints = function(point1, father){ \n\t\t\t\tfor(var i = 0; i < father.length; i++){\n\t\t\t\t\tvar distance = checkDistance(point1.x, point1.y, father[i].x, father[i].y);\n\t\t\t\t\tvar opacity = 1 - distance/opts.communicationRadius;\n\t\t\t\t\tif (opacity > 0){ //Draws the line\n\t\t\t\t\t\tcanvas.lineWidth = opacity;\n\t\t\t\t\t\tcanvas.strokeStyle = \"rgba(255,255,255,0.5)\";\n\t\t\t\t\t\tcanvas.beginPath();\n\t\t\t\t\t\tcanvas.moveTo(point1.x, point1.y);\n\t\t\t\t\t\tcanvas.lineTo(father[i].x, father[i].y);\n            canvas.shadowBlur=0;\n\t\t\t\t\t\tcanvas.closePath();\n\t\t\t\t\t\tcanvas.stroke();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\n\tfunction setup(){ //Function called once to set everything up\n\t\tfor(var i = 0; i < opts.particleAmount; i++){\n\t\t\tparticles.push( new Particle() );\n\t\t}\n\t\twindow.requestAnimationFrame(loop);\n\t}\n\t\n\tfunction loop(){ //Function of loop that will be called for a frame of the animation\n\t\twindow.requestAnimationFrame(loop);\n\t\ttick++;\n\t\t\n\t\t//Drawing the background. Basically clearing the frame that was before\n\t\tcanvas.clearRect(0, 0, w, h);\n\t\t\n\t\t//Executing particle functions\n\t\tfor(var i = 0; i < particles.length; i++){\n\t\t\tparticles[i].update();\n\t\t\tparticles[i].draw();\n\t\t}\n\t\t//Executing lines\n\t\tfor(var a = 0; a < particles.length; a++){\n\t\t\tcommunicatePoints(particles[a], particles);\n\t\t}\n\t}\n\t\n\t//Executing the animation\n\tsetup();\n\t\n\t//Some event listeners for backup to look professional\n\twindow.addEventListener(\"resize\", function(){\n\t\tw = canvasBody.width = window.innerWidth;\n\t\th = canvasBody.height = window.innerHeight;\n\t});\n\t\n\t//The thing that adds a point. Basically, we pass the coords of the mouse. And they are applied instead of randomness. Check the line 26, 28 to know\n\t// canvasBody.addEventListener(\"click\", function(e){\n\t// \tparticles.push( new Particle(e.pageX, e.pageY) );\n\t// \tconsole.log(particles.length);\n\t// });\n\t//The thing that removes a point.\n\tcanvasBody.addEventListener(\"contextmenu\", function(e){\n\t\te.preventDefault();\n\t\tparticles.splice(particles.length - 1, 1); //Takes the last thing from the particles[];\n\t});\n\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;