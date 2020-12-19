var canvas = document.createElement('canvas');
var height = 150;
var width = 250;

canvas.height = height;
canvas.width = width;
var context = canvas.getContext("2d");


var imageData = context.createImageData(width, height);
var data = imageData.data;
for (var i = 0; i < height * width; i++) {
    data[i * 4 + 0] = Math.random() * 256 | 0;
    data[i * 4 + 1] = Math.random() * 256 | 0;
    data[i * 4 + 2] = Math.random() * 256 | 0;
    data[i * 4 + 3] = 150;
}

context.putImageData(imageData, 0, 0);
context.font = "40px arial";
context.fillText(createRandomWord(), 125, 75);


function createData(type, mimetype) {
    var value = canvas.toDataURL(mimetype);
    if (value.indexOf(mimetype) > 0) {
        return {
            type: type,
            value: value
        }
    } else {
        return false;
    }
}

function createRandomWord() {
    var text = "";
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    var text = req.getResponseHeader("capcha");
    return text;
}

document.getElementById('capcha').innerHTML = '<img src=' + createData("png", "image/png").value + '>'