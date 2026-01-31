// Obtener ID del juego desde la URL
const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

// Base de datos simple de juegos
const gamesData = {
    minecraft: {
        title: "Minecraft",
        heroImg: "../assets/imagenes/juegos/minecraft/img_principal.jpg",
        aboutImg: "../assets/imagenes/juegos/minecraft/img_sobrejuego.webp", // opcional
        description: "Minecraft es un juego de construcción, exploración y supervivencia en un mundo abierto generado de forma procedural, donde los jugadores pueden crear, explorar y sobrevivir solos o con amigos.",
        release: "18 de noviembre de 2011",
        developer: "Mojang Studios",
        publisher: "Mojang Studios",

        requirements: {
          minimum: {
            so: "Windows 10 (64-bit)",
            cpu: "Intel Core i3",
            ram: "8 GB RAM",
            gpu: "Intel HD Graphics 4000 / GTX 460",
            storage: "4 GB"
          },
          recommended: {
            so: "Windows 11 (64-bit)",
            cpu: "Intel Core i5",
            ram: "16 GB RAM",
            gpu: "GTX 1060 / RX 580",
            storage: "4 GB SSD"
          }
        },

        stores: [
          {
            name: "Steam",
            logo: "../assets/iconos/stores/logo_steam.jpg",
            price: 299,
            link: "https://store.steampowered.com/..."
          },
          {
            name: "Epic Games",
            logo: "../assets/iconos/stores/logo_epic_games.jpg",
            price: 349,
            link: "https://store.epicgames.com/..."
          },
          {
            name: "G2A",
            logo: "../assets/iconos/stores/logo_G2A.png",
            price: 279,
            link: "https://www.g2a.com/..."
          }
        ],

        ratingStars: "★★★★★",
        ratingText: "4.8 / 5",
        opinion: "Minecraft es uno de los juegos más influyentes de la historia. Destaca por su creatividad ilimitada, enorme comunidad y constante soporte, siendo ideal tanto para jugadores casuales como para creadores avanzados.",
        
        recommendations: {
          goodFor: [
            "Jugadores creativos",
            "Jugar con amigos",
            "Todas las edades"
          ],
          notFor: [
            "Buscas acción constante",
            "Quieres gráficos realistas",
            "Prefieres historias guiadas"
          ]
        }

    }
};


const game = gamesData[gameId];

if (!game) {
    console.error("Juego no encontrado:", gameId);
} else {
    // Título
    document.getElementById("game-title").textContent = game.title;
    document.title = `${game.title} | GameZone`;

    // Imágenes
    document.getElementById("game-hero-img").src = game.heroImg;
    document.getElementById("about-game-img").src = game.aboutImg;

    // Descripción
    document.getElementById("game-description").textContent = game.description;

    // Meta
    document.getElementById("game-release").innerHTML = `📅<strong>Fecha de lanzamiento:</strong> ${game.release}`;
    document.getElementById("game-dev").innerHTML = `🛠️<strong>Desarrollador:</strong> ${game.developer}`;
    document.getElementById("game-publisher").innerHTML = `🏢<strong>Editor:</strong> ${game.publisher}`;

    // Requisitos mínimos
    document.getElementById("min-so").textContent = game.requirements.minimum.so;
    document.getElementById("min-cpu").textContent = game.requirements.minimum.cpu;
    document.getElementById("min-ram").textContent = game.requirements.minimum.ram;
    document.getElementById("min-gpu").textContent = game.requirements.minimum.gpu;
    document.getElementById("min-storage").textContent = game.requirements.minimum.storage;

    // Requisitos recomendados
    document.getElementById("rec-so").textContent = game.requirements.recommended.so;
    document.getElementById("rec-cpu").textContent = game.requirements.recommended.cpu;
    document.getElementById("rec-ram").textContent = game.requirements.recommended.ram;
    document.getElementById("rec-gpu").textContent = game.requirements.recommended.gpu;
    document.getElementById("rec-storage").textContent = game.requirements.recommended.storage;

    //Mostrar correctamente en verde la tienda con el mejor precio
    const storeList = document.getElementById("store-list");
    storeList.innerHTML = "";

    // Detectar mejor precio
    const bestPrice = Math.min(...game.stores.map(s => s.price));

    game.stores.forEach(store => {
      const a = document.createElement("a");
      a.href = store.link;
      a.className = "store-card";
      a.target = "_blank";

      if (store.price === bestPrice) {
        a.classList.add("best-price");
      }

      a.innerHTML = `
        <img src="${store.logo}" alt="${store.name}">
        <span>${store.name}</span>
        <span class="price">$${store.price} MXN</span>
        ${store.price === bestPrice ? `<span class="badge">Más barato</span>` : ""}
      `;

      storeList.appendChild(a);
    });

    // Rating
    document.getElementById("game-rating").innerHTML =
        `${game.ratingStars} <span>${game.ratingText}</span>`;

    // Opinión
    document.getElementById("opinion-text").textContent = game.opinion;

    //Recomendado - no recomendado
    const recommendedList = document.getElementById("recommended-list");
    const notRecommendedList = document.getElementById("not-recommended-list");

    recommendedList.innerHTML = "";
    notRecommendedList.innerHTML = "";

    game.recommendations.goodFor.forEach(item => {
      const li = document.createElement("li");
      li.textContent = "✔ " + item;
      recommendedList.appendChild(li);
    });

    game.recommendations.notFor.forEach(item => {
      const li = document.createElement("li");
      li.textContent = "✖ " + item;
      notRecommendedList.appendChild(li);
    });

}
