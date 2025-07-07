
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
// import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Grading Revolution</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Grade Smarter, Not Harder with{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  AI-Powered Precision
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-foreground/80 leading-relaxed max-w-2xl"
              >
                Transform your grading workflow with intelligent automation that saves 70% of your time while ensuring 99.9% consistency across all assessments.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="gradient-primary shadow-glow px-8 py-4 text-lg font-semibold group transition-bounce hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold group transition-smooth"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  70%
                </div>
                <div className="text-sm text-foreground/60">Time Saved</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  99.9%
                </div>
                <div className="text-sm text-foreground/60">Accuracy</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-sm text-foreground/60">Universities</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl shadow-card p-8 border border-primary/20">
              <div className="absolute -inset-0.5 gradient-primary rounded-3xl opacity-20 blur-sm" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <div className="text-lg font-semibold">Assignment Grading</div>
                  </div>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30">
                    AI Reviewing
                  </div>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex items-center justify-between p-4 bg-primary/10 rounded-xl border border-primary/20"
                  >
                    <div className="flex items-center space-x-3">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Content Analysis</span>
                    </div>
                    <span className="text-primary font-semibold">Complete</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="flex items-center justify-between p-4 bg-accent/10 rounded-xl border border-accent/20"
                  >
                    <div className="flex items-center space-x-3">
                      <Zap className="h-4 w-4 text-accent" />
                      <span>Grammar Check</span>
                    </div>
                    <span className="text-accent font-semibold">Complete</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                      <span>Final Review</span>
                    </div>
                    <span className="text-yellow-500 font-semibold">In Progress</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="pt-4 border-t border-primary/20 space-y-2"
                >
                  <div className="text-sm text-foreground/60">Average Grade: <span className="text-primary font-semibold">A-</span></div>
                  <div className="text-sm text-foreground/60">Processing Time: <span className="text-accent font-semibold">12 seconds</span></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
