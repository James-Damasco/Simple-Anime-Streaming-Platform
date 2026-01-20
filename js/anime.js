const API_BASE = "https://api.jikan.moe/v4";
const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");

async function loadAnimeDetails() {
    try {
        const res = await fetch(`${API_BASE}/anime/${animeId}/full`);
        const data = await res.json();
        const anime = data.data;

        document.getElementById("animeDetails").innerHTML = `
        <div class="anime-detail">
        <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}">
        <p>${anime.title}</p>
        <p><strong>Genres:</strong> ${anime.genres.map(g => g.name).join(", ")}</p>
        <p><strong>Rating:</strong> ${anime.score}</p>
        <p><strong>Status:</strong> ${anime.status}</p>
        </div>
        `;
    } catch (error) {
        console.error("Error loading anime details:", error);
    }
}

loadAnimeDetails();
