"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  university: z
    .string()
    .min(2, { message: "University name must be at least 2 characters." }),
  yearOfStudy: z.string(),
  branch: z.string(),
  position: z.string(),
  whyJoin: z
    .string()
    .min(50, { message: "Please provide at least 50 characters." }),
  skills: z
    .string()
    .min(50, { message: "Please provide at least 50 characters." }),
  portfolio: z.string().url().optional().or(z.literal("")),
  availability: z.enum(["Yes", "No", "Maybe"]),
  timeCommitment: z
    .string()
    .min(1, { message: "Please provide your time commitment." }),
});

export default function RecruitmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      university: "",
      yearOfStudy: "",
      branch: "",
      position: "",
      whyJoin: "",
      skills: "",
      portfolio: "",
      availability: "Maybe",
      timeCommitment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Here you would typically send the form data to your backend
    console.log(values);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully!");
      form.reset();
    }, 2000);
  }

  return (
    <div className="container mx-auto py-10 bg-background text-white">
      <h1 className="text-3xl font-bold mb-6">
        Apply for Core Team Membership
      </h1>
      <p className="mb-6">
        We are looking for passionate and driven individuals to join our core
        team! If you're excited about technology, innovation, and making an
        impact, fill out the form below to apply.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Personal Information</h2>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University/College</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your university or college name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="yearOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year of Study</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year of study" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        "1st Year",
                        "2nd Year",
                        "3rd Year",
                        "4th Year",
                        "5th Year",
                      ].map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Branch/Department</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your branch/department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        "Computer Science",
                        "Electronics",
                        "Mechanical",
                        "Civil",
                        "Other",
                      ].map((branch) => (
                        <SelectItem key={branch} value={branch}>
                          {branch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Application Details</h2>
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position Applying For</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the position you're applying for" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        "President",
                        "Vice President",
                        "Technical Head",
                        "Design Lead",
                        "Event Coordinator",
                        "Social Media Lead",
                        "Content Writer",
                        "Treasurer",
                      ].map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whyJoin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do you want to join the core team?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe why you're interested in being part of the core team and what you aim to contribute to the club."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relevant Skills/Experience</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List any relevant skills or experiences (technical, organizational, leadership) that make you a good fit for this role."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="portfolio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portfolio/LinkedIn/GitHub (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://your-portfolio-or-profile-url.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Share any links to your work, portfolio, LinkedIn, GitHub,
                    or personal website.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Availability & Commitment
            </h2>
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    Are you available to commit to regular meetings and club
                    activities?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="No" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Maybe" />
                        </FormControl>
                        <FormLabel className="font-normal">Maybe</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeCommitment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How much time per week can you dedicate to the club?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 5-10 hours" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
