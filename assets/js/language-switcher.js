const browserLang = navigator.language || navigator.userLanguage;
console.log('Detected browser language:', browserLang);

const languageSelectors = document.querySelectorAll('#languageSelectNav, #languageSelectFooter');
languageSelectors.forEach(selector => {
    selector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('preferredLanguage', selectedLang);
        console.log('Language switched to:', selectedLang);
        // Future: trigger language switch functionality
        languageSelectors.forEach(el => el.value = selectedLang);
    });
});