import React from 'react';
import { Shield, Settings, Users, BarChart } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to enhance your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
              <Shield className="text-sky-600" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Authentication</h3>
            <p className="text-gray-600">
              HSM Cryptography and Card Tokenization for maximum security
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
              <Settings className="text-sky-600" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Branding</h3>
            <p className="text-gray-600">
              White-label solutions with customizable interfaces
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
              <Users className="text-sky-600" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-gray-600">
              Comprehensive admin and user dashboard controls
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
              <BarChart className="text-sky-600" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">
              Detailed insights and reporting capabilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;