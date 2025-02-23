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
