import AuthLayout from "../AuthLayout";
import Overlay from "@components/Overlay";
import { registerServices } from "@services/auth.services";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

const Register = ({
  setIsShowPopupRegister,
  setIsShowPopup,
}: {
  setIsShowPopupRegister: (isShowPopupRegister: boolean) => void;
  setIsShowPopup: (isShowPopup: boolean) => void;
}) => {
  const registerSchema = z.object({
    email: z.string().min(5, "Please enter email").email("Email is invalid"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string().min(3, "Name must be at least 3 characters"),
  });

  type RegisterFormData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (dataFormRegister: RegisterFormData) => {
    try {
      await registerServices(dataFormRegister);
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          setError("email", {
            type: "server",
            message: "Email is already registered",
          });
          return;
        }
      }
    }
  };

  const handleShowPopupLogin = () => {
    setIsShowPopupRegister(false);
    setIsShowPopup(true);
  };

  return (
    <>
      <Overlay onClick={() => setIsShowPopupRegister(false)} />

      <AuthLayout
        title="Create Account"
        onClick={() => setIsShowPopupRegister(false)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full max-w-[420px] mx-auto"
        >
          {/* NAME */}
          <div className="flex flex-col gap-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black
              transition duration-200"
            />
            {errors.name && (
              <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
                {errors.name.message}
              </div>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black
              transition duration-200"
            />
            {errors.email && (
              <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-2">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black
              transition duration-200"
            />
            {errors.password && (
              <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* BUTTON */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-medium
            hover:bg-gray-900 active:scale-[0.98]
            transition duration-200
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>

          {/* FOOTER */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              className="underline cursor-pointer hover:text-black transition"
              onClick={handleShowPopupLogin}
            >
              Sign in
            </span>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
