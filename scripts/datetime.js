try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("error with your code or your browser does not support locale")
}