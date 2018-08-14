//meu componente valueBox
angular.module('financeiroWeb').component('valueBox', {
    bindings :{
        grid: '@',
        colorClass: '@',
        value: '@',
        text: '@',
        iconClass: '@',
    },
    controller: [
        'gridSystem',
        function(gridSystem){
            this.gridSystem  = gridSystem.toCssClasses(this.grid)
        }
    ],
    template:`
    <div class="{{ $ctrl.gridClasses }} ">
        <div class="small-box {{$ctrl.colorClass}}">
            <div class="inner">
                <h3>{{ $ctrl.value }} </h3>
                <p>{{ $ctrl.text }} </p>
            </div>
            <div class="icon">
                <i class="fa {{$ctrl.iconClass}}"></i>
            </div>
        </div>
    </div>
    `
})