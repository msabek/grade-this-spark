
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Cloud, Eye, BarChart, Database, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "AI Review Agent System",
      description: "5 independent AI reviewers analyze each assignment from different perspectives to ensure comprehensive evaluation.",
      details: [
        "Content analysis agent for subject matter accuracy",
        "Grammar and language assessment agent", 
        "Structure and organization evaluation agent",
        "Rubric compliance verification agent",
        "Final consensus and quality assurance agent"
      ]
    },
    {
      icon: Cloud,
      title: "Multi-Provider LLM Support",
      description: "Choose from cloud-based or local AI models to meet your institution's security and performance requirements.",
      details: [
        "OpenAI GPT-4 and GPT-3.5 integration",
        "Google Gemini Pro support",
        "Local deployment options for sensitive data",
        "Custom model fine-tuning capabilities",
        "Seamless switching between providers"
      ]
    },
    {
      icon: Eye,
      title: "Advanced OCR Capabilities",
      description: "Process handwritten assignments, scanned documents, and images with industry-leading optical character recognition.",
      details: [
        "Handwriting recognition with 95%+ accuracy",
        "Mathematical equation and formula processing",
        "Multi-language document support",
        "Table and diagram extraction",
        "Batch processing for large volumes"
      ]
    },
    {
      icon: BarChart,
      title: "Comprehensive Analytics & Reporting",
      description: "Gain insights into student performance, grading patterns, and assessment effectiveness with detailed analytics.",
      details: [
        "Student performance tracking over time",
        "Grade distribution analysis",
        "Common error pattern identification",
        "Rubric effectiveness metrics",
        "Custom report generation"
      ]
    },
    {
      icon: Database,
      title: "Database Management & Continuous Improvement",
      description: "Centralized data management with machine learning that improves grading accuracy over time.",
      details: [
        "Secure cloud-based data storage",
        "Automated backup and recovery",
        "Performance analytics and optimization",
        "Learning from grading patterns",
        "Integration with existing LMS platforms"
      ]
    },
    {
      icon: Settings,
      title: "Customizable Grading Workflows",
      description: "Adapt the system to your specific grading requirements with flexible configuration options.",
      details: [
        "Custom rubric creation and management",
        "Weighted scoring systems",
        "Subject-specific evaluation criteria",
        "Automated feedback generation",
        "Bulk grading and batch operations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-background to-background/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive toolkit that makes GradeThis Pro the choice of leading educational institutions worldwide
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {features.map((feature, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-glow hover:shadow-glow transition-smooth"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-primary/5 transition-smooth">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="bg-primary/10 p-3 rounded-xl shadow-glow">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="bg-card/80 rounded-xl p-6 ml-16 border border-primary/10">
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="bg-primary rounded-full w-2 h-2 mt-2 flex-shrink-0 shadow-glow"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Features;
