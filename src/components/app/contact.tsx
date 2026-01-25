import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

/* ---------------- SCHEMA ---------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  workplace: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length >= 10,
      "Phone number must be at least 10 digits",
    )
    .refine((val) => !val || /^[0-9]+$/.test(val), "Only numbers allowed"),

  source: z.string().min(1, "Please select a source"),
  helpWith: z.array(z.string()).min(1, "Select at least one option"),
  notes: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length >= 10,
      "Notes must be at least 10 characters",
    ),
});

type ContactForm = z.infer<typeof contactSchema>;

/* ---------------- OPTIONS ---------------- */
const helpOptions = [
  "Frontend Development",
  "React / Next.js Projects",
  "UI/UX Enhancements",
  "Landing Pages",
  "Portfolio Building",
  "Want to Hire Me",
  "Freelance",
  "Debugging",
  "Other",
];

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      workplace: "",
      email: "",
      phone: "",
      source: "",
      helpWith: [],
      notes: undefined,
    },
  });

  const selectedHelp = watch("helpWith");

  /* -------- Toggle Multi Select -------- */
  const toggleHelp = (option: string) => {
    if (selectedHelp.includes(option)) {
      setValue(
        "helpWith",
        selectedHelp.filter((item) => item !== option),
      );
    } else {
      setValue("helpWith", [...selectedHelp, option]);
    }
  };

  /* -------- Fake API Call -------- */
  const fakeApiCall = (data: ContactForm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("✅ Fake API Response:", data);
        resolve(true);
      }, 2000); // 2 sec delay
    });
  };

  /* -------- Submit Handler -------- */
  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    setSuccess(false);

    try {
      await fakeApiCall(data);

      setSuccess(true);

      // Reset form after submission
      reset();
    } catch (error) {
      console.log("❌ Submission Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="my-5 mx-1 md:my-0 md:mx-0 scroll-mt-40">
      <div className="max-w-2xl mx-auto relative items-center py-0 px-2 md:px-0 w-full">
        <div>
          <div className="p-5 md:p-8 bg-[linear-gradient(90deg,#476fff1f_0%,#47250226_100%)] flex flex-col rounded-2xl overflow-hidden md:rounded-[20px] m-1 mt-10 gap-3 items-center justify-between">
            {success ? (
              <div className="w-full max-w-md text-center flex flex-col items-center gap-4 p-6">
                {/* ✅ Heading */}
                <h2 className="text-xl font-semibold dark:text-white">
                  Message Sent Successfully!
                </h2>

                {/* ✅ Description */}
                <p className="text-sm opacity-70 max-w-sm leading-relaxed">
                  Thanks for reaching out. I’ve received your details and will
                  get back to you shortly.
                </p>

                {/* ✅ Button */}
                <button
                  onClick={() => setSuccess(false)}
                  className="cursor-pointer mt-2 px-5 py-2 rounded-xl bg-black/10 dark:hover:bg-black/20 dark:bg-white/10 hover:bg-white/20 transition text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="flex items-center flex-col gap-3 md:gap-5">
                {/* ---------------- HEADER ---------------- */}
                <div className="flex items-center justify-center gap-2">
                  <img
                    className="mt-1 w-30 dark:filter-[invert(1)]"
                    src="/letsconnect-text-2.png"
                    alt="Lets connect"
                  />
                </div>

                <h3 className="text-base md:text-lg font-medium tracking-[-0.28px] text-center opacity-70 max-w-[300px]">
                  Drop your details below — I’ll reach out shortly.
                </h3>

                {/* ---------------- FORM ---------------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-6 p-2 py-6 md:p-6 max-w-2xl mx-auto">
                    {/* ---------------- NAME ---------------- */}
                    <div>
                      <p className="text-lg flex sm:flex-row flex-col sm:items-center gap-1">
                        <span className="text-nowrap">
                          Hello, Praveen! I'm{" "}
                        </span>
                        <input
                          {...register("name")}
                          className="inline-block w-full border-b-2 border-dashed dark:border-[#978f8f] border-[#22242c7d] bg-transparent outline-none"
                          placeholder="your name"
                        />
                      </p>
                      {errors.name && (
                        <p className="text-red-400 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* ---------------- WORKPLACE ---------------- */}
                    <div>
                      <p className="text-lg flex items-center gap-1">
                        <span className="text-nowrap">I work at </span>
                        <input
                          {...register("workplace")}
                          className="inline-block w-full border-b-2 border-dashed dark:border-[#978f8f] border-[#22242c7d] bg-transparent outline-none"
                          placeholder="where you work (optional)"
                        />
                      </p>
                    </div>

                    {/* ---------------- EMAIL ---------------- */}
                    <div>
                      <p className="text-lg flex flex-col">
                        <span>You can reach me at </span>
                        <input
                          {...register("email")}
                          className="inline-block border-b-2 border-dashed dark:border-[#978f8f] border-[#22242c7d] bg-transparent outline-none"
                          placeholder="your email"
                        />
                      </p>
                      {errors.email && (
                        <p className="text-red-400 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* ---------------- PHONE ---------------- */}
                    <div>
                      <p className="text-lg flex sm:flex-row flex-col sm:items-center gap-1">
                        <span className="text-nowrap">
                          My contact number is{" "}
                        </span>
                        <input
                          {...register("phone")}
                          className="inline-block w-full border-b-2 border-dashed dark:border-[#978f8f] border-[#22242c7d] bg-transparent outline-none"
                          placeholder="your phone (optional)"
                        />
                      </p>
                      {errors.phone && (
                        <p className="text-red-400 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* ---------------- SOURCE ---------------- */}
                    <div>
                      <p className="text-lg">I found you through</p>

                      <select
                        {...register("source")}
                        className="w-full border-b-2 border-dashed dark:border-[#978f8f] border-[#22242c7d] bg-transparent outline-none"
                      >
                        <option value="" className="text-black">
                          Select source
                        </option>

                        {[
                          "Portfolio",
                          "LinkedIn",
                          "Instagram",
                          "Leetcode",
                          "Github",
                          "Naukri",
                          "Other",
                        ].map((item) => (
                          <option
                            key={item}
                            value={item}
                            className="text-black"
                          >
                            {item}
                          </option>
                        ))}
                      </select>

                      {errors.source && (
                        <p className="text-red-400 text-sm">
                          {errors.source.message}
                        </p>
                      )}
                    </div>

                    {/* ---------------- HELP WITH ---------------- */}
                    <div>
                      <p className="text-lg mb-2">
                        I need your help with: (select all that apply)
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {helpOptions.map((item) => (
                          <div
                            key={item}
                            onClick={() => toggleHelp(item)}
                            className={cn(
                              "cursor-pointer p-3 flex items-center justify-center border-2 border-dashed rounded-lg text-center transition-all",
                              selectedHelp.includes(item)
                                ? "border-blue-500  text-blue-500 dark:text-blue-400 scale-105"
                                : "border-[#22242c7d] dark:border-[#978f8f]",
                            )}
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      {errors.helpWith && (
                        <p className="text-red-400 text-sm">
                          {errors.helpWith.message}
                        </p>
                      )}
                    </div>

                    {/* ---------------- NOTES ---------------- */}
                    <div>
                      <p className="text-lg">Additional details:</p>
                      <textarea
                        {...register("notes")}
                        rows={4}
                        className="w-full border-2 border-dashed dark:border-[#978f8f] border-[#22242c7d] p-2 bg-transparent outline-none rounded-lg"
                        placeholder="Tell me more..."
                      />
                      {errors.notes && (
                        <p className="text-red-400 text-sm">
                          {errors.notes.message}
                        </p>
                      )}
                    </div>

                    {/* ---------------- SUBMIT ---------------- */}
                    <button
                      type="submit"
                      disabled={loading}
                      className={cn(
                        "sm:px-6 px-3 py-1.5 sm:py-3 rounded-xl font-medium transition cursor-pointer",
                        loading
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white",
                      )}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
                {/* ---------------- END FORM ---------------- */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
