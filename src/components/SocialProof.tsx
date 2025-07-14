
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Martinez",
      title: "Professor of Computer Science",
      university: "Stanford University",
      content: "GradeThis Pro has revolutionized how I handle my 200+ student courses. The consistency and speed are incredible, and students receive feedback faster than ever before.",
      rating: 5
    },
    {
      name: "Prof. Michael Chen",
      title: "Associate Professor of Literature", 
      university: "Harvard University",
      content: "The AI's ability to analyze writing style and provide constructive feedback rivals my own expertise. It's like having a team of graduate assistants available 24/7.",
      rating: 5
    },
    {
      name: "Dr. Emily Johnson",
      title: "Department Head, Mathematics",
      university: "MIT",
      content: "What impressed me most is how the system handles mathematical proofs and equations. The OCR technology is outstanding, and the grading accuracy is remarkable.",
      rating: 5
    }
  ];

  const universities = [
    "Stanford University",
    "Harvard University", 
    "MIT",
    "University of California",
    "Oxford University",
    "Cambridge University"
  ];

  const stats = [
    { number: "500+", label: "Universities" },
    { number: "50K+", label: "Educators" },
    { number: "2M+", label: "Assignments Graded" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-tr from-background to-background/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/5 w-56 h-56 bg-primary rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-smooth">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what educators are saying about their experience with GradeThis Pro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 relative shadow-glow">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-accent fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-bold text-foreground text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-muted-foreground">
                {testimonials[currentTestimonial].title}
              </div>
              <div className="text-primary font-semibold">
                {testimonials[currentTestimonial].university}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-smooth"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-smooth"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* University Logos */}
        <div className="mt-16">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Trusted by leading universities worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {universities.map((university, index) => (
              <div key={index} className="text-muted-foreground font-semibold text-lg hover:text-primary transition-smooth cursor-pointer">
                {university}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
