import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 gradient-primary rounded-lg opacity-30 blur-sm"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GradeThis Pro
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-smooth">
              How It Works
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-smooth">
              Pricing
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-smooth">
              About
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary/30 hover:border-primary">
              Sign In
            </Button>
            <Button className="gradient-primary shadow-glow transition-bounce hover:scale-105">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-primary/20"
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth">
                  Features
                </a>
                <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-smooth">
                  How It Works
                </a>
                <a href="#pricing" className="text-foreground/80 hover:text-primary transition-smooth">
                  Pricing
                </a>
                <a href="#about" className="text-foreground/80 hover:text-primary transition-smooth">
                  About
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-primary/30">
                    Sign In
                  </Button>
                  <Button className="gradient-primary shadow-glow">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;