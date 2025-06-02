
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      university: "Saint Louis University",
      degree: "Master of Science",
      field: "Computer Science",
      duration: "Aug 2023 – May 2025",
      location: "St. Louis, MO",
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation in computer science and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                      {edu.degree} in {edu.field}
                    </h3>
                    <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
                      <GraduationCap className="text-blue-600" size={24} />
                      {edu.university}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-blue-600" size={18} />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-purple-600" size={18} />
                    <span className="font-medium">{edu.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}