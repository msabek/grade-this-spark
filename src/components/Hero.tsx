
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Grade Smarter, Not Harder with{" "}
                <span className="text-blue-600">AI-Powered Precision</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your grading workflow with intelligent automation that saves 70% of your time while ensuring 99.9% consistency across all assessments.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">70%</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-96 animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-gray-900">Assignment Grading</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    AI Reviewing
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Content Analysis</span>
                    <span className="text-blue-600 font-semibold">Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Grammar Check</span>
                    <span className="text-blue-600 font-semibold">Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-gray-700">Final Review</span>
                    <span className="text-yellow-600 font-semibold">In Progress</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600">Average Grade: A-</div>
                  <div className="text-sm text-gray-600">Processing Time: 12 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
