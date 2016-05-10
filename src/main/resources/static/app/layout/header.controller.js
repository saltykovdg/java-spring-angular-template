angular
    .module('app')
    .controller('HeaderController', HeaderController);

function HeaderController($location) {
    var header = this;
    header.title = 'header page';

    header.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}
