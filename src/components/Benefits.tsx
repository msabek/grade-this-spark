
import { Clock, Target, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 gradient-accent rounded-full opacity-10 blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Grading Experience
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Join thousands of educators who have revolutionized their workflow with AI-powered grading technology
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-primary/10 p-4 rounded-2xl group-hover:shadow-glow transition-all duration-300"
                >
                  <benefit.icon className="h-8 w-8 text-primary" />
                </motion.div>
                
                <div className="space-y-2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  >
                    {benefit.metric}
                  </motion.div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wide">
                    {benefit.metricLabel}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold">
                  {benefit.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
