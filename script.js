let outputCode = document.getElementById("css-code");

//  Adding eventListner to slider                               comment

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider) {
    slider.addEventListener("input", createBlob);
});

//  Adding eventListner to height and width section                comment

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(inp) {
    inp.addEventListener("change", createBlob);
});

//  Creating createBlob fucntion                  comment

function createBlob() {
    let radiusOne = sliders[0].value;       //slider one 
    let radiusTwo = sliders[1].value;       //slider two 
    let radiusThree = sliders[2].value      //slider three 
    let radiusFour = sliders[3].value;      //slider four 

    // console.log(radiusOne, radiusTwo, radiusThree, radiusFour);

    let blobHeight = inputs[0].value;        // taking value from blob height section
    let blobWidth = inputs[1].value;         // taking value from blob width section

    // console.log(blobHeight, blobWidth)

// Generating border radius                comment

let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`

console.log(borderRadius)

// Adding generated border radius to blob            comment

document.getElementById("blob").style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px`;

// Generating css code of blob                         comment
outputCode.value = `border-radius: ${borderRadius};`;

}
// Copying generated code to clipboard                comment

document.getElementById("copy").addEventListener('click', function() {
    outputCode.select();
    document.execCommand('copy');
    alert('Code copied');
});

// Calling function
createBlob();

