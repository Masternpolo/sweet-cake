import React, { useState } from 'react';

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    date: '',
    guests: '',
    cakeType: '',
    flavors: '',
    design: '',
    budget: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `🍰 *New Cake Order Request*\n\n*Customer Details:*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n*Event Details:*\nOccasion: ${formData.occasion}\nDate: ${formData.date}\nNumber of Guests: ${formData.guests}\n\n*Cake Preferences:*\nType: ${formData.cakeType}\nFlavors: ${formData.flavors}\nDesign: ${formData.design}\nBudget: ${formData.budget}\n\n*Additional Notes:*\n${formData.additionalNotes}\n\nPlease contact me to discuss this order! 🎂`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+1234567890';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        occasion: '',
        date: '',
        guests: '',
        cakeType: '',
        flavors: '',
        design: '',
        budget: '',
        additionalNotes: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const cakeTypes = [
    'Wedding Cake',
    'Birthday Cake',
    'Anniversary Cake',
    'Graduation Cake',
    'Baby Shower Cake',
    'Corporate Event Cake',
    'Holiday Cake',
    'Custom Design'
  ];

  const flavorOptions = [
    'Vanilla',
    'Chocolate',
    'Red Velvet',
    'Carrot',
    'Lemon',
    'Strawberry',
    'Coffee',
    'Coconut',
    'Pistachio',
    'Custom Flavor'
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-50 to-pink-100 py-20 lg:py-32">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Order Your
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">{" "}Dream Cake</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fill out the form below and we'll get back to you via WhatsApp to discuss your perfect cake. 
              Let's create something amazing together!
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">Occasion *</label>
                    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select occasion</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Holiday">Holiday</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" placeholder="50" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cake Preferences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cakeType" className="block text-sm font-medium text-gray-700 mb-2">Cake Type *</label>
                    <select id="cakeType" name="cakeType" value={formData.cakeType} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select cake type</option>
                      {['Wedding Cake','Birthday Cake','Anniversary Cake','Graduation Cake','Baby Shower Cake','Corporate Event Cake','Holiday Cake','Custom Design'].map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="flavors" className="block text-sm font-medium text-gray-700 mb-2">Preferred Flavors</label>
                    <select id="flavors" name="flavors" value={formData.flavors} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select flavors</option>
                      {['Vanilla','Chocolate','Red Velvet','Carrot','Lemon','Strawberry','Coffee','Coconut','Pistachio','Custom Flavor'].map(flavor => (
                        <option key={flavor} value={flavor}>{flavor}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="design" className="block text sm font-medium text-gray-700 mb-2">Design Ideas</label>
                  <textarea id="design" name="design" value={formData.design} onChange={handleChange} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" placeholder="Describe your dream cake design, colors, theme, or share reference images..." />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget & Additional Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select budget range</option>
                      <option value="$50 - $100">$50 - $100</option>
                      <option value="$100 - $200">$100 - $200</option>
                      <option value="$200 - $300">$200 - $300</option>
                      <option value="$300 - $500">$300 - $500</option>
                      <option value="$500+">$500+</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                  <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" placeholder="Any special requirements, dietary restrictions, or additional information..." />
                </div>
              </div>

              <div className="text-center pt-6">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Opening WhatsApp...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">📱 Send to WhatsApp</span>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to be contacted via WhatsApp to discuss your cake order.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have urgent questions or need to discuss your order right away, feel free to reach out directly.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">hello@sweetdreams.com</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl mb-4">🕒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookings;


