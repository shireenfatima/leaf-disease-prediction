let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/d7EctILn3/';
// label to classify images
let label = "";
let img;
var div,div1;
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  
}

function setup() {
  createCanvas(600, 400);
  title = createDiv('Plant Disease prediction Using Leaf Dataset')
  title.position(150,10)
  title.style('font-size','25px')
 // title.style('color','hotpink')
  input = createFileInput(handleFile);
  input.position(600,60);
  
  createDiv('Agricultural productivity is something on which economy highly depends. This is the one of the reasons that disease detection in plants plays an important role in agriculture field, as having disease in plants are quite natural. If proper care is not taken in this area then it causes serious effects on plants and due to which respective product quality, quantity or productivity is affected');
}

function draw(){
  if (img) {
    image(img, 0, 0, width, height);
  }
}
// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
 div1 = createDiv('Label: ' + results[0].label);
  div1.style('font-size','20px')
 div = createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
   clr =  createDiv('Press -Any Key- to clear the output')
 div.style('font-size','20px')
//clr.style('background','hotpink')
}

function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
  classifier.classify(img, gotResult);
}

function keyPressed(){
  div1.hide()
  div.hide()
   clr.hide()
}