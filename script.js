document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-text');
    const text = "hey, i'm kelly :)";
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 80);
        } else {
            // Quand le texte est complet, démarrer l'effet de vague
            setTimeout(startWaveEffect, 1000);
        }
    }
    
    function startWaveEffect() {
        const textContent = typingElement.textContent;
        
        // Créer des spans pour chaque lettre en préservant les espaces
        typingElement.innerHTML = '';
        for (let i = 0; i < textContent.length; i++) {
            const span = document.createElement('span');
            const char = textContent.charAt(i);
            
            if (char === ' ') {
                span.innerHTML = '&nbsp;'; // Espace insécable
            } else {
                span.textContent = char;
            }
            
            span.className = 'wave-letter';
            span.style.setProperty('--delay', i * 0.1); // Délai progressif
            typingElement.appendChild(span);
        }
        
        // Activer l'animation
        typingElement.classList.add('wave-active');
    }
    
    // Démarrer l'animation après un court délai
    setTimeout(typeText, 500);
});