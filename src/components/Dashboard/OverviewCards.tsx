import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HardDrive, FileText, AlertTriangle } from "lucide-react";

export function OverviewCards() {
  const stats = [
    {
      title: "Total Employees",
      value: "248",
      change: "+12 this month",
      icon: Users,
      color: "text-chart-1",
    },
    {
      title: "Active Devices",
      value: "892",
      change: "+23 new devices",
      icon: HardDrive,
      color: "text-chart-2",
    },
    {
      title: "Documents Managed",
      value: "1,542",
      change: "+89 this week",
      icon: FileText,
      color: "text-chart-3",
    },
    {
      title: "Compliance Issues",
      value: "7",
      change: "-3 resolved",
      icon: AlertTriangle,
      color: "text-warning",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-2">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}