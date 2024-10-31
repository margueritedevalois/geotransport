// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ShippingForm from './components/ShippingForm';
import ShippingForm2 from './components/ShippingForm2';
import { Truck, Shield, Clock, Phone } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section with Form */}
                <section className="pt-24 pb-16 bg-white">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="text-left mb-8">
                          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-4 mt-6 ml-4">
                            Быстро и надежно доставим ваш груз
                          </h1>
                          <p className="text-lg text-gray-600 ml-4">
                            Рассчитайте стоимость доставки прямо сейчас
                          </p>
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        <img
                          src="geo.jpg"
                          alt="Logistics and shipping"
                          className="object-cover w-full h-[500px] mt-4"
                        />
                      </div>
                    </div>
                    <div className="mt-8">
                      <ShippingForm />
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <Truck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Мониторинг автопарка</h3>
                        <p className="text-gray-600">
                          Отслеживание местоположения и состояния транспорта в режиме реального времени
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <Shield className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                        <p className="text-gray-600">
                          Защита данных и контроль доступа к информации о вашем автопарке
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Поддержка</h3>
                        <p className="text-gray-600">
                          Круглосуточная техническая поддержка и консультации специалистов
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Простое подключение</h3>
                        <p className="text-gray-600">
                          Быстрое подключение и настройка системы под ваши потребности
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            }
          />

          <Route
            path="/shipping-form-2"
            element={
              <section className="pt-24 pb-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <ShippingForm2 />
                </div>
              </section>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
