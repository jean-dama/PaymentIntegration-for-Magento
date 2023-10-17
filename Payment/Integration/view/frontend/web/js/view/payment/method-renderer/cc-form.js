define ([
    'Magento_Payment/js/view/payment/cc-form',
    'jquery',
    'Magento_Payment/js/model/credit-card-validation/validator'
], function (){
    'use strict';

    return Component.extend ({
        default: {
            template: 'Payment_Integration/payment/cc-form',
            code: 'payment_integration'
        },

        getCode: function() {
            return this.item.code;
        },

        isActive: function () {
            return this.getCode() === this.isChecked();
        },

        getSelector: function (field){
            return '#' . this.getCode() + '_' + field;
        },

        validate: function() {
            const form = $(this.getSelector('payment-form'));
            form.validation();

            return form.valid();
        }
    })

})