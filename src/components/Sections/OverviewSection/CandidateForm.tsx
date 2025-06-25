"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { InterviewStatus, Status } from "@prisma/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { CreateCandidateType } from "@/utils/types";
import { createCandidate } from "@/services/user";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

interface CandidateFormProps {
  candidateFormOpen: boolean;
  setCandidateFormOpen: Dispatch<SetStateAction<boolean>>;
}

const CandidateForm = ({
  candidateFormOpen,
  setCandidateFormOpen
}: CandidateFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    skills: [""],
    status: "Applied" as Status,
    resume: "",
    notes: "",
    supervisor: "",
    documentation: "Not allocated",
    project: "Not Allocated",
    training: "",
    interviewStatus: "" as InterviewStatus | "",
    expectedSalary: "",
    currentSalary: "",
    noticePeriod: "",
    location: "",
    source: ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const candidateData: CreateCandidateType = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: parseInt(formData.experience),
        status: formData.status,
        supervisor: formData.supervisor,
        expectedSalary: formData.expectedSalary
          ? parseFloat(formData.expectedSalary)
          : undefined,
        currentSalary: formData.currentSalary
          ? parseFloat(formData.currentSalary)
          : undefined,
        noticePeriod: formData.noticePeriod
      };

      const result = await createCandidate(candidateData);

      if (result.success) {
        console.log("Candidate created:", result.data);
        setCandidateFormOpen(false);
        toast({
          variant: "default",
          description: "Candidate created successfull"
        });
        setIsLoading(false);
        return;
        // Reset form or refresh data
      }
      if (result.error) {
        console.error("Error:", result.message);
        toast({
          variant: "destructive",
          description: `Fail to create a candidate, Error: ${result.error}`
        });
        setIsLoading(false);
        return;
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: `An error occured. Please try again. ${error}`
      });
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={candidateFormOpen} onOpenChange={setCandidateFormOpen}>
      <SheetContent className="px-8 scrollbar-hide">
        <SheetTitle></SheetTitle>
        <ScrollArea className="w-full scrollbar-hide h-full">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Add New Candidate
            </h2>

            <form onSubmit={handleSubmit} title="submit" className="space-y-2">
              {/* Basic Information */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  required
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience (Years) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <Select
                    onValueChange={(value: Status) => {
                      setFormData({
                        ...formData,
                        status: value
                      });
                    }}
                  >
                    <SelectTrigger className=" ring-0">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Applied">Applied</SelectItem>
                      <SelectItem value="Screening">Screening</SelectItem>
                      <SelectItem value="Interview">Interview</SelectItem>
                      <SelectItem value="Hired">Hired</SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interview Status
                  </label>

                  <Select
                    value={formData.interviewStatus}
                    onValueChange={(value: InterviewStatus) => {
                      setFormData({
                        ...formData,
                        interviewStatus: value
                      });
                    }}
                  >
                    <SelectTrigger className=" ring-0">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                      <SelectItem value="Screening">Screening</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      placeholder="Enter skill"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md "
                    />
                    {formData.skills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  text="Add Skill"
                  onClick={addSkill}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                />
              </div> */}

              {/* Salary and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.expectedSalary}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        expectedSalary: e.target.value
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Salary
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.currentSalary}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentSalary: e.target.value
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Period
                  </label>
                  <input
                    type="text"
                    value={formData.noticePeriod}
                    onChange={(e) =>
                      setFormData({ ...formData, noticePeriod: e.target.value })
                    }
                    placeholder="e.g., 30 days"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Supervisor
                  </label>
                  <input
                    type="text"
                    value={formData.supervisor}
                    onChange={(e) =>
                      setFormData({ ...formData, supervisor: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md "
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Button
                  variant={"ghost"}
                  text="Cancel"
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                />
                <Button
                  type="submit"
                  text="submit"
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

export default CandidateForm;
