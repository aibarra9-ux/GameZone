const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

const games = {
  bloodborne: {
    title: "Bloodborne",
    heroImage: "../assets/iconos/Portadas/portada_bloodborne.jpg",
    description: "Acción oscura y desafiante con ambientación gótica.",
    rating: 4.8
  },
  minecraft: {
    title: "Minecraft",
    heroImage: "../assets/iconos/Portadas/portada_minecraft.jpg",
    description: "Sandbox de construcción, exploración y supervivencia.",
    rating: 4.8
  }
};

const game = games[gameId];

if (!game) {
  console.error("Juego no encontrado");
}
