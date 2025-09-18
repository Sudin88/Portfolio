import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
    const {toast} = useToast();
    const handleSubmit = (e) => {
        e.preventDefault()
        
        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "I will get back to you as soon as possible.",
            })

        },1500)
    }
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind, want to discuss potential roles, or just
            want to say hello, feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-center gap-4">
                            <div className="p=3 rounded-full bg-primary/10">
                             <Mail className="h-6 w-6 text-primary"/>{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:sudinbohara86gmail.com"
                                   className="text-muted-foreground hover:text-primary transition-colors ">
                                    sudinbohara86gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p=3 rounded-full bg-primary/10">
                             <Phone className="h-6 w-6 text-primary"/>{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+9779841234567"
                                   className="text-muted-foreground hover:text-primary transition-colors ">
                                    +977 9841234567
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p=3 rounded-full bg-primary/10">
                             <MapPin className="h-6 w-6 text-primary"/>{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a href="tel:+9779841234567"
                                   className="text-muted-foreground hover:text-primary transition-colors ">
                                    Sere Niwas
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With me</h4>
                        <div className="flex space-x-4 justify-center ">
                            <a target="_blank" className="ext-foreground/80 hover:text-primary transition-colors duration-300" href="https://www.linkedin.com/in/sudin-bohara/">
                                <Linkedin />
                            </a>
                            <a target="_blank" className= "ext-foreground/80 hover:text-primary transition-colors duration-300" href="https://www.instagram.com/sudinbohara_/">
                                <Instagram />
                            </a>
                            <a target="_blank" className="ext-foreground/80 hover:text-primary transition-colors duration-300" href="https://github.com/Sudin88">
                                <Github />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs " onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send Me A Message"</h3>

                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="blck text-sm font-medium mb-2">Your Name</label>
                            <input type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Sudin Bohara..."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="blck text-sm font-medium mb-2">Your Email</label>
                            <input type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="abc@gmail.com..."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="blck text-sm font-medium mb-2">Your Name</label>
                            <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello......."
                            />
                        </div>

                     <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                     )}>
                        Send Message
                        <Send size={16}/>

                     </button>
                    </form>
                </div>
            </div>
        </div>
     </section>
    );
};