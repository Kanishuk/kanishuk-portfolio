
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Attorney Payment System",
      role: "Full Stack Java Developer",
      company: "Enqbator",
      duration: "Aug 2022 – Present",
      description: "Secure legal payment automation platform enabling compliant invoice and trust transactions for law firms.",
      technologies: ["React.js", "Redux Toolkit", "Spring Boot", "MySQL", "MongoDB", "Kafka", "AWS", "Docker"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AMD Unified Developer Platform",
      role: "Full Stack Developer", 
      company: "AMD",
      duration: "2021 – 2022",
      description: "Developer portal for accessing AMD SDKs, performance analytics, and integration tools across GPU and CPU ecosystems.",
      technologies: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Redis", "Keycloak", "AWS EKS"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Eastern Wealth Management Portal",
      role: "Full Stack Developer",
      company: "Eastern Bank", 
      duration: "2020 – 2021",
      description: "A customer-facing portal to manage investments and portfolio analytics with secure self-service tools.",
      technologies: ["Angular", "NgRx", "Spring Boot", "Azure SQL", "RabbitMQ", "AKS"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Eastern Business Lending Workflow",
      role: "Full Stack Developer",
      company: "Eastern Bank",
      duration: "2019 – 2020", 
      description: "A digitized loan origination platform to streamline commercial lending and compliance automation.",
      technologies: ["Angular 6", "Spring Boot", "SQL Server", "Redis", "RabbitMQ", "Docker"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "CouponDunia Cashback Platform",
      role: "Full Stack Developer",
      company: "CouponDunia",
      duration: "2017 – 2019",
      description: "Scaled and enhanced a high-traffic cashback engine with affiliate tracking and metadata storage.",
      technologies: ["React.js", "Spring MVC", "Oracle DB", "MongoDB", "Docker", "AWS"],
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade solutions across fintech, healthcare, and legal industries
          </p>
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
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700 hover:shadow-sm transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
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
