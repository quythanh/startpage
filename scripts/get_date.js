function showTime() {
    const date = new Date();

    const weekday = date.toLocaleString("ja", { weekday: "long" });

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const dateString = `${year}年${month}月${day}日`;
    const timeString = `${hours}時${minutes}分${seconds}秒`;

    document.getElementById("date-display").textContent = `${weekday}, ${dateString} | ${timeString}`;
    setTimeout(showTime, 1000);
}

showTime();
