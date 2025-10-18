import { useState } from "react";
import { Header } from "@/sections/Header";
import { LoginContainer } from "@/sections/LoginContainer";
import { Dashboard } from "@/pages/Dashboard";

interface User {
  email: string;
  type: 'teacher' | 'admin';
}

export const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, type: 'teacher' | 'admin') => {
    setUser({ email, type });
  };

  const handleLogout = () => {
    setUser(null);
  };

  // If user is logged in, show dashboard
  if (user) {
    return (
      <Dashboard 
        userType={user.type} 
        userEmail={user.email} 
        onLogout={handleLogout} 
      />
    );
  }

  // Otherwise show login page
  return (
    <body className="text-[oklch(0.145_0_0)] text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[oklab(0.708_0_0_/_0.5)] text-left indent-[0px] normal-case visible border-separate font-ui_sans_serif">
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="box-border caret-transparent h-[952px] outline-[oklab(0.708_0_0_/_0.5)] translate-y-12">
          <Header />
          <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.708_0_0_/_0.5)] overflow-auto inset-0">
            <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.708_0_0_/_0.5)] w-full">
              <LoginContainer onLogin={handleLogin} />
              <section
                aria-label="Notifications alt+T"
                className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]"
              ></section>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
