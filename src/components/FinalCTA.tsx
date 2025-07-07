
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Grading?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educators who have already revolutionized their workflow. 
            Start your free trial today and experience the future of academic assessment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Free Trial</h3>
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>14-day free trial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>Full feature access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>Grade up to 100 assignments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>No credit card required</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 text-lg group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Schedule Demo</h3>
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>30-minute personalized demo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>See your use case in action</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>Custom pricing discussion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-2 h-2"></div>
                  <span>Q&A with our experts</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 text-lg group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-12 mt-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-blue-100 text-sm mb-4">Our support team is here to assist you</p>
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Implementation</h4>
                <p className="text-blue-100 text-sm mb-4">Get up and running in under 24 hours</p>
                <div className="text-sm text-blue-100">
                  Setup assistance included
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Enterprise Solutions</h4>
                <p className="text-blue-100 text-sm mb-4">Custom solutions for large institutions</p>
                <div className="text-sm text-blue-100">
                  Volume pricing available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
