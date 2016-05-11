angular
    .module('app')
    .controller('FooterController', FooterController);

function FooterController() {
    var vm = this;
    vm.title = 'footer text from controller';
}
