import React, { useEffect, useState } from 'react';
import { UserIcon, LockIcon, LogInIcon } from 'lucide-react';
interface LoginProps {
  onLogin: (role: 'support' | 'laasAdmin' | 'laasSubAgent', username: string) => void;
}
export const ExternalDashboardLogin = ({
  onLogin
}: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'support' | 'laasAdmin' | 'laasSubAgent'>('laasSubAgent'); // Set default to laasSubAgent
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Test credentials for each role
  const credentials = {
    support: {
      username: 'support_user',
      password: 'support123'
    },
    laasAdmin: {
      username: 'admin_user',
      password: 'admin123'
    },
    laasSubAgent: {
      username: 'agent_user',
      password: 'agent123'
    }
  };
  // For quick login during testing
  useEffect(() => {
    // Pre-fill the fields with the selected role's credentials
    setUsername(credentials[selectedRole].username);
    setPassword(credentials[selectedRole].password);
  }, [selectedRole]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    // Trim whitespace from inputs
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    // Simple validation
    if (!trimmedUsername || !trimmedPassword) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }
    // Check if credentials match for the selected role
    const expectedUsername = credentials[selectedRole].username;
    const expectedPassword = credentials[selectedRole].password;
    if (trimmedUsername === expectedUsername && trimmedPassword === expectedPassword) {
      // Direct login without timeout for more reliable behavior
      onLogin(selectedRole, trimmedUsername);
    } else {
      setError(`Invalid username or password for ${selectedRole} role. Please check your credentials.`);
      setIsSubmitting(false);
    }
  };
  // Handle role change
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value as 'support' | 'laasAdmin' | 'laasSubAgent';
    setSelectedRole(role);
    // Auto-fill credentials for demo purposes
    setUsername(credentials[role].username);
    setPassword(credentials[role].password);
    // Clear any previous errors
    setError('');
  };
  return <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-indigo-600 mx-auto w-12 h-12 rounded-full flex items-center justify-center">
          <LogInIcon className="w-6 h-6 text-white" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          OyaDrop LAAS Dashboard
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to access your dashboard
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Select Dashboard
              </label>
              <select id="role" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" value={selectedRole} onChange={handleRoleChange}>
                <option value="support">Support Dashboard</option>
                <option value="laasAdmin">LAAS Admin Dashboard</option>
                <option value="laasSubAgent">LAAS Sub-Agent Dashboard</option>
              </select>
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input id="username" name="username" type="text" autoComplete="username" required value={username} onChange={e => setUsername(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder={`e.g. ${credentials[selectedRole].username}`} />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Enter password" />
              </div>
            </div>
            {error && <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>}
            <div>
              <button type="submit" disabled={isSubmitting} className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Test Credentials
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      <strong>Support:</strong> support_user / support123
                    </p>
                    <p>
                      <strong>LAAS Admin:</strong> admin_user / admin123
                    </p>
                    <p>
                      <strong>LAAS Sub-Agent:</strong> agent_user / agent123
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>;
};