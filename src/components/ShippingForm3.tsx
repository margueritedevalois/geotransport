import React, { useEffect, useState } from 'react';

const ShippingForm2 = () => {
  const [senderCity, setSenderCity] = useState('');
  const [receiverCity, setReceiverCity] = useState('');

  useEffect(() => {
    const sender = sessionStorage.getItem('senderCity') || '';
    const receiver = sessionStorage.getItem('receiverCity') || '';

    setSenderCity(sender);
    setReceiverCity(receiver);

    window.$('#calculator').dpdCalc({
      apiUrl: '/dpd/index.php',
    });
  }, []);

  return (
    <div className="bg-[#E9F5FF] p-6 rounded-2xl shadow-lg">
      <h2>Отправитель: {senderCity}</h2>
      <h2>Получатель: {receiverCity}</h2>
      
      <div id="calculator">{/* Виджет калькулятора */}</div>
    </div>
  );
};

export default ShippingForm2;
