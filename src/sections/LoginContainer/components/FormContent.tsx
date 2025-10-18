import { useState } from "react";

interface FormContentProps {
  onLogin: (email: string, type: 'teacher' | 'admin') => void;
}

export const FormContent = ({ onLogin }: FormContentProps) => {
  const [activeTab, setActiveTab] = useState<'teacher' | 'admin'>('teacher');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      // Demo credentials check
      const validCredentials = [
        { email: 'teacher@edu.com', password: 'teacher123', type: 'teacher' },
        { email: 'admin@edu.com', password: 'admin123', type: 'admin' }
      ];

      const isValid = validCredentials.some(cred => 
        cred.email === email && cred.password === password && cred.type === activeTab
      ) || (email && password); // Allow any email/password for demo

      if (isValid) {
        // Call the onLogin callback to update the app state
        onLogin(email, activeTab);
      } else {
        alert('Invalid credentials. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  const fillDemoCredentials = () => {
    if (activeTab === 'teacher') {
      setEmail('teacher@edu.com');
      setPassword('teacher123');
    } else {
      setEmail('admin@edu.com');
      setPassword('admin123');
    }
  };

  return (
    <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pb-6 px-6">
      <form onSubmit={handleLogin} className="box-border caret-transparent gap-x-2 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
        <div
          role="tablist"
          className="text-gray-500 items-center bg-gray-200 box-border caret-transparent grid grid-cols-[repeat(2,minmax(0px,1fr))] h-9 justify-center w-full mb-6 p-[3px] rounded-[14px]"
        >
          <button
            type="button"
            role="tab"
            onClick={() => setActiveTab('teacher')}
            className={`text-sm font-medium items-center caret-transparent gap-x-2 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap border px-2 py-1 rounded-[14px] border-solid border-transparent ${
              activeTab === 'teacher' 
                ? 'text-[oklch(0.145_0_0)] bg-white' 
                : 'text-[oklch(0.145_0_0)] bg-transparent'
            }`}
          >
            <img
              src="https://c.animaapp.com/mfusfki5CQMgBt/assets/icon-5.svg"
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.708_0_0_/_0.5)] text-nowrap w-4"
            />
            Teacher
          </button>
          <button
            type="button"
            role="tab"
            onClick={() => setActiveTab('admin')}
            className={`text-sm font-medium items-center caret-transparent gap-x-2 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap border px-2 py-1 rounded-[14px] border-solid border-transparent ${
              activeTab === 'admin' 
                ? 'text-[oklch(0.145_0_0)] bg-white' 
                : 'text-[oklch(0.145_0_0)] bg-transparent'
            }`}
          >
            <img
              src="https://c.animaapp.com/mfusfki5CQMgBt/assets/icon-6.svg"
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.708_0_0_/_0.5)] text-nowrap w-4"
            />
            Admin
          </button>
        </div>
        
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[14px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder={activeTab === 'teacher' ? 'teacher@university.edu' : 'admin@university.edu'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-base bg-gray-100 box-border caret-transparent flex h-11 leading-6 outline-[oklab(0.708_0_0_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5 focus:outline-none focus:ring-2 focus:ring-[oklch(0.546_0.245_262.881)]"
          />
        </div>
        
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[14px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-2">
            Password
          </label>
          <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-base bg-gray-100 box-border caret-transparent flex h-11 leading-6 outline-[oklab(0.708_0_0_/_0.5)] text-start w-full border pl-3 pr-10 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5 focus:outline-none focus:ring-2 focus:ring-[oklch(0.546_0.245_262.881)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-sm font-medium items-center bg-transparent caret-transparent gap-x-1.5 flex shrink-0 h-full justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1.5 text-nowrap px-2.5 py-2 rounded-lg right-0 top-0 hover:bg-gray-50"
            >
              <img
                src="https://c.animaapp.com/mfusfki5CQMgBt/assets/icon-7.svg"
                alt="Toggle password visibility"
                className="text-[oklch(0.554_0.046_257.417)] box-border caret-transparent shrink-0 h-4 outline-[oklab(0.708_0_0_/_0.5)] text-nowrap w-4"
              />
            </button>
          </div>
        </div>
        
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <button
            type="submit"
            disabled={isLoading}
            className="text-[oklch(1_0_0)] text-sm font-medium items-center bg-[oklch(0.546_0.245_262.881)] caret-transparent gap-x-2 inline-flex shrink-0 h-11 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap w-full mb-4 px-4 py-2 rounded-lg hover:bg-[oklch(0.5_0.245_262.881)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="text-[oklch(0.546_0.245_262.881)] text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 inline-flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 underline-offset-4 text-nowrap w-full px-4 py-2 rounded-lg hover:underline"
          >
            Use Demo Credentials
          </button>
        </div>
      </form>
    </div>
  );
};
