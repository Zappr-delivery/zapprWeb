import { ArrowRight, Clock, Zap, TrendingUp, CheckCircle, Truck, Smartphone, BarChart3, Users, Package, Globe, Star, Shield, Workflow, Sparkles, Building, Rocket, Target, Award, HelpCircle, Map, PinIcon, Phone, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GetStartedDialog } from "@/components/ui/getStartedDialog";
import CopyContactModal from "@/components/ui/copyContactModal";
import ZapprInfoModal from "@/components/ui/zapprInfoModal";
import { FaWhatsapp } from "react-icons/fa";
const Index = () => {
  const stats = [
    { value: "₹1Cr+", label: "Orders Delivered", icon: Package, color: "text-blue-600" },
    { value: "30min", label: "Delivery Time", icon: Clock, color: "text-green-600" },
    { value: "100+", label: "D2C Partners", icon: Users, color: "text-purple-600" },
    { value: "Bangalore", label: "Coverage Area", icon: Map, color: "text-orange-600" },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Tech Integration",
      description: "We connect seamlessly with your Shopify, WMS, or other e-commerce platforms",
      icon: Smartphone,
      gradient: "from-blue-900 to-cyan-700",
    },
    {
      step: "02",
      title: "Predictive Inventory",
      description: "Our AI predicts your orders and strategically stores inventory in our darkstores across Bangalore",
      icon: BarChart3,
      gradient: "from-purple-900 to-pink-700",
    },
    {
      step: "03",
      title: "Order Routing",
      description: "Orders from your website are automatically routed to our nearest fulfillment center",
      icon: Zap,
      gradient: "from-orange-900 to-red-700",
    },
    {
      step: "04",
      title: "30-Min Delivery",
      description: "Our logistics network ensures customers receive orders within 30 minutes",
      icon: Bike,
      gradient: "from-green-900 to-emerald-700",
    },
  ];

  const integrations = [
    { name: "Shopify", logo: "/assets/shopify-logo.webp", color: "bg-blue-50 text-blue-800" },
    { name: "EasyEcom", logo: "/assets/easyecom-logo.png", color: "bg-blue-50 text-blue-800" },
    { name: "Unicommerce", logo: "/assets/unicommerce-logo.png", color: "bg-blue-50 text-blue-800" },
    { name: "WooCommerce", logo: "/assets/woocommerce-logo.png", color: "bg-blue-50 text-blue-800" },
    { name: "Magento", logo: "/assets/magento-logo.png", color: "bg-blue-50 text-blue-800" },
    { name: "BigCommerce", logo: "/assets/bigcommerce-logo.png", color: "bg-blue-50 text-blue-800" },
  ];

  const features = [
    { text: "Real-time inventory management", icon: BarChart3 },
    { text: "Predictive order analytics", icon: TrendingUp },
    { text: "Multi-platform integration", icon: Workflow },
    { text: "30-minute delivery guarantee", icon: Clock },
    { text: "Bangalore-wide coverage", icon: Globe },
    { text: "24/7 customer support", icon: Shield },
  ];

  const testimonials = [
    {
      quote: "Zappr transformed our delivery experience. Customer satisfaction is through the roof!",
      author: "Sarah Chen",
      company: "FreshStyle",
      rating: 5,
    },
    {
      quote: "The AI-powered inventory management has reduced our costs by 40%.",
      author: "Raj Patel",
      company: "TechGear",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'Where does Zappr currently operate?',
      answer: 'We are currently serving over 40 pincodes in Bangalore, with plans to expand citywide. Stay tuned as we grow to serve more areas!',
    },
    {
      question: 'How does Zappr ensure such fast delivery?',
      answer: 'Zappr leverages advanced AI-powered systems and pincode-based predictions to optimize warehouse inventory and delivery routes. This allows us to minimize delays and deliver your products in record time.',
    },
    {
      question: 'Do I need a warehouse?',
      answer: 'No. Zappr has its own network of warehouses strategically located within the city.',
    },
    {
      question: 'What kind of products does Zappr deliver?',
      answer: 'Zappr partners with brands to deliver a wide range of products directly to customers, focusing on essentials and popular items. Specific product availability may vary depending on your location.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg  z-50" style={{ background: 'rgb(234 233 233 / 65%)' }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
             
            </div>
            <div className="text-2xl font-bold gradient-text">Zappr</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
       
            <GetStartedDialog />

          </div>
        </div>
      </nav> */}

      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50" style={{ background: 'rgb(234 233 233 / 65%)' }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo with gradient overlay */}
          <div className="relative w-36 h-10">
            <div className="absolute inset-0 gradient-primary" style={{
              WebkitMaskImage: "url('/assets/Zappr_Logo.png')",
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
              WebkitMaskPosition: 'center',
              maskImage: "url('/assets/Zappr_Logo.png')",
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              maskPosition: 'center',
            }} />

            {/* Logo as white mask (shows gradient through it) */}
            <img
              src="/assets/Zappr_Logo.png"
              alt="Zappr Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>

            <GetStartedDialog />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <div className="bg-grid absolute inset-0 opacity-30"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>

          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 text-primary font-medium text-sm mb-8 animate-pulse-slow backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              30-Minute Quick Commerce for D2C Brands
              <Star className="w-4 h-4 ml-2 text-accent" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Supercharge Your
              <br />
              <span className="gradient-text">
                D2C Delivery
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Zappr's logistics fleet helps your brand deliver its D2C orders across Bangalore in just 30 minutes.
              Seamlessly integrate with your existing systems and delight your customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {/* <Button size="lg" className="gradient-primary text-white hover:opacity-90 text-lg px-8 py-4 shadow-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Start Integration
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button> */}
              <GetStartedDialog />
              {/* <CopyContactModal /> */}
              <a
                href="https://wa.me/+919902772123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Talk to us directly
                </button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" id="stats">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 animate-float hover:shadow-xl group" style={{ animationDelay: `${index * 0.5}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30" id="how-it-works">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Workflow className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How Zappr Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our intelligent platform seamlessly connects your e-commerce store with our 30-minute delivery network
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-0 bg-card hover:shadow-2xl transition-all duration-500 group overflow-hidden relative pt-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} ></div>

                    {/* Step Number - Fixed positioning */}
                    <div className="absolute -top-4  transform  z-20" style={{ top: '5px', padding: '8px' }}>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-background`}>
                        {step.step}
                      </div>
                    </div>

                    <CardContent className="p-8 pt-12 relative text-center">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>

                  {/* Arrow for desktop */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4" id="features">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
                <Building className="w-4 h-4 mr-2" />
                Enterprise Grade
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Built for Modern
                <span className="gradient-text block">D2C Brands</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Zappr's technology stack is designed to integrate seamlessly with your existing systems while providing the speed and reliability your customers expect.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              {/* 
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 shadow-lg">
                <Award className="w-5 h-5 mr-2" />
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button> */}
              <ZapprInfoModal />
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/10 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Platform Integrations</h3>
                  <p className="text-muted-foreground">Connect with your existing e-commerce stack</p>
                </div>
                {/*                 
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className={`${integration.color} backdrop-blur-sm rounded-xl p-4 text-center font-medium hover:scale-105 transition-transform shadow-sm border border-white/20`}>
                      <div className="text-2xl mb-2">{integration.logo}</div>
                      <div className="text-sm">{integration.name}</div>
                    </div>
                  ))}
                </div> */}

                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className={`${integration.color} backdrop-blur-sm rounded-xl p-4 text-center font-medium hover:scale-105 transition-transform shadow-sm border border-white/20`}
                    >
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-25 h-12 mx-auto mb-2 object-contain"
                      />
                      {/* <div className="text-sm">{integration.name}</div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Award className="w-4 h-4 mr-2" />
              Customer Stories
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Our Partners Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Got Questions?</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to the most common questions about Zappr's quick commerce platform
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          {/* <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div> */}
          {/* <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg"></div> */}
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Delivery?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join 100+ D2C brands already using Zappr to deliver orders in 30 minutes across Bangalore.
            Let's discuss how we can accelerate your business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-lg">
              <Target className="w-5 h-5 mr-2" />
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-lg">
              <Users className="w-5 h-5 mr-2" />
              Contact Sales
            </Button> */}
            <CopyContactModal />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text">Zappr</div>
              </div>
              <p className="text-muted-foreground">
                Revolutionizing D2C logistics with 30-minute delivery across Bangalore.
              </p>
            </div> */}

            <div className="relative w-36 h-10">
            <div className="absolute inset-0 gradient-primary" style={{
              WebkitMaskImage: "url('/assets/Zappr_Logo.png')",
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
              WebkitMaskPosition: 'center',
              maskImage: "url('/assets/Zappr_Logo.png')",
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              maskPosition: 'center',
            }} />

            {/* Logo as white mask (shows gradient through it) */}
            <img
              src="/assets/Zappr_Logo.png"
              alt="Zappr Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Package className="w-4 h-4 mr-2 text-primary" />
                Product
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Building className="w-4 h-4 mr-2 text-primary" />
                Company
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-primary" />
                Support
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Zappr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;