const API_URL = "https://api.balldontlie.io/v1/players?per_page=10";
const API_KEY = "9145376e-18b8-4f11-aa88-e87fb116ea88";
async function fetchFootballData() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Authorization": API_KEY
            }
        });
        const json = await response.json();
        const players = json.data;
        const container = document.querySelector("#ball-player");
        // Xóa nội dung cũ trước khi thêm dữ liệu mới
        container.innerHTML = "";
        players.forEach(player => {
            // Tạo một hàng mới trong bảng
            const playerRow = document.createElement("tr");
            playerRow.innerHTML = `
                <td>${player.first_name} ${player.last_name}</td>
                <td>${player.position || "N/A"}</td>
                <td>${player.country}</td>
            `;
            container.appendChild(playerRow);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// Gọi hàm lấy dữ liệu
fetchFootballData();
document.addEventListener("DOMContentLoaded", function() {
    let storedUser = JSON.parse(localStorage.getItem("user"));
    let signInBtn = document.getElementById("signin-btn");
    let signUpBtn = document.getElementById("signup-btn");
    if (storedUser) {
        // Hiển thị icon user thay vì nút Sign In
        signInBtn.innerHTML = '<i class="bi bi-person"></i>'
        // Đổi Sign Up thành Log Out
        signUpBtn.innerHTML = '<i class="bi bi-box-arrow-right"></i>';
        // Gán sự kiện đăng xuất cho signUpBtn
        signUpBtn.addEventListener("click", logout);
    }
});
function logout() {
    let confirmLogout = confirm("Bạn có chắc chắn muốn Log Out không?");
    if (confirmLogout) {
        localStorage.removeItem("user");
        alert("Bạn đã đăng xuất thành công.");
        window.location.href = "signin.html"; // Chuyển hướng sang trang đăng nhập
    }
}