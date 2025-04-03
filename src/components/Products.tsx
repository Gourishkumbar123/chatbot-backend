import React from 'react';
import { CreditCard, Wallet, Building2, Globe2 } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive fintech solutions tailored for modern banking needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="text-sky-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Card Management System</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Prepaid & Credit Card Management</li>
              <li>• HSM Cryptography & Authorization</li>
              <li>• Multi-wallet & Multi-currency Support</li>
              <li>• Comprehensive Channel Support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="text-sky-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Banking & Fintech Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Limit Management Stack</li>
              <li>• Wallet Stack (CRED PPI)</li>
              <li>• API Platform & White Label Product</li>
              <li>• NPCI Registered Partner</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="text-sky-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Corporate Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Corporate Prepaid Stack</li>
              <li>• Admin-Controlled Flows</li>
              <li>• OPS & Analytics Dashboard</li>
              <li>• White-Labeled Dashboard</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <Globe2 className="text-sky-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">B2B Pay</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Platform as a Service (PaaS)</li>
              <li>• API Integration</li>
              <li>• White Labeled Solution</li>
              <li>• Integrated B2B Solution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;