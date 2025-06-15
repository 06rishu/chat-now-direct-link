
import { MessageCircle, Phone, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoCallCard from "@/components/VideoCallCard";
import FeatureCard from "@/components/FeatureCard";
import FAQItem from "@/components/FAQItem";

const Index = () => {
  const handleStartChat = () => {
    window.open("https://www.google.com", "_blank");
  };

  const features = [
    {
      icon: "fas fa-mouse text-green-600",
      iconColor: "bg-green-100",
      title: "Easy-to-use interface",
      description: "Wa Me 91 offers a clean and intuitive interface that requires no technical expertise. Users can quickly navigate through the tool and initiate chats in a matter of seconds."
    },
    {
      icon: "fas fa-shield-alt text-blue-600",
      iconColor: "bg-blue-100",
      title: "Privacy protection",
      description: "One of the significant advantages of using Wa Me 91 is that it maintains the privacy of users. Since numbers are not saved, there is no risk of inadvertently sharing personal information."
    },
    {
      icon: "fas fa-cogs text-purple-600",
      iconColor: "bg-purple-100",
      title: "Customization options",
      description: "With the option to pre-fill a custom message, users can personalize their conversations right from the start. This feature is especially useful for businesses."
    },
    {
      icon: "fas fa-globe text-yellow-600",
      iconColor: "bg-yellow-100",
      title: "Compatibility",
      description: "Wa Me 91 is compatible with all major web browsers, including Chrome, Firefox, Safari, and Microsoft Edge. It also supports both WhatsApp and WhatsApp Business."
    },
    {
      icon: "fas fa-clock text-red-600",
      iconColor: "bg-red-100",
      title: "Time-saving convenience",
      description: "By eliminating the need to save numbers, Wa Me 91 streamlines the communication process. Users can save time and effort, especially when engaging with new contacts."
    },
    {
      icon: "fas fa-heart text-indigo-600",
      iconColor: "bg-indigo-100",
      title: "Benefits for All",
      description: "Wa Me 91 offers numerous benefits to individuals and businesses alike, providing a quick and efficient way to connect without the hassle of saving numbers."
    }
  ];

  const faqItems = [
    {
      question: "Q1: What is Wa Me 91?",
      answer: "A1: Wa Me 91 is a WhatsApp web tool that allows you to initiate chats without the need to save the contact's number in your phone."
    },
    {
      question: "Q2: How does Wa Me 91 work?",
      answer: "A2: Wa Me 91 simplifies the process of starting a conversation on WhatsApp by breaking it down into three simple steps: selecting the country code, entering the mobile number, and optionally pre-filling a custom message."
    },
    {
      question: "Q3: Is Wa Me 91 compatible with all web browsers?",
      answer: "A3: Yes, Wa Me 91 is compatible with all major web browsers, including Chrome, Firefox, Safari, and Microsoft Edge."
    },
    {
      question: "Q4: Does Wa Me 91 support WhatsApp Business?",
      answer: "A4: Yes, Wa Me 91 supports both WhatsApp and WhatsApp Business, giving users the flexibility to choose the appropriate platform for their communication needs."
    },
    {
      question: "Q5: Is it safe to use Wa Me 91?",
      answer: "A5: Yes, using Wa Me 91 is safe. It does not store or save any contact numbers, ensuring the privacy and security of users' personal information."
    },
    {
      question: "Q6: Can I customize my messages using Wa Me 91?",
      answer: "A6: Absolutely! Wa Me 91 provides an option to pre-fill a custom message before initiating a chat. This allows users, especially businesses, to personalize their conversations and engage their audience effectively."
    },
    {
      question: "Q7: What are the benefits of using Wa Me 91?",
      answer: "A7: Wa Me 91 offers several benefits, including time-saving convenience, privacy protection, easy-to-use interface, compatibility with major web browsers, and customization options for personalized interactions."
    },
    {
      question: "Q8: Can Wa Me 91 be used for both personal and business purposes?",
      answer: "A8: Yes, Wa Me 91 caters to both personal and business communication needs. It allows individuals to connect with friends, family, and local services effortlessly, while businesses can utilize it to enhance customer engagement."
    },
    {
      question: "Q9: Do I need to install any additional software to use Wa Me 91?",
      answer: "A9: No, Wa Me 91 is a web-based tool that can be accessed directly through your preferred web browser. There is no need to install any additional software or extensions."
    },
    {
      question: "Q10: Is Wa Me 91 a free tool?",
      answer: "A10: Yes, Wa Me 91 is available for free, allowing users to enjoy its benefits without any cost."
    },
    {
      question: "Q11: Are there any limitations on the number of messages I can send?",
      answer: "A11: No, there are no specific limitations on the number of messages you can send using Wa Me 91. However, it is recommended to use the tool responsibly and avoid spamming."
    },
    {
      question: "Q12: Can I schedule messages using Wa Me 91?",
      answer: "A12: Currently, Wa Me 91 does not offer a built-in scheduling feature. However, you can use other third-party tools or services to schedule messages and then use Wa Me 91 to initiate the chat."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-full">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Wa Me 91</span>
          </div>
          <div className="flex items-center space-x-1 text-green-600 font-semibold">
            <i className="fas fa-globe text-sm"></i>
            <span className="text-sm sm:text-base">Instant Global Connection</span>
          </div>
        </div>
      </header>

      {/* Live Support Card */}
      <section className="container mx-auto px-4 mb-8">
        <VideoCallCard
          profileImage="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face"
          name="Live Support"
          status="Available 24/7"
          videoCallLink="https://www.google.com"
          nextLink="https://www.google.com"
        />
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              No Contact Saving Required
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              WhatsApp Chat
              <span className="block text-green-600">Without Saving Number</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The easiest way in India to chat directly on any WhatsApp number without saving contacts. 
              Just enter the number and start chatting instantly!
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
              Click to see demo of how it works
            </p>
          </div>

          {/* WhatsApp Preview */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto">
            <div className="bg-green-500 rounded-t-2xl px-4 py-3 text-white flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <i className="fab fa-whatsapp text-green-500 text-lg"></i>
              </div>
              <div>
                <div className="font-semibold">WhatsApp Chat</div>
                <div className="text-xs opacity-90">online</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 h-32 flex items-center justify-center">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm">
                <i className="fas fa-comments mr-2"></i>Chat directly without saving number! <i className="fas fa-comments"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Video Call Card - Natasha */}
      <section className="container mx-auto px-4 mb-8">
        <VideoCallCard
          profileImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
          name="Natasha"
          status="Live Support 24/7"
          videoCallLink="https://www.google.com"
          nextLink="https://www.google.com"
        />
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Introducing Wa Me 91: A Revolutionary WhatsApp Web Tool for Effortless Chatting without Saving Numbers
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Introduction</h3>
              <p>In today's fast-paced digital world, instant messaging has become an integral part of our lives, and WhatsApp is undeniably one of the most popular platforms for connecting with friends, family, and businesses. However, one aspect of WhatsApp that can be frustrating is the need to save a contact's number before initiating a chat. Enter Wa Me 91, an innovative WhatsApp web tool that allows you to chat without saving numbers. In this article, we will explore the features and benefits of Wa Me 91 and how it simplifies communication for millions of WhatsApp users.</p>

              <h3 className="text-2xl font-semibold text-gray-900">The Need for a WhatsApp Web Tool</h3>
              <p>With over two billion active users worldwide, WhatsApp has transformed the way we communicate. However, the traditional process of saving a contact's number before initiating a conversation can be time-consuming and inconvenient. Many users may want to send a quick message without cluttering their contact list or worrying about privacy concerns. That's where Wa Me 91 comes to the rescue. It offers a hassle-free solution to start chatting instantly, eliminating the need to save numbers.</p>

              <h3 className="text-2xl font-semibold text-gray-900">Understanding Wa Me 91</h3>
              <p>Wa Me 91 is a user-friendly WhatsApp web tool that simplifies the process of initiating chats without saving numbers. The tool provides a seamless experience by breaking down the process into three simple steps: selecting the country code, entering the mobile number, and optionally pre-filling a custom message. Once these details are entered, users can click to chat via WhatsApp or WhatsApp Business, depending on their requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features of Wa Me 91</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  iconColor={feature.iconColor}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Third Video Call Card - Premium */}
      <section className="container mx-auto px-4 mb-8">
        <VideoCallCard
          profileImage="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face"
          name="Sarah Wilson"
          status="Premium Expert Support"
          videoCallLink="https://www.google.com"
          nextLink="https://www.google.com"
          variant="premium"
          stats={{
            activeSessions: 2847,
            satisfactionRate: "99.2%",
            responseTime: "< 30 seconds",
            rating: 4.9,
            reviews: 1247
          }}
        />
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conclusion</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Wa Me 91 revolutionizes the way we use WhatsApp by providing a convenient solution to chat without saving numbers. With its user-friendly interface, privacy protection, customization options, compatibility, and time-saving convenience, Wa Me 91 empowers individuals and businesses to communicate effortlessly. Whether you want to connect with friends, reach out to local services, or enhance your business's customer engagement, Wa Me 91 is the go-to tool for hassle-free WhatsApp conversations. Try it today and experience a new level of efficiency and simplicity in your messaging experience.
            </p>
            <Button 
              onClick={handleStartChat}
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <i className="fas fa-rocket mr-3"></i>
              Try Wa Me 91 Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Try It Now!
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Start WhatsApp chat with just one click
          </p>
          <Button 
            onClick={handleStartChat}
            className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <i className="fas fa-play mr-3"></i>
            See Demo - Start Chat Now
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
            <span className="text-lg font-semibold">Wa Me 91</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            The easiest way to WhatsApp direct chat in India
          </p>
          <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
            <p className="mb-2"><i className="fas fa-flag mr-2"></i><i className="fas fa-heart text-red-500 mx-1"></i> 2024 Wa Me 91. Made in India <i className="fas fa-flag"></i></p>
            <p className="text-yellow-300">
              <strong>Note:</strong> This is not affiliated with WhatsApp Inc. This is an independent tool.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
