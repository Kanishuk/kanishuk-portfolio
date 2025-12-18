
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Compliance & Regulatory Intelligence Platform",
      role: "Senior Software Developer",
      company: "Paypal",
      duration: "November 2025 – Present",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AMD GPU Cloud Provisioning Platform",
      role: "Senior Full Stack Developer",
      company: "AMD",
      duration: "September 2023 – October 2025",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Attorney Payment System",
      role: "Full Stack Developer", 
      company: "Enqbator",
      duration: "September 2021 – August 2023",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Eastern Wealth Management Portal",
      role: "Full Stack Developer",
      company: "Eastern Bank",
      duration: "December 2019 – August 2021",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Integrated Fleet Maintenance & Scheduling Portal",
      role: "Full Stack Developer",
      company: "Motional",
      duration: "June 2018 – December 2019",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "CouponDunia Cashback Platform",
      role: "Software Developer",
      company: "CouponDunia",
      duration: "June 2017 – May 2018",
      gradient: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <span className="font-semibold">{project.role}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="font-medium text-blue-600">{project.company}</span>
                    </div>
                  </div>
                  <div className="text-gray-500 font-medium">
                    {project.duration}
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
