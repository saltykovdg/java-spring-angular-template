angular
    .module('app')
    .controller('FooterController', FooterController);

function FooterController() {
    var footer = this;
    footer.title = 'footer page';
}
