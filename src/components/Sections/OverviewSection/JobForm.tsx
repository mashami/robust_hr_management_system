"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Jobstatus, JopLevel, JopType, PriorityStatus } from "@prisma/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { CreateJobType } from "@/utils/types";
import { createJob } from "@/services/user";

interface JobFormProps {
  jobFormOpen: boolean;
  setJobFormOpen: Dispatch<SetStateAction<boolean>>;
}

const JobForm = ({ jobFormOpen, setJobFormOpen }: JobFormProps) => {
  const [isLoading, setIsLoading] = useState(false); // ✅ Add loading state

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "FullTime" as JopType,
    level: "Officer" as JopLevel,
    minSalary: "",
    maxSalary: "",
    description: "",
    requirements: [""],
    skills: [""],
    benefits: [""],
    status: "Open" as Jobstatus,
    applicationDeadline: "",
    openings: "1",
    priority: "Medium" as PriorityStatus,
    hiringManager: ""
  });

  const handleArrayChange = (
    field: "requirements" | "skills" | "benefits",
    index: number,
    value: string
  ) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field: "requirements" | "skills" | "benefits") => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayItem = (
    field: "requirements" | "skills" | "benefits",
    index: number
  ) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray });
  };

  // ✅ Reset form function
  const resetForm = () => {
    setFormData({
      title: "",
      department: "",
      location: "",
      type: "FullTime" as JopType,
      level: "Officer" as JopLevel,
      minSalary: "",
      maxSalary: "",
      description: "",
      requirements: [""],
      skills: [""],
      benefits: [""],
      status: "Open" as Jobstatus,
      applicationDeadline: "",
      openings: "1",
      priority: "Medium" as PriorityStatus,
      hiringManager: ""
    });
  };

  // ✅ Enhanced handleSubmit with service integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!formData.title.trim()) {
      toast({
        variant: "destructive",
        description: "Job title is required"
      });
      return;
    }

    if (!formData.department.trim()) {
      toast({
        variant: "destructive",
        description: "Department is required"
      });
      return;
    }

    if (!formData.location.trim()) {
      toast({
        variant: "destructive",
        description: "Location is required"
      });
      return;
    }

    if (!formData.description.trim()) {
      toast({
        variant: "destructive",
        description: "Job description is required"
      });
      return;
    }

    // ✅ Validate salary range
    const minSal = parseFloat(formData.minSalary);
    const maxSal = parseFloat(formData.maxSalary);

    if (formData.minSalary && formData.maxSalary && minSal >= maxSal) {
      toast({
        variant: "destructive",
        description: "Maximum salary must be greater than minimum salary"
      });
      return;
    }

    setIsLoading(true);

    try {
      // ✅ Prepare data for API (clean up arrays and convert types)
      const jobData: CreateJobType = {
        title: formData.title.trim(),
        department: formData.department.trim(),
        location: formData.location.trim(),
        type: formData.type,
        level: formData.level,
        minSalary: formData.minSalary
          ? parseInt(formData.minSalary)
          : undefined,
        maxSalary: formData.maxSalary
          ? parseFloat(formData.maxSalary)
          : undefined,
        description: formData.description.trim(),
        // ✅ Filter out empty strings from arrays
        requirements: formData.requirements.filter((req) => req.trim() !== ""),
        skills: formData.skills.filter((skill) => skill.trim() !== ""),
        benefits: formData.benefits.filter((benefit) => benefit.trim() !== ""),
        status: formData.status,
        applicationDeadline: formData.applicationDeadline,
        openings: parseInt(formData.openings),
        priority: formData.priority,
        hiringManager: formData.hiringManager.trim() || ""
      };

      console.log("Creating job with data:", jobData);

      // ✅ Call the service
      const result = await createJob(jobData);

      if (result.success) {
        console.log("Job created successfully:", result.data);
        toast({
          variant: "default",
          description: "Job created successfully!"
        });

        // ✅ Close form and reset
        setJobFormOpen(false);
        resetForm();

        // ✅ Optional: Refresh jobs list if you have a callback
        // onJobCreated?.();
      } else {
        console.error("Failed to create job:", result.message);
        toast({
          variant: "destructive",
          description: result.message || "Failed to create job"
        });
      }
    } catch (error) {
      console.error("Error creating job:", error);
      toast({
        variant: "destructive",
        description: `An error occurred: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Handle cancel button
  const handleCancel = () => {
    setJobFormOpen(false);
    resetForm();
  };

  return (
    <Sheet open={jobFormOpen} onOpenChange={setJobFormOpen}>
      <SheetContent className="px-8 scrollbar-hide">
        <SheetTitle></SheetTitle>
        <ScrollArea className="w-full scrollbar-hide h-full">
          <div className="mx-auto ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Create New Job
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department *
                </label>
                <input
                  type="text"
                  required
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: JopType) => {
                      setFormData({
                        ...formData,
                        type: value
                      });
                    }}
                  >
                    <SelectTrigger className="ring-0">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FullTime">Full Time</SelectItem>
                      <SelectItem value="PartTime">Part Time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Intern">Intern</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Level
                  </label>
                  <Select
                    value={formData.level}
                    onValueChange={(value: JopLevel) => {
                      setFormData({
                        ...formData,
                        level: value
                      });
                    }}
                  >
                    <SelectTrigger className="ring-0">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Officer">Office</SelectItem>
                      <SelectItem value="Mid">Mid</SelectItem>
                      <SelectItem value="Senior">Senior</SelectItem>
                      <SelectItem value="Lead">Lead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Salary
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.minSalary}
                    onChange={(e) =>
                      setFormData({ ...formData, minSalary: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Salary
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.maxSalary}
                    onChange={(e) =>
                      setFormData({ ...formData, maxSalary: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Openings
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.openings}
                    onChange={(e) =>
                      setFormData({ ...formData, openings: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value: PriorityStatus) => {
                      setFormData({
                        ...formData,
                        priority: value
                      });
                    }}
                  >
                    <SelectTrigger className="ring-0">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Deadline
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.applicationDeadline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        applicationDeadline: e.target.value
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-[14px] "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hiring Manager
                  </label>
                  <input
                    type="text"
                    value={formData.hiringManager}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hiringManager: e.target.value
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </label>
                {formData.requirements.map((requirement, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={requirement}
                      onChange={(e) =>
                        handleArrayChange("requirements", index, e.target.value)
                      }
                      placeholder="Enter requirement"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md "
                    />
                    {formData.requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("requirements", index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("requirements")}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Add Requirement
                </button>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Skills
                </label>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) =>
                        handleArrayChange("skills", index, e.target.value)
                      }
                      placeholder="Enter skill"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md "
                    />
                    {formData.skills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("skills", index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("skills")}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Add Skill
                </button>
              </div>

              {/* Benefits */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Benefits
                </label>
                {formData.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) =>
                        handleArrayChange("benefits", index, e.target.value)
                      }
                      placeholder="Enter benefit"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md "
                    />
                    {formData.benefits.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("benefits", index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("benefits")}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Add Benefit
                </button>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  text="Cancel"
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={handleCancel}
                />

                <Button
                  text="Create Job"
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  loading={isLoading}
                  disabled={isLoading}
                />
              </div>
            </form>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default JobForm;
