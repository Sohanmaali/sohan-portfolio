// import { Card } from '../../components/ui/card';
import { 
  FiUsers, 
  FiFolder, 
  FiMessageSquare, 
  FiCheckCircle,
  FiPlus,
  FiEdit2,
  FiMessageCircle,
  FiImage
} from 'react-icons/fi';

const stats = [
  { 
    name: 'Total Visitors', 
    value: '2,345', 
    change: '+12%', 
    changeType: 'positive',
    icon: <FiUsers className="text-blue-500" size={24} />
  },
  { 
    name: 'Total Projects', 
    value: '24', 
    change: '+2', 
    changeType: 'positive',
    icon: <FiFolder className="text-green-500" size={24} />
  },
  { 
    name: 'Messages', 
    value: '15', 
    change: '+5', 
    changeType: 'positive',
    icon: <FiMessageSquare className="text-yellow-500" size={24} />
  },
  { 
    name: 'Pending Tasks', 
    value: '8', 
    change: '-2', 
    changeType: 'negative',
    icon: <FiCheckCircle className="text-red-500" size={24} />
  },
];

const recentActivities = [
  { 
    id: 1, 
    user: 'John Doe', 
    action: 'created a new project', 
    time: '2 minutes ago',
    icon: <FiPlus className="text-green-500" />
  },
  { 
    id: 2, 
    user: 'Jane Smith', 
    action: 'updated the about page', 
    time: '1 hour ago',
    icon: <FiEdit2 className="text-blue-500" />
  },
  { 
    id: 3, 
    user: 'Mike Johnson', 
    action: 'commented on Project X', 
    time: '3 hours ago',
    icon: <FiMessageCircle className="text-yellow-500" />
  },
  { 
    id: 4, 
    user: 'Sarah Williams', 
    action: 'uploaded new images', 
    time: '5 hours ago',
    icon: <FiImage className="text-purple-500" />
  },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Page</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here's what's happening with your portfolio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        
      </div>

      {/* Recent Activity */}
    
    </div>
  );
}