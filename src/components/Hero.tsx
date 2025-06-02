
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Phone, Globe } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="\public\photo.jpg" // Replace with your image URL
              alt="Kanishuk Reddy Lingareddy Gari"
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-blue-200 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              KANISHUK REDDY LINGAREDDY GARI
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            AWS Certified Solutions Architect & Senior Full-Stack Java Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            "Passionate about building secure, scalable web applications using modern technologies."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => window.location.href = 'tel:+16823379551'}
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 text-lg rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={20} />
              (682) 337-9551
            </Button>
            <Button 
              onClick={() => window.location.href = 'mailto:kanishukreddy02@gmail.com'}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 text-lg rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              kanishukreddy02@gmail.com
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => openLink('https://www.linkedin.com/in/kanishuk-reddy/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </Button>
            <Button 
              onClick={() => openLink('https://medium.com/@kanishukreddy')}
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 text-lg rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Globe size={20} />
              Medium
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              className="mx-auto text-gray-400 cursor-pointer hover:text-blue-600 transition-colors" 
              size={32}
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
