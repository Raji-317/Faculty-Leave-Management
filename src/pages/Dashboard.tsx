import { useState } from "react";

interface DashboardProps {
  userType: 'teacher' | 'admin';
  userEmail: string;
  onLogout: () => void;
}

export const Dashboard = ({ userType, userEmail, onLogout }: DashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');

  const teacherSections = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'leave-requests', name: 'Leave Requests', icon: '📝' },
    { id: 'class-schedule', name: 'Class Schedule', icon: '📅' },
    { id: 'adjustments', name: 'Class Adjustments', icon: '🔄' },
    { id: 'profile', name: 'Profile', icon: '👤' }
  ];

  const adminSections = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'all-requests', name: 'All Leave Requests', icon: '📋' },
    { id: 'faculty-management', name: 'Faculty Management', icon: '👥' },
    { id: 'reports', name: 'Reports', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const sections = userType === 'teacher' ? teacherSections : adminSections;

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {userType === 'teacher' ? 'Pending Requests' : 'Total Requests'}
                </h3>
                <p className="text-3xl font-bold text-[oklch(0.546_0.245_262.881)]">
                  {userType === 'teacher' ? '2' : '15'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {userType === 'teacher' ? 'Approved Leaves' : 'Approved Today'}
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  {userType === 'teacher' ? '5' : '8'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {userType === 'teacher' ? 'Classes This Week' : 'Faculty Count'}
                </h3>
                <p className="text-3xl font-bold text-blue-600">
                  {userType === 'teacher' ? '12' : '45'}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Leave request submitted</p>
                    <p className="text-sm text-gray-600">Medical leave for Dec 15-16</p>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Class adjustment approved</p>
                    <p className="text-sm text-gray-600">CS101 moved to Room 204</p>
                  </div>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'leave-requests':
      case 'all-requests':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                {userType === 'teacher' ? 'My Leave Requests' : 'All Leave Requests'}
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Medical Leave</h3>
                    <p className="text-sm text-gray-600">Dec 15-16, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Pending
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Personal Leave</h3>
                    <p className="text-sm text-gray-600">Dec 20-22, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {sections.find(s => s.id === activeSection)?.name}
            </h2>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-8 h-8 bg-[oklch(0.546_0.245_262.881)] rounded-lg">
                <img
                  src="https://c.animaapp.com/mfusfki5CQMgBt/assets/icon-4.svg"
                  alt="EduLeave"
                  className="w-5 h-5"
                />
              </div>
              <h1 className="text-xl font-bold text-gray-900">EduLeave</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, <span className="font-medium">{userEmail}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-[oklch(0.546_0.245_262.881)] text-white text-xs rounded-full capitalize">
                  {userType}
                </span>
                <button
                  onClick={onLogout}
                  className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm border p-4">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-[oklch(0.546_0.245_262.881)] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span className="font-medium">{section.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
