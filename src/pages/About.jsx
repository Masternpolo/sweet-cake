import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Maria Rodriguez",
      role: "Head Baker & Founder",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=300&fit=crop&crop=face",
      bio: "With over 15 years of experience in pastry arts, Maria brings creativity and passion to every cake she creates."
    },
    {
      id: 2,
      name: "David Chen",
      role: "Cake Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "David specializes in creating stunning visual designs and bringing complex cake concepts to life."
    },
    {
      id: 3,
      name: "Sophie Williams",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Sophie's expertise in flavor combinations ensures every cake tastes as amazing as it looks."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Customers" },
    { number: "8", label: "Years of Experience" },
    { number: "50+", label: "Awards Won" },
    { number: "1000+", label: "Cakes Created" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-pink-100 py-20 lg:py-32">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                {" "}Sweet Dreams
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate cake artists dedicated to turning your sweetest dreams into edible masterpieces. 
              Every cake tells a story, and we're here to help you create yours.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Sweet Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sweet Dreams began in 2016 when Maria Rodriguez, a passionate pastry chef, decided to turn her 
                love for baking into a business that would bring joy to people's special moments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small home kitchen has grown into a beloved local bakery, serving hundreds 
                of happy customers and creating memories that last a lifetime. Our commitment to quality, 
                creativity, and customer satisfaction has never wavered.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be the go-to destination for custom cakes in our community, 
                known for our attention to detail, delicious flavors, and personalized service.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop" 
                alt="Our bakery kitchen"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-300 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Believe In
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from recipe development to customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Creativity</h3>
              <p className="text-gray-600">
                Every cake is a blank canvas for our artistic expression. We love bringing unique 
                designs and innovative flavors to life.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Passion</h3>
              <p className="text-gray-600">
                We pour our hearts into every creation, treating each cake as if it were for our own 
                family's special occasion.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and never compromise on quality, ensuring every 
                bite is a delightful experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team of bakers and designers work together to create the perfect cake for your special day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-primary-100">
              Numbers that tell our story of success and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center text-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              A Glimpse of Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From elegant wedding cakes to fun birthday creations, here's a small sample of our work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-${1578985545062 + item}?w=400&h=300&fit=crop`}
                  alt={`Cake ${item}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


