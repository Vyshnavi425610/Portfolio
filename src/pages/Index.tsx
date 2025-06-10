import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Calendar, MapPin, Award, Code, BookOpen, Briefcase } from "lucide-react";

const Index = () => {
  const skills = {
    languages: ["Python", "Java", "C++", "C#", "SQL", "JavaScript", "HTML", "CSS"],
    frameworks: ["React", "Node.js", "Spring", "Flask", "REST APIs"],
    cloud: ["AWS", "GCP", "Azure", "Snowflake"],
    tools: ["Git", "Docker", "Kubernetes", "Jenkins", "VS Code", "JupyterLab"]
  };

  const experiences = [
    {
      title: "Graduate Assistant",
      company: "Arkansas Tech University",
      period: "Jan 2023 - May 2024",
      location: "Arkansas, USA",
      achievements: [
        "Conducted advanced research and development of Spiking Neural Networks (SNNs) using Python for neural simulations",
        "Co-authored and published a research paper titled 'Anomaly Detection via SNNs' in an academic journal",
        "Supported faculty-led machine learning curriculum with lab setup and codebase reviews"
      ]
    },
    {
      title: "A4 Analyst Intern",
      company: "Capgemini",
      period: "Dec 2021 - May 2022",
      location: "India",
      achievements: [
        "Assisted in modernizing data workflows through Python, Snowflake, and AWS cloud tools",
        "Built and maintained ETL pipelines using AWS Lambda, S3, and Glue for automated data ingestion",
        "Worked in Agile environment using Jira for sprint planning, backlog refinement, and task tracking"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Indian Servers",
      period: "Jun 2021 - Aug 2021",
      location: "India",
      achievements: [
        "Developed emotion detection applications with OpenCV and CNNs for real-time video feeds",
        "Created SVM-based classification models for musical performance style identification using scikit-learn",
        "Optimized model inference and participated in deployment tests on edge devices"
      ]
    }
  ];

  const education = [
    {
      degree: "Master's in Information Technology",
      school: "Arkansas Tech University",
      period: "2022 - 2024",
      gpa: "4.0/4.0"
    },
    {
      degree: "Bachelor's in Computer Science",
      school: "K L University",
      period: "2019 - 2022",
      gpa: "3.46/4.0"
    },
    {
      degree: "Diploma in Computer Science",
      school: "NTTF",
      period: "2016 - 2019",
      gpa: "3.42/4.0"
    }
  ];

  const certifications = [
    "PCEP – Certified Entry Level Python Programmer",
    "AWS Certified Developer Associate",
    "Statistics with Python Specialization"
  ];

  const projects = [
    {
      title: "Face Recognition using LBPH Algorithm",
      period: "Aug 2021 - Nov 2021",
      description: "Built a Python-based face recognition system utilizing OpenCV and the LBPH algorithm for real-time image processing. Integrated modules for dataset collection, feature extraction, and live camera validation.",
      technologies: ["Python", "OpenCV", "LBPH Algorithm", "Computer Vision"]
    },
    {
      title: "ERP for Supply Chain Management",
      period: "Aug 2018 - Mar 2019",
      description: "Developed and optimized an ERP system for supply chain management, streamlining workflows and improving operational efficiency with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "ERP Systems", "Supply Chain Management"]
    },
    {
      title: "Portfolio Website",
      period: "Jan 2024 - May 2024",
      description: "Created an interactive portfolio using HTML, JavaScript and CSS, hosted on GitHub Pages, showcasing projects and academic achievements of professor. Designed a user-friendly interface to enhance navigation and accessibility for visitors.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages", "UI/UX Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
              <a href="#education" className="text-slate-300 hover:text-white transition-colors">Education</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Vyshnavi
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Software Engineer & <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">ML Enthusiast</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Passionate about developing cutting-edge machine learning solutions and scalable cloud architectures. 
              Master's graduate with expertise in neural networks, data engineering, and full-stack development.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="mailto:vyshnavi425610@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
                <a href="https://github.com/Vyshnavi425610" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Cloud & Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-blue-400 text-lg font-semibold">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end text-slate-400 mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-300">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Education</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-400" />
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-blue-400 font-semibold">{edu.school}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-slate-300">
                    <p className="flex items-center mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.period}
                    </p>
                    <p className="font-semibold text-green-400">GPA: {edu.gpa}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center text-slate-300">
                      <Award className="mr-3 h-5 w-5 text-yellow-400" />
                      {cert}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <div className="flex items-center text-slate-400 mt-2 md:mt-0">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-500 text-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always interested in discussing new opportunities, innovative projects, and collaborations in machine learning and software development.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="mailto:vyshnavi425610@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <a href="https://github.com/Vyshnavi425610" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Portfolio. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
