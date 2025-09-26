import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  HardDrive, 
  FileText, 
  Upload, 
  Settings,
  Shield,
  BarChart3
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  {
    name: 'Dashboard',
    id: 'dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Employee Profiles',
    id: 'profiles',
    icon: Users,
  },
  {
    name: 'Technology Inventory',
    id: 'inventory',
    icon: HardDrive,
  },
  {
    name: 'File Management',
    id: 'files',
    icon: FileText,
  },
  {
    name: 'Data Import',
    id: 'import',
    icon: Upload,
  },
  {
    name: 'Compliance',
    id: 'compliance',
    icon: Shield,
  },
  {
    name: 'Reports',
    id: 'reports',
    icon: BarChart3,
  },
  {
    name: 'Settings',
    id: 'settings',
    icon: Settings,
  },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="flex flex-col w-64 bg-dashboard-sidebar border-r border-border">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <h1 className="text-xl font-bold text-dashboard-sidebar-foreground">
          IT Supervision
        </h1>
        <p className="text-sm text-dashboard-sidebar-foreground/70 mt-1">
          Technology Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11",
                activeTab === item.id
                  ? "bg-dashboard-sidebar-accent text-white"
                  : "text-dashboard-sidebar-foreground hover:bg-dashboard-sidebar-foreground/10"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border/50">
        <div className="text-xs text-dashboard-sidebar-foreground/50">
          Company Server Deployment
        </div>
      </div>
    </div>
  );
}