angular
    .module('app')
    .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            views: {
                "viewHeader": {
                    templateUrl: 'app/layout/header.html',
                    controller: 'HeaderController',
                    controllerAs: 'vm'
                },
                "viewFooter": {
                    templateUrl: 'app/layout/footer.html',
                    controller: 'FooterController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('index.home', {
            url: '/',
            views: {
                "viewContent@": {
                    template: [
                        '<div class="container-fluid">',
                            '<h2>{{"home.title" | translate}}</h2>',
                        '</div>'
                    ].join('')
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
