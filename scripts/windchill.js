function calculateWindChill(tempC, windKmH) {
    if (tempC <= 10 && windKmH > 4.8) {
        const windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmH, 0.16) + 0.3965 * tempC * Math.pow(windKmH, 0.16);
        return windChill.toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wspeed").textContent);
    const chill = calculateWindChill(temp, wind);

    document.getElementById("wchill").textContent = chill;
});