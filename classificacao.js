const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome do herói: ", (nome) => {
  rl.question("Digite a quantidade de XP: ", (xpInput) => {
    const xp = parseInt(xpInput);
    let nivel = "";
    let cor = (texto) => texto; // Função padrão caso nada combine

    if (xp < 1000) {
      nivel = "Ferro 🛠️";
      cor = chalk.gray;
    } else if (xp <= 2000) {
      nivel = "Bronze 🧱";
      cor = chalk.hex("#cd7f32");
    } else if (xp <= 5000) {
      nivel = "Prata ⚔️";
      cor = chalk.white;
    } else if (xp <= 7000) {
      nivel = "Ouro 🪙";
      cor = chalk.yellow;
    } else if (xp <= 8000) {
      nivel = "Platina 💎";
      cor = chalk.cyan;
    } else if (xp <= 9000) {
      nivel = "Ascendente 🚀";
      cor = chalk.magenta;
    } else if (xp <= 10000) {
      nivel = "Imortal 🦾";
      cor = chalk.redBright;
    } else {
      nivel = "Radiante 🌟";
      cor = chalk.greenBright;
    }

    console.log(cor(`O Herói de nome ${nome} está no nível de ${nivel}`));
    rl.close();
  });
});
