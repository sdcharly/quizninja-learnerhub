import { BookOpen, Users, Trophy, List } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatsCard } from "@/components/shared/StatsCard";
import { ActionCard } from "@/components/shared/ActionCard";

const TeacherDashboard = () => {
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
      <PageHeader 
        title="Teacher Dashboard" 
        subtitle="Welcome back, Teacher" 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActionCard
            title="Create New Quiz"
            description="Design a new quiz for your students"
            buttonText="Create Quiz"
            onClick={() => {}}
          />

          <ActionCard
            title="Manage Students"
            description="Add or remove students from your class"
            buttonText="Manage Students"
            buttonVariant="outline"
            onClick={() => {}}
          />

          <ActionCard
            title="View Analytics"
            description="Check student performance and progress"
            buttonText="View Analytics"
            buttonVariant="outline"
            onClick={() => {}}
          />
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;