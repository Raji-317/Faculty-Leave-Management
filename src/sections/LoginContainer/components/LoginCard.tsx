import { LoginHeader } from "@/sections/LoginContainer/components/LoginHeader";
import { LoginForm } from "@/sections/LoginContainer/components/LoginForm";
import { DemoCredentials } from "@/sections/LoginContainer/components/DemoCredentials";

export const LoginCard = () => {
  return (
    <div className="box-border caret-transparent max-w-md outline-[oklab(0.708_0_0_/_0.5)] w-full">
      <LoginHeader />
      <LoginForm />
      <DemoCredentials />
    </div>
  );
};