angular
    .module('app', ['ui.router'])
    .config(configure);

function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            views: {
                "viewHeader": {
                    templateUrl: 'app/layout/header.html',
                    controller: 'HeaderController as header'
                },
                "viewFooter": {
                    templateUrl: 'app/layout/footer.html',
                    controller: 'FooterController as footer'
                }
            }
        })
        .state('index.home', {
            url: '/',
            views: {
                "viewContent@": {
                    template: '<div class="container-fluid"><h2>Home page</h2></div>'
                }
            }
        })
        .state('index.todo', {
            url: '/todo',
            views: {
                "viewContent@": {
                    templateUrl: 'app/components/todoList.html',
                    controller: 'TodoListController as todoList'
                }
            }
        })
}
