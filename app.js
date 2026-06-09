document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const loadingOverlay = document.getElementById('loadingOverlay');
    const typingText = document.getElementById('typingText');
    const portfolioContainer = document.querySelector('.portfolio-container');

    const targetText = 'Loading...';
    let charIndex = 0;
    const typingInterval = 100; // 0.1s interval between characters
    const phase1Duration = 5000; // Phase 1 lasts for 5 seconds

    // Lock body scrolling during the load phase
    body.classList.add('loading');

    // Phase 1: Typing interaction
    function typeCharacter() {
        if (charIndex < targetText.length) {
            typingText.textContent += targetText.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, typingInterval);
        }
    }

    // Start typing
    typeCharacter();

    // Transition Phase Orchestrations
    // Phase 2: The Opening (Starts at 5.0 seconds)
    setTimeout(() => {
        // Step 1: Hide typing text container and expand white center line
        loadingOverlay.classList.add('phase-2');
        
        // Step 2: Open shutter panels (deliberately offset to let the center line expand first)
        setTimeout(() => {
            loadingOverlay.classList.add('shutter-active');
            
            // Step 3: Fade in and slide up the premium portfolio page underneath
            portfolioContainer.classList.add('reveal');
        }, 600); // 0.6 seconds after the line begins expanding

        // Step 4: Fade out the horizontal center line as panels open wide
        setTimeout(() => {
            loadingOverlay.classList.add('line-out');
        }, 1200);

        // Step 5: Clean up loading overlay and restore viewport scrolling (Phase 3 Branding is active)
        setTimeout(() => {
            loadingOverlay.classList.add('hide');
            body.classList.remove('loading');
        }, 2200); // Total 7.2s elapsed from start

    }, phase1Duration);
});
