define ([
    'uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list'
], function (Component, rendererList){
    'use strict';

    rendererList.push({
        type:'payment_integration',
        component:'Payment_Integration/js/view/payment/method-renderer/cc-form'
    })

    return Component.extend({})

})