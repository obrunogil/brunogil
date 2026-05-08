/////////////////  VAIDAÇÃO DOS CAMPOS DO FORM

const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputNome = document.getElementById('nome');
        const inputEmail = document.getElementById('email');
        const inputMensagem = document.getElementById('mensagem');

        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = inputMensagem.value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos (Nome, E-mail e Mensagem).");
            return;
        }

        if (!validarEmail(email)) {
            alert(`${email} não é um formato de e-mail válido. \nUtilize esse formato: "usuario@dominio.com"`);
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

///////////////// TEMA CLARO / ESCURO

const btnClaro = document.getElementById('btn-claro');
const btnEscuro = document.getElementById('btn-escuro');
const htmlElement = document.documentElement;

// FUNÇÃO PARA MUDAR O TEMA
function configurarTema(tema) {
    if (tema === 'dark') {
        htmlElement.classList.add('dark-theme');
        localStorage.setItem('tema-escolhido', 'dark');
    } else {
        htmlElement.classList.remove('dark-theme');
        localStorage.setItem('tema-escolhido', 'light');
    }
    atualizarVisualBotoes(tema);
}

// FUNÇÃO PARA O VISUAL DOS BOTÕES
function atualizarVisualBotoes(tema) {
    if (!btnClaro || !btnEscuro) return;
    const isDark = (tema === 'dark');
    btnEscuro.classList.toggle('active', isDark);
    btnClaro.classList.toggle('active', !isDark);
}

// LOGICA DE INICIALIZAÇÃO
const temaSalvo = localStorage.getItem('tema-escolhido') || 'light';
configurarTema(temaSalvo);

// EVENTOS DE CLIQUE
btnEscuro?.addEventListener('click', () => configurarTema('dark'));
btnClaro?.addEventListener('click', () => configurarTema('light'));