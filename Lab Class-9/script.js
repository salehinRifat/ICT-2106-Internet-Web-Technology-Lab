let formInput = document.getElementById("myForm");

formInput.addEventListener("submit", function (event) {
    event.preventDefault();
    let height = document.getElementById("height").value;
    let width = document.getElementById("width").value;

    if (height === "" || width === "") {
        alert("Please fill in all fields.");
    }
    else {
        let area = parseInt(height) * parseInt(width);
        document.getElementById("result").innerHTML = "Area: "+area;
    }

});

let ans = 10 > 12 ? "10 is greater than 12" : "10 is not greater than 12";
console.log(ans);

