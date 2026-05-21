let livrosData = []

async function carregarLivros() {
    const response = await fetch("data/livros.json");
    livrosData = await response.json();

    mostrarLivros(livrosData);
}

function mostrarLivros(livros){
    const container = document.getElementById("lista-livros");
    container.innerHTML = "";

    livros.forEach(livro => {
        const div = document.createElement("div");
        div.classList.add("card", "livro");
        
        div.innerHTML = `
            <h3>${livro.titulo}</h3>
            <p>${livro.autor}</p>
            <a href="livro.html?id=${livro.id}" class="btn">Ver obra</a>
        `;
        container.appendChild(div)
    })
}

function filtrarLivros() {
  const busca = document.getElementById("busca").value.toLowerCase();

  const filtrados = livrosData.filter(livro =>
    livro.titulo.toLowerCase().includes(busca) ||
    livro.autor.toLowerCase().includes(busca)
  );

  mostrarLivros(filtrados);
}

carregarLivros();