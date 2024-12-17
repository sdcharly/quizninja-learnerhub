import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline";
  onClick: () => void;
}

export const ActionCard = ({ 
  title, 
  description, 
  buttonText, 
  buttonVariant = "default",
  onClick 
}: ActionCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" variant={buttonVariant} onClick={onClick}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};