// client/app.ts

// Mudamos o nome para 'urlApi' para o TypeScript não reclamar do 'API_URL' global
const urlApi = 'http://localhost:3000/livros';

const formCadastroBiblioteca = document.getElementById('formCadastro') as HTMLFormElement;
const containerListaLivros = document.getElementById('listaContainer') as HTMLDivElement;

async function carregarLivros() {
    try {
        const resposta = await fetch(urlApi);
        const livros = await resposta.json();

        containerListaLivros.innerHTML = '';

        if (livros.length === 0) {
            containerListaLivros.innerHTML = '<p class="aviso-vazio">Nenhum livro cadastrado.</p>';
            return;
        }

        livros.forEach((livro: any) => {
            const livroCard = document.createElement('div');
            livroCard.className = 'livro-card';
            
            livroCard.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><strong>Estudante:</strong> ${livro.estudante}</p>
                <p><strong>Status:</strong> <span class="status-${livro.status.toLowerCase()}">${livro.status}</span></p>
                <small>Data: ${new Date(livro.dataEmprestimo).toLocaleString('pt-BR')}</small>
                <br>
                <button class="btn-excluir" onclick="window.excluirLivro('${livro.id}')" style="margin-top: 10px; background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">Excluir Registro</button>
            `;
            
            containerListaLivros.appendChild(livroCard);
        });
    } catch (erro) {
        console.error('Erro ao buscar livros:', erro);
        containerListaLivros.innerHTML = '<p class="aviso-vazio" style="color: red;">Erro ao conectar com o servidor.</p>';
    }
}

async function excluirLivro(id: string) {
    if (!confirm('Tem certeza que deseja remover este registro?')) {
        return;
    }

    try {
        const resposta = await fetch(`${urlApi}/${id}`, {
            method: 'DELETE'
        });

        if (resposta.ok) {
            await carregarLivros(); 
        } else {
            alert('Erro ao excluir o livro do servidor.');
        }
    } catch (erro) {
        console.error('Erro ao excluir livro:', erro);
    }
}

// Vincula obrigatoriamente na janela global do navegador
(window as any).excluirLivro = excluirLivro;

formCadastroBiblioteca.addEventListener('submit', async (event) => {
    event.preventDefault();

    const titulo = (document.getElementById('txtTitulo') as HTMLInputElement).value;
    const autor = (document.getElementById('txtAutor') as HTMLInputElement).value;
    const estudante = (document.getElementById('txtEstudante') as HTMLInputElement).value;
    const status = (document.getElementById('selStatus') as HTMLSelectElement).value;

    const novoLivro = { titulo, autor, estudante, status };

    try {
        const resposta = await fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoLivro)
        });

        if (resposta.ok) {
            formCadastroBiblioteca.reset();
            await carregarLivros(); 
        } else {
            alert('Erro ao salvar o livro.');
        }
    } catch (erro) {
        console.error('Erro ao enviar dados:', erro);
    }
});

// Inicializa a listagem
carregarLivros();