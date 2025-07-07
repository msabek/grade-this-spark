
import { Clock, Target, TrendingUp, CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 70% of Grading Time",
      description: "Automate routine grading tasks and focus on providing meaningful feedback to students.",
      metric: "70%",
      metricLabel: "Time Reduction"
    },
    {
      icon: Target,
      title: "99.9% Grading Consistency",
      description: "Eliminate subjective bias with AI-powered evaluation that maintains consistent standards.",
      metric: "99.9%",
      metricLabel: "Accuracy Rate"
    },
    {
      icon: TrendingUp,
      title: "Automate 90% of Routine Tasks",
      description: "Let AI handle repetitive grading while you concentrate on complex assessments.",
      metric: "90%",
      metricLabel: "Automation"
    },
    {
      icon: CheckCircle,
      title: "Enhanced Student Outcomes",
      description: "Provide faster, more detailed feedback that helps students improve their performance.",
      metric: "3x",
      metricLabel: "Faster Feedback"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Grading Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of educators who have revolutionized their workflow with AI-powered grading technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600">
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {benefit.metricLabel}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
