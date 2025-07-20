
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Wa Me 91</h1>
            <p className="text-xl text-gray-600">The easiest way to WhatsApp direct chat in India</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wa Me 91 is dedicated to simplifying WhatsApp communication in India. We provide an easy-to-use platform 
              that allows users to start WhatsApp conversations without saving contact numbers, making instant communication 
              more accessible and convenient for everyone.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-green-800 mb-3">Simple & Fast</h3>
                <p className="text-green-700">
                  Just enter the mobile number and start chatting instantly without saving contacts.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-blue-800 mb-3">Secure & Safe</h3>
                <p className="text-blue-700">
                  We don't store any personal information. All communications go directly through WhatsApp.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>No registration required</li>
              <li>Completely free to use</li>
              <li>Works on all devices</li>
              <li>Privacy-focused approach</li>
              <li>Made specifically for Indian users</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
