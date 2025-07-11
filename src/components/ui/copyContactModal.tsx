import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, Copy } from "lucide-react";

const CopyContactModal = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopied(number);
      setTimeout(() => setCopied(""), 2000); // Clear "copied" after 2s
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
          <Phone className="w-5 h-5 mr-2" />
          Contact US
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex justify-between items-center border rounded-xl p-4">
            <div>
              <p className="font-semibold">Rahul</p>
              <p className="text-sm text-muted-foreground">📞 +91-9495733444</p>
              <p className="text-sm text-muted-foreground">📧 rahul@zappr.delivery</p>
            </div>
            <Button
              variant="ghost"
              onClick={() => handleCopy("+919495733444")}
              className="hover:bg-muted"
            >
              <Copy className="w-4 h-4 mr-1" />
              {copied === "+919495733444" ? "Copied" : "Copy"}
            </Button>
          </div>

          <div className="flex justify-between items-center border rounded-xl p-4">
            <div>
              <p className="font-semibold">Shaheer</p>
              <p className="text-sm text-muted-foreground">📞 +91-9902772123</p>
              <p className="text-sm text-muted-foreground">📧 shaheer@zappr.delivery</p>
            </div>
            <Button
              variant="ghost"
              onClick={() => handleCopy("+919902772123")}
              className="hover:bg-muted"
            >
              <Copy className="w-4 h-4 mr-1" />
              {copied === "+919902772123" ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CopyContactModal;