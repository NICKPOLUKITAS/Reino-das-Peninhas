// Função para o botão de curiosidade
function showMoreInfo() {
    alert("As calopsitas são aves originárias da Austrália e são conhecidas por serem dóceis, inteligentes e ótimas companheiras para humanos!");
}

// Animação de fade-in ao rolar
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});
