import { BookOpen, Trophy, Timer, List } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatsCard } from "@/components/shared/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StudentDashboard = () => {
  const stats = [
    {
      title: "Available Quizzes",
      value: "3",
      description: "Quizzes ready to take",
      icon: BookOpen,
    },
    {
      title: "Completed Quizzes",
      value: "8",
      description: "Successfully finished quizzes",
      icon: Trophy,
    },
    {
      title: "Average Score",
      value: "85%",
      description: "Your performance score",
      icon: Timer,
    },
    {
      title: "Pending Quizzes",
      value: "2",
      description: "Quizzes to complete",
      icon: List,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Student Dashboard" 
        subtitle="Welcome back, Student" 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Available Quizzes</CardTitle>
              <CardDescription>Start a new quiz from your assignments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Mathematics Quiz</h4>
                    <p className="text-sm text-gray-500">Due in 2 days</p>
                  </div>
                  <Button>Start Quiz</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Science Quiz</h4>
                    <p className="text-sm text-gray-500">Due in 5 days</p>
                  </div>
                  <Button>Start Quiz</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Recent Results</CardTitle>
              <CardDescription>Your latest quiz performances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">History Quiz</h4>
                    <p className="text-sm text-gray-500">Completed yesterday</p>
                  </div>
                  <span className="text-green-600 font-medium">90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Geography Quiz</h4>
                    <p className="text-sm text-gray-500">Completed 3 days ago</p>
                  </div>
                  <span className="text-green-600 font-medium">85%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;