
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
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            How GradeThis Pro Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From upload to export in four simple steps. Experience the future of academic assessment.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card/80 backdrop-blur-sm border border-primary/20 p-8 rounded-2xl shadow-glow hover:shadow-glow transition-smooth hover:-translate-y-2 hover:scale-105">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 gradient-primary text-primary-foreground text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-glow">
                      {step.step}
                    </div>
                    <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="gradient-primary text-primary-foreground px-6 py-3 rounded-full inline-block shadow-glow">
            <span className="font-semibold">Average processing time: 15 seconds per assignment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
