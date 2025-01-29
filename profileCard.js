function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  document.getElementById("utc-time").textContent = utcTime;
}
updateTime();
