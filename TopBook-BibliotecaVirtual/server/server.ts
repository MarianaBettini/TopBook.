// server/server.ts

import express, { Request, Response } from 'express';
import cors from 'cors';

// INTERFACE ÚNICA E TIPADA
export interface ILivro {
    id: string;          // Identificador único do registro (timestamp)
    titulo: string;      // Título do livro
    autor: string;       // Autor da obra
    estudante: string;   // Nome do estudante que pegou o livro emprestado
    status: 'Disponível' | 'Emprestado'; // Situação atual do livro
    dataEmprestimo: string; // Data da movimentação em formato ISO
}

const app = express();
const PORTA = 3000;

// MIDDLEWARES OBRIGATÓRIOS
app.use(cors()); 
app.use(express.json()); 

// BANCO DE DADOS EM MEMÓRIA (ARRAY TIPADO)
const bancoDadosMemoria: ILivro[] = [
    {
        id: "1718112000000",
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        estudante: "Ana Silva",
        status: "Emprestado",
        dataEmprestimo: new Date().toISOString()
    }
];

// ROTA 1: GET /livros (Listagem de Dados)
app.get('/livros', (req: Request, res: Response) => {
    res.status(200).json(bancoDadosMemoria);
});

// ROTA 2: POST /livros (Cadastro/Empréstimo de Dados)
app.post('/livros', (req: Request, res: Response) => {
    const { titulo, autor, estudante, status } = req.body;

    // Validação de consistência exigida
    if (!titulo || !autor || !estudante || !status) {
        res.status(400).json({ 
            erro: "Campos obrigatórios ausentes: 'titulo', 'autor', 'estudante' e 'status'." 
        });
        return;
    }

    // Construção do novo registro seguindo estritamente a Interface ILivro
    const novoLivro: ILivro = {
        id: Date.now().toString(), 
        titulo: String(titulo),
        autor: String(autor),
        estudante: String(estudante),
        status: status === 'Emprestado' ? 'Emprestado' : 'Disponível',
        dataEmprestimo: new Date().toISOString()
    };

    bancoDadosMemoria.push(novoLivro);
    res.status(201).json(novoLivro);
});

// ROTA 3: DELETE /livros/:id (Remover um registro pelo ID)
app.delete('/livros/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    // Procura o índice do livro no array pelo ID recebido na URL
    const indice = bancoDadosMemoria.findIndex(livro => livro.id === id);

    // Se não encontrar o livro, retorna erro 404 (Not Found)
    if (indice === -1) {
        res.status(404).json({ erro: "Livro não encontrado." });
        return;
    }

    // Remove o livro do array de memória
    const livroRemovido = bancoDadosMemoria.splice(indice, 1);

    // Retorna o objeto removido confirmando o sucesso
    res.status(200).json({ 
        mensagem: "Livro removido com sucesso!", 
        livro: livroRemovido[0] 
    });
});

// Inicialização do Servidor Local
app.listen(PORTA, () => {
    console.log(`[SERVIDOR] API de Biblioteca rodando em http://localhost:${PORTA}`);
});