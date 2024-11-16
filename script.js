function convertToFahrenheit() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultCelsius").innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultFahrenheit").innerText = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}

function convertToFeet() {
    const meters = document.getElementById("meters").value;
    const feet = meters * 3.28084; 
    document.getElementById("resultMeters").innerText = `${meters} meters is ${feet.toFixed(2)} feet`;
}

function convertToMeters() {
    const feet = document.getElementById("feet").value;
    const meters = feet / 3.28084; 
    document.getElementById("resultFeet").innerText = `${feet} feet is ${meters.toFixed(2)} meters`;
}

