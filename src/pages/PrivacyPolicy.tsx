
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              Wa Me 91 is designed with privacy in mind. We do not collect, store, or process any personal information 
              from our users. Our service acts as a simple redirect tool to WhatsApp's official platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Information</h2>
            <p className="text-gray-600 mb-6">
              Since we don't collect personal information, we don't use, share, or sell any user data. When you use 
              our service to initiate a WhatsApp conversation, you are redirected directly to WhatsApp's platform, 
              where their privacy policy applies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We may use basic analytics cookies to understand how our service is used, but these do not contain 
              any personally identifiable information. You can disable cookies in your browser settings if preferred.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Our service redirects users to WhatsApp, which is owned by Meta. When using WhatsApp, you are subject 
              to WhatsApp's terms of service and privacy policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              Since we don't store user data, there is no risk of data breaches related to personal information. 
              Our website uses standard security measures to protect against malicious activities.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at support@wame91.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
