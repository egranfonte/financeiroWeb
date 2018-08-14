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
                const {credit = 0, debt =0} = response.data      
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            })
        }
        vm.getSumariza()
    }
})()
