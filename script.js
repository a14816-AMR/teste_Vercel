// Efeito de mudança de cor no header ao fazer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.padding = '0.5rem 10%';
    } else {
        header.style.background = '#ffffff';
        header.style.padding = '1rem 10%';
    }
});

// Botão de Agendamento (Simulação)
document.querySelector('.btn-primary').addEventListener('click', () => {
    alert('Redirecionando para o sistema de agendamento...');
});