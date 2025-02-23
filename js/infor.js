const API_URL = "https://api.balldontlie.io/v1/players/";
const API_KEY = "9145376e-18b8-4f11-aa88-e87fb116ea88";

// Lấy ID cầu thủ từ URL
const urlParams = new URLSearchParams(window.location.search);
const playerId = urlParams.get("id");
async function fetchPlayerDetail() {
    try {
        const response = await fetch(`${API_URL}${playerId}`, {
            method: "GET",
            headers: {
                "Authorization": API_KEY
            }
        });
        const json = await response.json();
        const player = json.data
        // Hiển thị thông tin cầu thủ
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

    } catch (error) {
        console.error("Error fetching player details:", error);
    }
}

// Quay lại trang trước
function goBack() {
    window.history.back();
}

// Gọi hàm để lấy thông tin cầu thủ chi tiết
fetchPlayerDetail();
