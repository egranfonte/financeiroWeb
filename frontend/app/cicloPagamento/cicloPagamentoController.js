
(function(){
    angular.module('financeiroWeb').controller('cicloPagamentoCtrl',[
        '$http', /* Um serviço Core do Angular*/
        cicloPagamentoController /* Variavel que representa a função cicloPagamentoController */
    ])

    function cicloPagamentoController($http){
        /* Constatante  view model*/
        const vm = this
        /*
        vm.cicloPagamento = {
            name: 'Setembro/18',
            month: '9',
            year: '2018'
        }
        */

        /* view model create */
        vm.create = function(){
            const url = 'http://localhost:3003/api/cicloPagamento'
            $http.post(url, vm.cicloPagamento).sucess(function(response){
                vm.cicloPagamento = {}
                console.log('Create - Sucesso!')
            })
        }
    }
})()