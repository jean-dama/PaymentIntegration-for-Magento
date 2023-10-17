<?php 
    declare(strict_types=1);
    namespace Payment\Integration\Observer;

    use Magento\Framework\Event\Observer;
    use Magento\Payment\Observer\AbstractDataAssignObserver;

    class DataAssignObserver extends AbstractDataAssignObserver 
      {
         function execute(Observer $observer){

            $data = $this->readDataArgument($observer)->getData('additional_data');

            if(empty($data)) return;

               $payment = $this->readPaymentModelArgument($observer);

               $payment->setData('cc_number', $data['cc_number']);
               $payment->setData('cc_type', $data['cc_type']);
               $payment->setData('cc_exp_month', $data['cc_exp_month']);
               $payment->setData('cc_exp_year', $data['cc_exp_year']);
               $payment->setData('cc_cid', (int) $data['cc_cid']);
               $payment->setData('cc_last_4', substr($data['cc_number'], -4));

            }
      }

    ?>