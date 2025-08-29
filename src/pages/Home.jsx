import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCakes = [
    {
      id: 1,
      name: "Wedding Elegance",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      category: "Wedding",
      description: "A stunning 3-tier wedding cake with delicate floral decorations"
    },
    {
      id: 2,
      name: "Birthday Magic",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      category: "Birthday",
      description: "Colorful birthday cake with sprinkles and candles"
    },
    {
      id: 3,
      name: "Chocolate Dream",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      category: "Chocolate",
      description: "Rich chocolate cake with ganache and berries"
    },
    {
      id: 4,
      name: "Fruit Fantasy",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
      category: "Fruit",
      description: "Fresh fruit cake with whipped cream"
    },
    {
      id: 5,
      name: "Vanilla Delight",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      category: "Vanilla",
      description: "Classic vanilla cake with buttercream frosting"
    },
    {
      id: 6,
      name: "Red Velvet",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      category: "Red Velvet",
      description: "Luxurious red velvet with cream cheese frosting"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      content: "Our wedding cake was absolutely perfect! The design was exactly what I envisioned and it tasted amazing. Everyone loved it!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Event Planner",
      content: "I've worked with many cake makers, but Sweet Dreams consistently delivers the most beautiful and delicious cakes. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Customer",
      content: "The birthday cake for my daughter was incredible! The attention to detail and the taste were both outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-pink-100 py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sweet Dreams Come True with Our
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  {" "}Custom Cakes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create unforgettable moments with our handcrafted cakes. From weddings to birthdays, 
                we bring your sweetest dreams to life with passion and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/bookings" className="btn btn-primary text-lg px-8 py-4">
                  Order Your Cake
                </Link>
                <Link to="/about" className="btn btn-secondary text-lg px-8 py-4">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=500&fit=crop" 
                  alt="Beautiful wedding cake"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-300 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Masterpieces
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each cake is a unique creation, crafted with love and attention to detail. 
              Here are some of our recent works that have brought joy to our customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake, index) => (
              <div 
                key={cake.id} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cake.image} 
                    alt={cake.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {cake.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cake.name}</h3>
                  <p className="text-gray-600">{cake.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="btn btn-secondary">
              View More Works
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our happy customers have to say about their experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-primary-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Your Dream Cake?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's make your special occasion even more memorable with a custom cake that's as unique as you are.
          </p>
          <Link to="/bookings" className="btn bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-4">
            Start Your Order
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


