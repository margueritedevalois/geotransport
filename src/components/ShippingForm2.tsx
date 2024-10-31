import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface ShippingFormData {
  type: 'envelope' | 'package';
  weight: number;
  description: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  quantity: number;
}

export default function ShippingForm() {
  const [formData, setFormData] = useState<ShippingFormData>({
    type: 'envelope',
    weight: 0.2,
    description: '',
    dimensions: {
      length: 10,
      width: 10,
      height: 10,
    },
    quantity: 1,
  });

  const [activeTab, setActiveTab] = useState<'volume' | 'dimensions'>('dimensions');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl text-gray-800 mb-6">
        Укажите тип и параметры отправления
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Documents */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">Документы</h3>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={formData.type === 'envelope'}
                  onChange={() => setFormData({ ...formData, type: 'envelope' })}
                  className="w-4 h-4 text-blue-500"
                />
                <span>Нужен конверт</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={formData.type === 'package'}
                  onChange={() => setFormData({ ...formData, type: 'package' })}
                  className="w-4 h-4 text-blue-500"
                />
                <span>Нужен пакет</span>
              </label>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Вес (кг)</label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({ ...formData, weight: parseFloat(e.target.value) })
                }
                className="w-24 px-3 py-2 border rounded-md"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
               Описание
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md"
                rows={3}
              />
            </div>
          </div>

          {/* Right Column - Cargo */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">Груз</h3>
            
            <div className="flex space-x-4 border-b">
              <button
                type="button"
                onClick={() => setActiveTab('dimensions')}
                className={`pb-2 px-1 ${
                  activeTab === 'dimensions'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600'
                }`}
              >
                По габаритам
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('volume')}
                className={`pb-2 px-1 ${
                  activeTab === 'volume'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600'
                }`}
              >
                 По объему
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                  Длина (см)
                  </label>
                  <input
                    type="number"
                    value={formData.dimensions.length}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dimensions: {
                          ...formData.dimensions,
                          length: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                  Ширина (см)
                  </label>
                  <input
                    type="number"
                    value={formData.dimensions.width}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dimensions: {
                          ...formData.dimensions,
                          width: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                  Высота (см)
                  </label>
                  <input
                    type="number"
                    value={formData.dimensions.height}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dimensions: {
                          ...formData.dimensions,
                          height: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                 Количество мест
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        quantity: Math.max(1, formData.quantity - 1),
                      })
                    }
                    className="p-1 rounded-md border hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        quantity: parseInt(e.target.value),
                      })
                    }
                    className="w-16 text-center px-2 py-1 border rounded-md"
                    min="1"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        quantity: formData.quantity + 1,
                      })
                    }
                    className="p-1 rounded-md border hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full sm:w-auto px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
        >
          �����
        </button>
      </div>
    </form>
  );
}