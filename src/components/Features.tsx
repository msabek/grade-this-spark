
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive toolkit that makes GradeThis Pro the choice of leading educational institutions worldwide
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {features.map((feature, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="bg-white rounded-xl p-6 ml-16">
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="bg-blue-600 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
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
