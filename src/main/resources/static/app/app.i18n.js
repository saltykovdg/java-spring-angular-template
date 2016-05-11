angular
    .module('app')
    .constant('LOCALES', {
        'locales': {
            'ru_RU': 'Русский',
            'en_US': 'English'
        },
        'preferredLocale': 'en_US'
    })
    .config(configure);

configure.$inject = ['$translateProvider', 'LOCALES'];

function configure($translateProvider, LOCALES) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useStaticFilesLoader({
        prefix: 'app/i18n/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();
}
