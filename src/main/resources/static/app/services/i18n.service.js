angular
    .module('app')
    .service('i18nService', i18nService);

i18nService.$inject = ['$translate', 'LOCALES'];

function i18nService($translate, LOCALES) {
    'use strict';
    // VARS
    var localesObj = LOCALES.locales;

    // locales and locales display names
    var _LOCALES = Object.keys(localesObj);
    if (!_LOCALES || _LOCALES.length === 0) {
        console.error('There are no _LOCALES provided');
    }
    var _LOCALES_DISPLAY_NAMES = [];
    _LOCALES.forEach(function (locale) {
        _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
    });

    var currentLocale = $translate.use();

    // METHODS
    var checkLocaleIsValid = function (locale) {
        return _LOCALES.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
        if (!checkLocaleIsValid(locale)) {
            console.error('Locale name "' + locale + '" is invalid');
            return;
        }
        currentLocale = locale;
        $translate.use(locale);
    };

    return {
        getLocaleDisplayName: function () {
            return localesObj[currentLocale];
        },
        setLocaleByDisplayName: function (localeDisplayName) {
            setLocale(
                _LOCALES[
                    _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)// get locale index
                    ]
            );
        },
        getLocalesDisplayNames: function () {
            return _LOCALES_DISPLAY_NAMES;
        }
    };
}