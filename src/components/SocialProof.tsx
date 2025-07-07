
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what educators are saying about their experience with GradeThis Pro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial].title}
              </div>
              <div className="text-blue-600 font-semibold">
                {testimonials[currentTestimonial].university}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* University Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-600 mb-8 font-medium">
            Trusted by leading universities worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {universities.map((university, index) => (
              <div key={index} className="text-gray-500 font-semibold text-lg">
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
