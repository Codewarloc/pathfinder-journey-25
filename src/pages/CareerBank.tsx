import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, TrendingUp, Users, DollarSign } from "lucide-react";

const CareerBank = () => {
  const careers = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      salary: "$75,000 - $120,000",
      demand: "High",
      growth: "+22%",
      category: "Technology",
      skills: ["JavaScript", "React", "Node.js"],
      description: "Build and maintain software applications using modern technologies..."
    },
    {
      title: "Data Scientist", 
      company: "Analytics Inc",
      salary: "$80,000 - $130,000",
      demand: "Very High",
      growth: "+35%",
      category: "Data & Analytics",
      skills: ["Python", "Machine Learning", "SQL"],
      description: "Analyze complex data to help organizations make informed decisions..."
    },
    {
      title: "UX Designer",
      company: "Design Studio",
      salary: "$65,000 - $95,000", 
      demand: "High",
      growth: "+18%",
      category: "Design",
      skills: ["Figma", "User Research", "Prototyping"],
      description: "Design user-centered digital experiences that delight and engage..."
    },
    {
      title: "Product Manager",
      company: "Startup Inc",
      salary: "$90,000 - $140,000",
      demand: "High", 
      growth: "+25%",
      category: "Management",
      skills: ["Strategy", "Analytics", "Leadership"],
      description: "Drive product vision and strategy while coordinating cross-functional teams..."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Career Bank</h1>
          <p className="text-muted-foreground">Explore thousands of career opportunities tailored to your interests</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search careers, companies, or skills..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Salary Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50k">$0 - $50k</SelectItem>
                <SelectItem value="50-80k">$50k - $80k</SelectItem>
                <SelectItem value="80-120k">$80k - $120k</SelectItem>
                <SelectItem value="120k+">$120k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6">
          {careers.map((career, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{career.title}</CardTitle>
                    <p className="text-muted-foreground">{career.company}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Star className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground mb-4">{career.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {career.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <DollarSign className="w-4 h-4 mr-1 text-primary" />
                        <span className="font-medium">{career.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                        <span>Growth: {career.growth}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-1 text-secondary" />
                        <span>Demand: {career.demand}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full btn-hero">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CareerBank;