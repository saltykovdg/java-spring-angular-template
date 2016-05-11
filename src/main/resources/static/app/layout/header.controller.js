angular
    .module('app')
    .controller('HeaderController', HeaderController);

HeaderController.$inject = ['$location', 'i18nService'];

function HeaderController($location, i18nService) {
    var vm = this;
    vm.title = 'header text from controller';

    vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    // i18n
    vm.currentLocaleDisplayName = i18nService.getLocaleDisplayName();
    vm.localesDisplayNames = i18nService.getLocalesDisplayNames();
    vm.i18nVisible = vm.localesDisplayNames && vm.localesDisplayNames.length > 1;
    vm.changeLanguage = function (locale) {
        i18nService.setLocaleByDisplayName(locale);
    };
}
