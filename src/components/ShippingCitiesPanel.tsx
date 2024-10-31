import React from 'react';

interface ShippingCitiesPanelProps {
  senderCity: string;
  receiverCity: string;
}

const ShippingCitiesPanel: React.FC<ShippingCitiesPanelProps> = ({
  senderCity,
  receiverCity,
}) => {
  return (
    <div className="bg-[#E9F5FF] p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-medium text-gray-800">���������� � �������</h3>
      <p className="text-gray-700">����� �����������: {senderCity}</p>
      <p className="text-gray-700">����� ����������: {receiverCity}</p>
    </div>
  );
};

export default ShippingCitiesPanel;
