
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Angular", "Vue.js", "Tailwind CSS", "Material UI"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Node.js (Express)", "Spring Security", "GraphQL"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Messaging & Eventing",
      skills: ["Apache Kafka", "RabbitMQ", "WebSockets"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
      color: "from-red-500 to-red-600"
    }
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

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 hover:scale-105 transform border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Key Technologies Overview
              </h3>
              <div className="overflow-x-auto">
                <div className="flex space-x-4 pb-4 min-w-max">
                  {["React.js", "Spring Boot", "AWS", "Docker", "Kafka", "PostgreSQL", "Redis", "Kubernetes"].map((tech, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-200 hover:scale-105 transform border border-indigo-100 min-w-[120px]"
                    >
                      <span className="font-medium text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
