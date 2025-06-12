
import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Users, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Results-driven Full-Stack Developer with enterprise-grade expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a Senior Full-Stack Java Developer with over 8 years of professional experience 
              designing scalable web applications, microservices, and event-driven platforms. I specialize 
              in React.js, Angular, Spring Boot, and AWS, delivering enterprise-grade solutions with a 
              strong focus on performance, security, and user experience.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With a proven track record of building solutions across diverse technology platforms, I bring deep technical expertise, system-level thinking, and Agile collaboration to every project.
            </p>
            
            <div className="flex justify-center gap-16 text-center mt-10">
              <div>
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">4</div>
                <div className="text-gray-600">Industries</div>
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Full-Stack Expertise</h3>
                </div>
                <p className="text-gray-600">
                  Proficient in modern frontend frameworks and robust backend architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Security & Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Specialized in building secure solutions for regulated industries.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">AWS Certified</h3>
                </div>
                <p className="text-gray-600">
                  Certified Solutions Architect with extensive cloud experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
