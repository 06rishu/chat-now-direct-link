
import Header from "./Header";
import Footer from "./Footer";

interface VideoCallLayoutProps {
  children: React.ReactNode;
}

const VideoCallLayout = ({ children }: VideoCallLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <Header />
      </div>
      
      {/* Main Content with top padding to account for fixed header */}
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VideoCallLayout;
