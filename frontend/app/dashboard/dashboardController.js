//
(function() {
    angular.module('financeiroWeb').controller('DashboardCtrl', [
       '$http',
        DashboardController
    ])
    
    function DashboardController($http){
        const vm = this
        vm.getSumariza = function(){
            const url = 'http://localhost:3003/api/sumarizaPagamento'
            $http.get(url).then(function(response){
                const data = response.data      
                vm.credit = data.credit
                vm.debt = data.debt
                vm.total = data.credit - data.debt
            })
        }
        vm.getSumariza()
    }
})()
