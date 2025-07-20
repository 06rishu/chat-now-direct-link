
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Wa Me 91, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily use Wa Me 91 for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on Wa Me 91 are provided on an 'as is' basis. Wa Me 91 makes no warranties, expressed or implied, 
              and hereby disclaims and negates all other warranties including without limitation, implied warranties or 
              conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property 
              or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Wa Me 91 or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on Wa Me 91, even if Wa Me 91 or an authorized representative has been notified 
              orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Revisions</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on Wa Me 91 could include technical, typographical, or photographic errors. 
              Wa Me 91 does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms & Conditions, please contact us at support@wame91.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
