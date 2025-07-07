
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technical Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for flexibility and integration with your existing educational technology stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(capabilities).map(([category, items], index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                {category}
              </h3>
              <ul className="space-y-4">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <div className="bg-blue-100 rounded-full p-1">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
            <p className="text-blue-100 text-lg">
              SOC 2 Type II compliant • GDPR ready • FERPA compliant • End-to-end encryption • Regular security audits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
