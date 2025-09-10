import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in-scale">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Discover Your Perfect Career Path</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-slide-in-up">
            <span className="text-foreground">Find What</span>
            <br />
            <span className="text-gradient">Fits You Best</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            PathSeeker guides students, graduates, and professionals through personalized career exploration with AI-powered recommendations and expert insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/register">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/quiz">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Take Quiz
              </Button>
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Personalized Matching</h3>
              <p className="text-sm text-muted-foreground text-center">AI-powered career recommendations based on your skills and interests</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground text-center">Learn from industry professionals and success stories</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Interactive Tools</h3>
              <p className="text-sm text-muted-foreground text-center">Quizzes, assessments, and multimedia learning resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};