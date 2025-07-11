import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

toastr.options = {
  positionClass: "toast-top-center",
  closeButton: true,
  progressBar: true,
  timeOut: 5000,
};

export function GetStartedDialog() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      displayName: formData.name,
      email: formData.email,
      mobileNo: formData.mobileNo,
      message: formData.message,
    };

    const url = "https://sendgetstartedemail-biscvaqo4q-uc.a.run.app";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (result.success == true) {
        console.log("Success:", result);
        if(result.name){
        toastr.success("Hi "+result.name+"! Thank you for registering! We'll be in touch with you shortly :)");
        }
        else{
        toastr.success("Thank you for registering! We'll be in touch with you shortly :)");
        }
      } else {
        console.error("Server error:", result.message);
        toastr.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Request failed:", error);
      toastr.error("Sorry! Something went wrong :(. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gradient-primary text-white hover:opacity-90">
          <Rocket className="w-4 h-4 mr-2" />
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Fill Your Details</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="mobileNo"
              required
              pattern="[0-9]{10}"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md"
              placeholder="Message..."
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
