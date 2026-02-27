import Input from "@components/Input";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribersServices } from "../../services/subscribers.service";
import { AxiosError } from "axios";
import { useState } from "react";

const subscribeSchema = z.object({
  email: z
    .string()
    .min(10, "Email phải có ít nhất 10 ký tự!")
    .email("Email không hợp lệ"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

const Section5 = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    try {
      await subscribersServices(data);
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
    <section className="w-full mb-[100px] ">
      <div className="text-center container">
        {/* TITLE */}
        <h2 className="text-[30px] md:text-[45px] font-semibold text-[#1F1F1F] leading-tight">
          Subscribe to Our Newsletter for Design Insights
        </h2>

        <p className="text-[16px] md:text-[18px] text-[#6B6B6B] mt-[25px] leading-relaxed">
          Be the first to discover trends, inspirations, and special offers as
          we bring the world of design directly to your inbox.
        </p>

        {/* FORM CARD */}
        <div className="mt-[50px] border-gray-300 border-[1px] bg-white shadow-lg rounded-[20px] p-[20px] md:p-[30px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-[15px]"
          >
            {/* INPUT */}
            <div className="relative flex-1">
              <EnvelopeIcon className="w-5 h-5 absolute left-[18px] top-1/2 -translate-y-1/2 text-[#9CA3AF]" />

              <Input
                {...register("email", {
                  onChange: () => setSuccessMessage(""),
                })}
                placeholder="Enter your email address"
                className="w-full h-[55px] pl-[45px] pr-[15px] rounded-[12px] bg-[#F3F3F3] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F]"
              />
            </div>

            {/* BUTTON */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="h-[55px] px-[35px] rounded-[12px] bg-[#1F1F1F] text-white font-semibold text-[16px] hover:bg-black transition disabled:opacity-60"
            >
              {isSubmitting ? "Đang gửi..." : "Subscribe"}
            </button>
          </form>

          {/* MESSAGE */}
          <div className="mt-[20px] min-h-[24px]">
            {successMessage && (
              <p className="text-green-600 font-medium">{successMessage}</p>
            )}

            {errors.email && (
              <p className="text-red-500 font-medium text-left">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
