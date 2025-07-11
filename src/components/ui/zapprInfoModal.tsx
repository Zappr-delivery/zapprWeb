import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, Book } from "lucide-react";

const ZapprInfoModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="gradient-primary text-white hover:opacity-90 shadow-lg">
          <Book className="w-5 h-5 mr-2" />
          Learn More
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button> 
      </DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>What is Zappr?</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
          <p>
            <strong>Zappr Delivery</strong> is a hyperlocal logistics solution redefining how brands connect with customers in real time. We specialize in delivering direct-to-consumer (D2C) orders within <strong>30 minutes</strong> across Bangalore — making us the fastest and most reliable option for instant gratification e-commerce.
          </p>
          <p>
            Whether it's protein powders, healthy snacks, or daily essentials, we enable partner brands to delight their customers with rapid doorstep delivery, helping them improve customer experience, increase repeat purchases, and reduce RTOs. Our tech-integrated fulfillment network uses micro dark stores and live inventory mapping to ensure real-time order orchestration and flawless execution.
          </p>
          <p>
            Zappr isn’t just a delivery company — we’re a brand experience enabler. From the moment your customer checks out, we ensure a fast, seamless, and wow-worthy delivery experience that builds trust and brand love.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ZapprInfoModal;
