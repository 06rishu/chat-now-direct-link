
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const WaMe91 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-green-700 mb-4">wa-me-91</h1>
        <p className="text-xl text-gray-700 text-center max-w-xl">
          Yeh ek dedicated page hai! Aap iss page ko WhatsApp ya kisi bhi jagah share kar sakte hain. 
        </p>
        <div className="mt-8">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80"
            alt="Indian Girl"
            className="rounded-lg shadow-lg w-64 h-64 object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WaMe91;
