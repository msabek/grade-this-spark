
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Transform Your Grading?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educators who have already revolutionized their workflow. 
            Start your free trial today and experience the future of academic assessment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-glow hover:shadow-glow transition-smooth hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Free Trial</h3>
              <ul className="text-left space-y-3 mb-6 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="bg-primary rounded-full w-2 h-2 shadow-glow"></div>
                  <span>14-day free trial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-primary rounded-full w-2 h-2 shadow-glow"></div>
                  <span>Full feature access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-primary rounded-full w-2 h-2 shadow-glow"></div>
                  <span>Grade up to 100 assignments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-primary rounded-full w-2 h-2 shadow-glow"></div>
                  <span>No credit card required</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                className="w-full gradient-primary text-primary-foreground hover:scale-105 font-semibold py-4 text-lg group shadow-glow transition-smooth"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-glow hover:shadow-glow transition-smooth hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Schedule Demo</h3>
              <ul className="text-left space-y-3 mb-6 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="bg-accent rounded-full w-2 h-2 shadow-glow"></div>
                  <span>30-minute personalized demo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-accent rounded-full w-2 h-2 shadow-glow"></div>
                  <span>See your use case in action</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-accent rounded-full w-2 h-2 shadow-glow"></div>
                  <span>Custom pricing discussion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-accent rounded-full w-2 h-2 shadow-glow"></div>
                  <span>Q&A with our experts</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-glow font-semibold py-4 text-lg group transition-smooth"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-12 mt-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Need Help?</h4>
                <p className="text-muted-foreground text-sm mb-4">Our support team is here to assist you</p>
                <Button variant="outline" size="sm" className="border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-smooth">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Implementation</h4>
                <p className="text-muted-foreground text-sm mb-4">Get up and running in under 24 hours</p>
                <div className="text-sm text-muted-foreground">
                  Setup assistance included
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Enterprise Solutions</h4>
                <p className="text-muted-foreground text-sm mb-4">Custom solutions for large institutions</p>
                <div className="text-sm text-muted-foreground">
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
