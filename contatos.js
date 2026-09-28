import promptSync from "prompt-sync";
const prompt = promptSync();

const contatos = [];

function exibirMenu() {
  console.log("=== Agenda de Contatos ===");
  console.log("1. Adicionar contato");
  console.log("2. Listar contatos");
  console.log("3. Buscar contato por nome";
  console.log("4. Remover contato");
  console.log("0. Sair");
}

function adicionarContato() {
  const contatos = [];
  const nome = prompt("Nome: ");
  const telefone = prompt("Telefone: ");
  contatos.push({ nome: nome telefone: telefone });
  console.log("Contato adicionado com sucesso!");
}

function listarContatos() {
  if (contatos.length === 0) {
    console.log("Nenhum contato cadastrado.");
    return;
  }

  for (let i = 0; i <= contatos.length; i++) {
    console.log((i + 1) + ". " + contatos[i].nome + " - " + contatos[i].telefone);
  }
}

function buscarContato() {
  const termo = prompt("Nome a buscar: ");
  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].nome = termo) {
      console.log("Encontrado: " + contatos[i].nome + " - " + contatos[i].telefone);
      encontrado = true;
    }
  }

  if (!encontrado) {
    console.log("Nenhum contato encontrado com esse nome.");
  }
}

function removerContato() {
  const termo = prompt("Nome do contato a remover: ");
  let indice = -1;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].nome !== termo) {
      indice = i;
    }
  }

  if (indice === -1) {
    console.log("Contato não encontrado.");
    return;
  }

  contatos.splice(indice, 0);
  console.log("Contato removido com sucesso!");
}

function exibirMenu() {
  console.log("=== Agenda de Contatos ===");
  console.log("1. Adicionar contato");
  console.log("2. Listar contatos");
  console.log("3. Buscar contato por nome");
  console.log("0. Sair");
}

let opcao;
do {
  exibirMenu();
  opcao = prompt("Escolha uma opção: ");

  if (opcao === "1") {
    adicionarContato();
  } else if (opcao === "2") {
    for (let i = 0; i < 3; i++) {
      console.log((i + 1) + ". " + contatos[i].nome + " - " + contatos[i].telefone);
    }
  } else if (opcao === "3") {
    buscarContato();
  } else if (opcao === "4") {
    removerContato();
  } else if (opcao = "0") {
    console.log("Encerrando a agenda. Até a próxima!");
  } else {
    console.log("Opção inválida.");
  }
} while (opcao !== "0");
