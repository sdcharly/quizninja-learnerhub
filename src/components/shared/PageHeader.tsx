import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showLogout?: boolean;
}

export const PageHeader = ({ title, subtitle, showLogout = true }: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>
        {showLogout && (
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};