import Input from "@components/Input";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribersServices } from "../../services/subscribers.service";
import { AxiosError } from "axios";
import { useState } from "react";

const Section5 = () => {
  const subscribeSchema = z.object({
    email: z
      .string()
      .min(10, "Email phải có ít nhất 10 ký tự!")
      .email("Email không hợp lệ"),
  });
  const [successMessage, setSuccessMessage] = useState("");

  type subscribeFormData = z.infer<typeof subscribeSchema>;

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<subscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (dataForm: subscribeFormData) => {
    try {
      await subscribersServices(dataForm);
      setSuccessMessage("Cảm ơn bạn đã đăng ký!");
      reset();
    } catch (error) {
      setSuccessMessage("");
      if (error instanceof AxiosError) {
        if (error.response?.data?.code === "23505") {
          setError("email", {
            type: "server",
            message: "Email này đã được đăng ký!",
          });
          return;
        }
      }

      setError("email", {
        type: "server",
        message: "Có lỗi xảy ra, vui lòng thử lại",
      });
    }
  };

  return (
    <div className="flex flex-col items-center relative translate-y-[35px]">
      <div className="relative">
        <h1 className="text-[45px] font-semibold maxMd:text-[30px] text-black max-w-[849px] text-center">
          Subscribe to Our Newsletter for Design Insights
        </h1>
        <p className="text-[18px] font-medium text-gray-500 leading-[165.2%] max-w-[770px] text-center mt-[30px]">
          Be the first to discover trends, inspirations, and special offers as
          we bring the world of design directly to your inbox
        </p>

        <div className="absolute bottom-[-35px] text-center left-1/2 -translate-x-1/2">
          {successMessage && (
            <p className="text-green-600 mt-2 font-medium ">{successMessage}</p>
          )}
          {errors.email && (
            <p className="" style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative max-w-[979px] h-[75px]  w-full mt-[50px]"
      >
        <EnvelopeIcon className=" w-[24px] h-[24px] absolute left-[30px] top-1/2 -translate-y-1/2" />
        <Input
          {...register("email", {
            onChange: () => setSuccessMessage(""),
          })}
          placeholder="Enter your email address"
          className="w-full h-full text-[18px] bg-white font-medium pl-[70px] pr-[60%] rounded-[4px]"
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-[#1F1F1F] text-white -translate-y-1/2 px-[50px] h-[50px] absolute top-1/2 right-[10px] rounded-[4px] text-[18px] font-semibold"
        >
          {isSubmitting ? "Đang gửi..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default Section5;
