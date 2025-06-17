let count = localStorage.getItem("reviewCount");
if (!count) {
    count = 0;
} else {
    count = Number(count);
}
count++;
localStorage.setItem("reviewCount", count);
const reviewCountDiv = document.getElementById("review-count");
reviewCountDiv.textContent = `You have completed ${count} review${count !== 1 ? "s" : ""}.`;