
const TechnicalCapabilities = () => {
  const capabilities = {
    "Supported File Formats": [
      "PDF Documents",
      "Microsoft Word (.docx, .doc)",
      "Plain Text Files (.txt)",
      "Rich Text Format (.rtf)",
      "Images (PNG, JPG, TIFF)",
      "Scanned Documents",
      "Handwritten Submissions"
    ],
    "Integration Options": [
      "Canvas LMS",
      "Blackboard Learn",
      "Moodle",
      "Google Classroom",
      "Microsoft Teams",
      "Gradebook Systems",
      "REST API Access"
    ],
    "LLM Providers": [
      "OpenAI (GPT-4, GPT-3.5)",
      "Google Gemini Pro",
      "Anthropic Claude",
      "Local Model Deployment",
      "Custom Fine-tuned Models",
      "Hybrid Cloud Solutions",
      "Enterprise AI Platforms"
    ],
    "Export Formats": [
      "PDF Grade Reports",
      "Excel Spreadsheets",
      "CSV Data Files",
      "JSON API Responses",
      "LMS-Compatible Formats",
      "Custom Report Templates",
      "Bulk Export Options"
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-bl from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Technical Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for flexibility and integration with your existing educational technology stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(capabilities).map(([category, items], index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-glow hover:shadow-glow transition-smooth hover:scale-105"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 pb-4 border-b border-primary/20">
                {category}
              </h3>
              <ul className="space-y-4">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-full p-1">
                      <div className="bg-primary rounded-full w-2 h-2 shadow-glow"></div>
                    </div>
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="gradient-primary text-primary-foreground rounded-2xl p-8 max-w-4xl mx-auto shadow-glow">
            <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
            <p className="text-primary-foreground/80 text-lg">
              SOC 2 Type II compliant • GDPR ready • FERPA compliant • End-to-end encryption • Regular security audits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
