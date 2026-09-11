import type { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

type BadgeVariant = "default" | "secondary" | "outline" | "destructive" | "ghost" | "link";

const statusVariant: Record<string, BadgeVariant> = {
  "In Progress": "default",
  Planning: "secondary",
  Completed: "outline",
};

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  children?: ReactNode;
}

const ProjectCard = ({ title, description, status, children }: ProjectCardProps) => {
  const variant: BadgeVariant = statusVariant[status] ?? "secondary";

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <Badge variant={variant}>{status}</Badge>
        <Button
          variant="link"
          size="sm"
          className="ml-4 hover:underline cursor-pointer"
        >
          View Project
        </Button>
      </CardContent>

      {children && <CardFooter className="p-6">{children}</CardFooter>}
    </Card>
  );
};

export default ProjectCard;
