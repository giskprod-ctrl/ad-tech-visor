import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { OverviewCards } from '@/components/Dashboard/OverviewCards';
import { FileUploadZone } from '@/components/FileUpload/FileUploadZone';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Search, Filter, Download } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const employees = [
    { 
      id: 1, 
      name: 'John Smith', 
      department: 'IT', 
      role: 'System Admin',
      devices: 3,
      compliance: 'Good',
      lastUpdate: '2024-01-15'
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      department: 'HR', 
      role: 'Manager',
      devices: 2,
      compliance: 'Warning',
      lastUpdate: '2024-01-14'
    },
    { 
      id: 3, 
      name: 'Mike Davis', 
      department: 'Finance', 
      role: 'Analyst',
      devices: 2,
      compliance: 'Good',
      lastUpdate: '2024-01-13'
    },
  ];

  const handleFileUpload = (files: FileList, type: string) => {
    console.log(`Uploading ${files.length} files for ${type}`);
    // File processing logic will go here
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">IT Supervision Dashboard</h2>
        <p className="text-muted-foreground">Monitor your company's technology infrastructure</p>
      </div>
      <OverviewCards />
      
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">AD Export Processed</p>
                <p className="text-xs text-muted-foreground">248 employee records updated</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">WSUS Report Available</p>
                <p className="text-xs text-muted-foreground">7 devices need updates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Software Compliance</span>
                <Badge variant="secondary">92%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Security Updates</span>
                <Badge variant="secondary">87%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Document Management</span>
                <Badge variant="secondary">95%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProfiles = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Employee Profiles</h2>
          <p className="text-muted-foreground">Manage individual technology assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Devices</TableHead>
              <TableHead>Compliance</TableHead>
              <TableHead>Last Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees
              .filter(emp => emp.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.devices}</TableCell>
                <TableCell>
                  <Badge 
                    variant={employee.compliance === 'Good' ? 'default' : 'secondary'}
                    className={employee.compliance === 'Good' 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-warning text-warning-foreground'
                    }
                  >
                    {employee.compliance}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{employee.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );

  const renderDataImport = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Data Import Center</h2>
        <p className="text-muted-foreground">Upload and manage your company data files</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <FileUploadZone
          title="Active Directory Export"
          description="Upload CSV exports from your Active Directory server"
          acceptedTypes={['.csv', '.txt']}
          onFileUpload={(files) => handleFileUpload(files, 'AD')}
        />

        <FileUploadZone
          title="WSUS Reports"
          description="Upload WSUS compliance and update reports"
          acceptedTypes={['.csv', '.xml', '.txt']}
          onFileUpload={(files) => handleFileUpload(files, 'WSUS')}
        />

        <FileUploadZone
          title="Employee Documents"
          description="Upload Excel files and PDFs related to employees"
          acceptedTypes={['.xlsx', '.xls', '.pdf', '.doc', '.docx']}
          onFileUpload={(files) => handleFileUpload(files, 'Documents')}
        />

        <FileUploadZone
          title="Technology Inventory"
          description="Upload hardware and software inventory files"
          acceptedTypes={['.csv', '.xlsx', '.json']}
          onFileUpload={(files) => handleFileUpload(files, 'Inventory')}
        />
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'profiles':
        return renderProfiles();
      case 'import':
        return renderDataImport();
      case 'inventory':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Technology Inventory</h2>
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Technology inventory management coming soon...</p>
            </Card>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold capitalize">{activeTab}</h2>
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">This section is under development...</p>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-dashboard-bg">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
