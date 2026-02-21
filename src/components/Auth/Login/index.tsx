import AuthLayout from "../AuthLayout";
import Overlay from "@components/Overlay";
import { loginServices } from "@services/auth.services";
import { useApp } from "../../../context/AppContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const Login = ({
  setIsShowPopup,
  setIsShowPopupRegister,
}: {
  setIsShowPopup: (value: boolean) => void;
  setIsShowPopupRegister: (value: boolean) => void;
}) => {
  const [serverError, setServerError] = useState("");

  const loginSchema = z.object({
    email: z.string().min(1, "Please enter email").email("Email is invalid"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { setUser } = useApp();

  const handleShowPopupRegister = () => {
    setIsShowPopupRegister(true);
    setIsShowPopup(false);
  };

  const onSubmit = async (formData: LoginFormData) => {
    try {
      setServerError("");
      const data = await loginServices(formData);
      setUser(data.user_metadata.name);
      setIsShowPopup(false);
    } catch (error) {
      setServerError("Invalid email or password");
    }
  };

  return (
    <>
      <Overlay onClick={() => setIsShowPopup(false)} />

      <AuthLayout title="Welcome Back" onClick={() => setIsShowPopup(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full"
        >
          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              {...register("email")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black
              transition"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black
              transition"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* SERVER ERROR */}
          {serverError && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              {serverError}
            </div>
          )}

          {/* BUTTON */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-2 w-full py-3 rounded-lg bg-black text-white font-medium
            hover:bg-gray-900 active:scale-[0.98] transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

          {/* SWITCH REGISTER */}
          <p className="text-sm text-center text-gray-500 mt-3">
            Don’t have an account?{" "}
            <span
              className="text-black font-medium cursor-pointer hover:underline"
              onClick={handleShowPopupRegister}
            >
              Sign up
            </span>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default Login;
