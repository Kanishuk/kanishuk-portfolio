import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  const allTechnologies = [
    "React.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap", 
    "Java", "Spring Boot", "Node.js (Express)", "Spring Security", "GraphQL",
    "OAuth 2.0", "JWT", "Oracle Database", "PostgreSQL", "MongoDB", "Redis", "MySQL",
    "Apache Kafka", "RabbitMQ", "WebSockets",
    "AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub", "Jenkins"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology stack for enterprise-grade applications
          </p>
        </div>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {allTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200 hover:scale-105 transform border border-blue-100 text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
