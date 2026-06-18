// client/app.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Mudamos o nome para 'urlApi' para o TypeScript não reclamar do 'API_URL' global
var urlApi = 'http://localhost:3000/livros';
var formCadastroBiblioteca = document.getElementById('formCadastro');
var containerListaLivros = document.getElementById('listaContainer');
function carregarLivros() {
    return __awaiter(this, void 0, void 0, function () {
        var resposta, livros, erro_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(urlApi)];
                case 1:
                    resposta = _a.sent();
                    return [4 /*yield*/, resposta.json()];
                case 2:
                    livros = _a.sent();
                    containerListaLivros.innerHTML = '';
                    if (livros.length === 0) {
                        containerListaLivros.innerHTML = '<p class="aviso-vazio">Nenhum livro cadastrado.</p>';
                        return [2 /*return*/];
                    }
                    livros.forEach(function (livro) {
                        var livroCard = document.createElement('div');
                        livroCard.className = 'livro-card';
                        livroCard.innerHTML = "\n                <h3>".concat(livro.titulo, "</h3>\n                <p><strong>Autor:</strong> ").concat(livro.autor, "</p>\n                <p><strong>Estudante:</strong> ").concat(livro.estudante, "</p>\n                <p><strong>Status:</strong> <span class=\"status-").concat(livro.status.toLowerCase(), "\">").concat(livro.status, "</span></p>\n                <small>Data: ").concat(new Date(livro.dataEmprestimo).toLocaleString('pt-BR'), "</small>\n                <br>\n                <button class=\"btn-excluir\" onclick=\"window.excluirLivro('").concat(livro.id, "')\" style=\"margin-top: 10px; background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;\">Excluir Registro</button>\n            ");
                        containerListaLivros.appendChild(livroCard);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    erro_1 = _a.sent();
                    console.error('Erro ao buscar livros:', erro_1);
                    containerListaLivros.innerHTML = '<p class="aviso-vazio" style="color: red;">Erro ao conectar com o servidor.</p>';
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function excluirLivro(id) {
    return __awaiter(this, void 0, void 0, function () {
        var resposta, erro_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm('Tem certeza que deseja remover este registro?')) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("".concat(urlApi, "/").concat(id), {
                            method: 'DELETE'
                        })];
                case 2:
                    resposta = _a.sent();
                    if (!resposta.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, carregarLivros()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    alert('Erro ao excluir o livro do servidor.');
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    erro_2 = _a.sent();
                    console.error('Erro ao excluir livro:', erro_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Vincula obrigatoriamente na janela global do navegador
window.excluirLivro = excluirLivro;
formCadastroBiblioteca.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var titulo, autor, estudante, status, novoLivro, resposta, erro_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                titulo = document.getElementById('txtTitulo').value;
                autor = document.getElementById('txtAutor').value;
                estudante = document.getElementById('txtEstudante').value;
                status = document.getElementById('selStatus').value;
                novoLivro = { titulo: titulo, autor: autor, estudante: estudante, status: status };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, fetch(urlApi, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(novoLivro)
                    })];
            case 2:
                resposta = _a.sent();
                if (!resposta.ok) return [3 /*break*/, 4];
                formCadastroBiblioteca.reset();
                return [4 /*yield*/, carregarLivros()];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                alert('Erro ao salvar o livro.');
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                erro_3 = _a.sent();
                console.error('Erro ao enviar dados:', erro_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
// Inicializa a listagem
carregarLivros();
