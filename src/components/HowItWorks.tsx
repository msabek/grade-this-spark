
import { Upload, Brain, CheckCircle, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Assignments",
      description: "Simply drag and drop student submissions in any format - PDFs, Word docs, images, or handwritten work.",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our 5-agent AI system analyzes content, grammar, structure, and adherence to rubrics with precision.",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "Review & Adjust",
      description: "Review AI recommendations, make adjustments if needed, and add personalized feedback for students.",
      step: "03"
    },
    {
      icon: Download,
      title: "Export Results",
      description: "Download graded assignments with detailed feedback and analytics in your preferred format.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How GradeThis Pro Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From upload to export in four simple steps. Experience the future of academic assessment.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.step}
                    </div>
                    <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-full inline-block">
            <span className="font-semibold">Average processing time: 15 seconds per assignment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
