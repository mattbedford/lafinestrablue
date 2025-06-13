const browserLang = navigator.language || navigator.userLanguage;
console.log('Detected browser language:', browserLang);

function handleLanguageRedirect(language) {
    if (language.startsWith('en')) {
        window.location.href = '/en/';
    } else if (language.startsWith('it')) {
        window.location.href = '/';
    } else {
        window.location.href = '/en/';
    }
}

const languageSelectors = document.querySelectorAll('#languageSelectNav, #languageSelectFooter');
languageSelectors.forEach(selector => {
    selector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('preferredLanguage', selectedLang);
        console.log('Language switched to:', selectedLang);
        handleLanguageRedirect(selectedLang);

        languageSelectors.forEach(el => el.value = selectedLang);
    });
});