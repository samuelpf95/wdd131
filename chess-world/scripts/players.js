const players = [
    { name: "Magnus Carlsen", nationality: "Norway", age: 34, elo: 2837, championships: 5, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/65689fcc-2901-11ea-89bf-cbf2e92c2201.19b95857.160x160o.1bd76d04c6dd.jpeg" },
    { name: "Hikaru Nakamura", nationality: "United States", age: 37, elo: 2804, championships: 5 /* US titles */, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/0c7a2d70-3e2f-11ea-beb5-e1653749346b.af6bfed8.160x160o.c5cfc2cdbb77.jpeg" },
    { name: "Arjun Erigaisi", nationality: "India", age: 22, elo: 2782, championships: 0, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/2c5ae412-93e8-11eb-b363-812424cd84fb.21f56747.160x160o.49d963914822.jpg" },
    { name: "Fabiano Caruana", nationality: "United States", age: 31, elo: 2777, championships: 0, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/0d31346a-65f5-11e9-a2cb-e39a6d2bf50d.420b866c.160x160o.f5f79da6e34b.jpeg" },
    { name: "Gukesh Dommaraju", nationality: "India", age: 19, elo: 2776, championships: 0, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/8a03a834-a91e-11ef-853a-d76c8e7ecf19.8ea9da16.160x160o.03ff7adc5ab5.png" },
    { name: "Nodirbek Abdusattorov", nationality: "Uzbekistan", age: 19, elo: 2767, championships: 1 /* World Rapid 2021 */, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/31312204-98ce-11eb-a526-bf8e17d64341.9d09bea2.160x160o.61a559d690f2.jpg" },
    { name: "R Praggnanandhaa", nationality: "India", age: 18, elo: 2767, championships: 0, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/9bb57ff4-9a62-11eb-bc08-c5e2317685bc.77645c67.160x160o.cd359da7f04c.jpg" },
    { name: "Alireza Firouzja", nationality: "France", age: 20, elo: 2766, championships: 0, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/1c5b7992-3ddf-11ea-9e48-b932e6f44795.72164d45.160x160o.06114e9bc4c2.png" },
    { name: "Wei Yi", nationality: "China", age: 24, elo: 2758, championships: 0, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/fc77c8fe-c0d2-11e8-9953-69dae18ad41c.1ed0c263.160x160o.5a057fa35adc.jpeg" },
    { name: "Ian Nepomniachtchi", nationality: "Russia", age: 33, elo: 2757, championships: 0, imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/cf02cd92-c0a0-11e8-b780-451d887b5ef3.242dbfa0.160x160o.84fdae8bd50b.jpg" }
];
function displayPlayers(list) {
    const container = document.getElementById("players");
    container.innerHTML = "";
    list.forEach(p => {
        const card = document.createElement("section");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const info = document.createElement("p");

        h3.textContent = p.name + " (" + p.nationality + ")";
        img.src = p.imageUrl;
        img.alt = p.name;
        img.loading = "lazy";
        img.width = 200;

        info.innerHTML = `
      Age: ${p.age} <br>
      Elo: ${p.elo} <br>
      Championships won: ${p.championships}
    `;

        card.append(h3, img, info);
        container.appendChild(card);
    });
}

displayPlayers(players);

document.getElementById("champ").addEventListener("click", () => {
  const champions = players.filter(p => p.championships > 0);
  displayPlayers(champions);
});

document.getElementById("young").addEventListener("click", () => {
  const youngPlayers = players.filter(p => p.age < 25);
  displayPlayers(youngPlayers);
});

document.getElementById("usa").addEventListener("click", () => {
  const americans = players.filter(p => p.nationality.toLowerCase().includes("united states"));
  displayPlayers(americans);
});

document.getElementById("india").addEventListener("click", () => {
  const indians = players.filter(p => p.nationality.toLowerCase().includes("india"));
  displayPlayers(indians);
});
document.getElementById("all").addEventListener("click", () => {
  displayPlayers(players);
});