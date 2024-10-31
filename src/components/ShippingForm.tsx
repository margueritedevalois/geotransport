import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const ShippingForm = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [suggestionsSender, setSuggestionsSender] = useState<string[]>([]);
  const [suggestionsReceiver, setSuggestionsReceiver] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/cities.json')
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error('Error fetching cities:', error));
  }, []);

  const handleSenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSender(value);
    setSuggestionsSender(
      value ? cities.filter((city) => city.toLowerCase().includes(value.toLowerCase())) : []
    );
  };

  const handleReceiverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReceiver(value);
    setSuggestionsReceiver(
      value ? cities.filter((city) => city.toLowerCase().includes(value.toLowerCase())) : []
    );
  };

  const handleSuggestionClick = (city: string, type: 'sender' | 'receiver') => {
    if (type === 'sender') {
      setSender(city);
      setSuggestionsSender([]);
    } else {
      setReceiver(city);
      setSuggestionsReceiver([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('senderCity', sender);
    sessionStorage.setItem('receiverCity', receiver);
    navigate('/shipping-form-2');
  };

  return (
    <div className="bg-[#E9F5FF] p-6 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Город отправителя"
              value={sender}
              onChange={handleSenderChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400"
            />
            {suggestionsSender.length > 0 && (
              <div className="absolute bg-white border border-gray-200 mt-1 w-full z-10">
                {suggestionsSender.map((city, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(city, 'sender')}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Город получателя"
              value={receiver}
              onChange={handleReceiverChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400"
            />
            {suggestionsReceiver.length > 0 && (
              <div className="absolute bg-white border border-gray-200 mt-1 w-full z-10">
                {suggestionsReceiver.map((city, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(city, 'receiver')}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1 md:flex-initial">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Search size={20} />
              Найти
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
