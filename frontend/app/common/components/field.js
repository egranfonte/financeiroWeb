(function() {
    angular.module('financeiroWeb').component('field',{
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
        },
        controller: [
            'gridSystem',
            function(gridSystem){
                this.gridCasses = gridSystem.toCssClasses(this.grid)
            }
        ],
        template: `
        <div class="{{ $ctrl.gridClasses }}">
            <div class="form-group">
                <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" />
            </div>
        </div>
        `
    })
})()