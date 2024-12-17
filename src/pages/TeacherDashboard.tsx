import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Trophy, List } from "lucide-react";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const stats = [
    {
      title: "Total Quizzes",
      value: "12",
      description: "Active quizzes in your library",
      icon: BookOpen,
    },
    {
      title: "Total Students",
      value: "48",
      description: "Students enrolled in your classes",
      icon: Users,
    },
    {
      title: "Completion Rate",
      value: "87%",
      description: "Average quiz completion rate",
      icon: Trophy,
    },
    {
      title: "Pending Reviews",
      value: "5",
      description: "Quizzes pending review",
      icon: List,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
            <p className="text-gray-500">Welcome back, Teacher</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Create New Quiz</CardTitle>
              <CardDescription>Design a new quiz for your students</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Create Quiz</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Manage Students</CardTitle>
              <CardDescription>Add or remove students from your class</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">Manage Students</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>View Analytics</CardTitle>
              <CardDescription>Check student performance and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">View Analytics</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;