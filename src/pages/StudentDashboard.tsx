import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, Trophy, Timer, List } from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

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
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-500">Welcome back, Student</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
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