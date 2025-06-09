
import { MessageCircle, Phone, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const handleStartChat = () => {
    // Demo link - replace with actual WhatsApp link
    window.open("https://wa.me/919876543210?text=Hello! I want to start chatting.", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-full">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Chat Now Direct</span>
          </div>
          <div className="flex items-center space-x-1 text-green-600 font-semibold">
            <Phone className="w-4 h-4" />
            <span>+91 - WhatsApp Chat</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              No Contact Saving Required
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              WhatsApp Chat
              <span className="block text-green-600">Without Saving Number</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              भारत में सबसे आसान तरीका किसी भी WhatsApp नंबर पर बिना contact save किए direct chat करने का। 
              बस नंबर डालें और तुरंत chat शुरू करें!
            </p>
          </div>

          {/* Call to Action */}
          <div className="mb-12">
            <Button 
              onClick={handleStartChat}
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Start Chatting Now
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Click करें और demo देखें कि यह कैसे काम करता है
            </p>
          </div>

          {/* WhatsApp Preview */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
            <div className="bg-green-500 rounded-t-2xl px-4 py-3 text-white flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <div className="font-semibold">WhatsApp Chat</div>
                <div className="text-xs opacity-90">online</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 h-32 flex items-center justify-center">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm">
                बिना number save किए direct chat करें! 💬
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              क्यों चुनें हमारी Service?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              भारत में लाखों लोग इस्तेमाल कर रहे हैं यह आसान और secure तरीका
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Chat</h3>
                <p className="text-gray-600">
                  तुरंत किसी भी नंबर पर chat शुरू करें, बिना contact save किए
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Contact Saving</h3>
                <p className="text-gray-600">
                  आपकी contact list साफ रहेगी, कोई unwanted contacts नहीं
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">भारत में Popular</h3>
                <p className="text-gray-600">
                  +91 नंबर्स के लिए specially designed, India में tested
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            अभी Try करें!
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            सिर्फ एक click में WhatsApp chat शुरू करें
          </p>
          <Button 
            onClick={handleStartChat}
            className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Demo देखें - Start Chat Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-500 p-2 rounded-full mr-3">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Chat Now Direct</span>
          </div>
          <p className="text-gray-400 text-sm">
            भारत में WhatsApp direct chat का सबसे आसान तरीका
          </p>
          <div className="mt-4 text-xs text-gray-500">
            © 2024 Chat Now Direct. Made in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
