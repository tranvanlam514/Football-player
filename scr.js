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
                <td>${player.team ? player.team.city : "Unknown"}</td>
            `;

            // Thêm sự kiện click để hiển thị thông tin chi tiết
            playerRow.addEventListener("click", function () {
                showPlayerDetails(player);
            });

            container.appendChild(playerRow);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Hàm hiển thị thông tin chi tiết cầu thủ
function showPlayerDetails(player) {
    document.getElementById("player-name").innerText = player.first_name +" "+ player.last_name;
    document.getElementById("player-position").innerText = player.position || "N/A";
    document.getElementById("player-height").innerText = player.height;
    document.getElementById("player-weight").innerText = player.weight;
    document.getElementById("player-jersey_number").innerText = player.jersey_number;
    document.getElementById("player-college").innerText = player.college;
    document.getElementById("player-nationality").innerText = player.country;
    document.getElementById("player-draft_year").innerText = player.draft_year;
    document.getElementById("player-draft_round").innerText = player.draft_round;
    document.getElementById("player-team").innerText = player.team.full_name;
    document.getElementById("player-modal").style.display = "block";
}
// Đóng modal khi nhấn vào nút đóng
document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("player-modal").style.display = "none";
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener("click", function (event) {
    const modal = document.getElementById("player-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Gọi hàm lấy dữ liệu
fetchFootballData();
