(function() {
    //configuração das minhas rotas
    angular.module('financeiroWeb').config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider,$urlRouterProvider){
            $stateProvider.state('dashboard', {
                url: "/dashboard",
                templateUrl: "dashboard/dashboard.html"
            }).state('cicloPagamento', {
                url: "/cicloPagamento",
                templateUrl: "cicloPagamento/tabs.html"
            })
            $urlRouterProvider.otherwise('/dashboard')
        }
    ])
})()