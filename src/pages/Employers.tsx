import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, Users, Clock, Target, Shield, ArrowRight, Award } from "lucide-react";
 
export default function Employers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
 
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://vibe.filesafe.space/1775026468277155123/assets/409d9bc7-0b4e-4649-bfb1-6c0b4152ef98.png"
            alt="Business directors meeting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        </div>
 
        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
              The Recruitment Partner You've Been Waiting For
            </h1>
            <p className="text-xl text-gray-200 font-medium mb-10 [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
              7 days to shortlist | 94% retention at 12 months | No poaching guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-[#A00000] text-white font-bold px-8 h-14 text-lg">
                <a href="#contact-form">Start Your Search</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 h-14 text-lg">
                <Link to="/about">See How We Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
 
      {/* 2. THE PROBLEM SECTION */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              The Recruitment Problem You're Tired Of
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-[#F5F5F5] rounded-xl border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">The "Resume Flickers"</h4>
              <p className="text-secondary leading-relaxed">
                Agencies that flood your inbox with unfiltered resumes, hoping one sticks, wasting your time screening candidates they should have rejected.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-[#F5F5F5] rounded-xl border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">The Slow Process</h4>
              <p className="text-secondary leading-relaxed">
                Weeks go by without an update. The best candidates are snapped up by competitors while you're left waiting for a shortlist that never arrives.
              </p>
            </div>
 
            <div className="flex flex-col items-center text-center p-6 bg-[#F5F5F5] rounded-xl border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">The Quick Quitters</h4>
              <p className="text-secondary leading-relaxed">
                Hires that look great on paper but clash with your culture and leave within 6 months, forcing you to start the expensive process all over again.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* 3. HOW CHILLI WORKS DIFFERENTLY */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-8">
                How Chilli Works Differently
              </h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">We Don't Send Bulk Resumes</h4>
                    <p className="text-secondary">You get a curated shortlist of 3-5 highly vetted candidates who have already been interviewed, tested, and aligned with your culture.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">We Become Part of Your Team</h4>
                    <p className="text-secondary">We act as an extension of your brand in the market, protecting your reputation and pitching your opportunity effectively to passive talent.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">We Move Fast Without Cutting Corners</h4>
                    <p className="text-secondary">Our dedicated search methodology means you see a qualified shortlist within 7 days, significantly reducing your time-to-hire.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">We Measure Success at 12 Months</h4>
                    <p className="text-secondary">We're invested in longevity. That's why we back our permanent placements with a 12-month replacement guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://vibe.filesafe.space/1775026468277155123/assets/8edc8389-0389-43a4-a110-b666d74f04b1.png" 
                alt="Team working together" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-[250px] hidden md:block border-l-4 border-primary">
                <p className="text-3xl font-extrabold text-primary mb-1">94%</p>
                <p className="text-sm font-semibold text-[#2C2C2C]">Retention rate at 12 months across all placements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 4. MAIN CONTACT FORM SECTION */}
      <section id="contact-form" className="py-24 bg-white relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Start Your Search (Takes 2 Minutes)
              </h2>
              <p className="text-lg text-secondary mb-10">
                Fill out the form below to give us a brief overview of what you're looking for. We'll be in touch within 4 hours to arrange a discovery call.
              </p>
 
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-6">What Happens Next?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</div>
                    <span className="ml-3 text-secondary">We review your requirements immediately.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</div>
                    <span className="ml-3 text-secondary">We call you to clarify the brief and culture fit.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</div>
                    <span className="ml-3 text-secondary">We launch the search strategy within 48 hours.</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-secondary font-medium mb-2">Prefer to talk right now?</p>
                  <a href="tel:0871233644" className="text-2xl font-bold text-primary hover:underline">
                    (08) 7123 3644
                  </a>
                </div>
              </div>
            </div>
 
            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Request Received!</h3>
                  <p className="text-secondary mb-8">
                    Thank you for reaching out. One of our specialist recruiters will be in touch within 4 hours to discuss your needs.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name <span className="text-primary">*</span></Label>
                      <Input id="name" name="first_name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email <span className="text-primary">*</span></Label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" />
                    </div>
                  </div>
 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number <span className="text-primary">*</span></Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="0400 000 000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name <span className="text-primary">*</span></Label>
                      <Input id="company" name="organization" required placeholder="Acme Corp" />
                    </div>
                  </div>
 
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type <span className="text-primary">*</span></Label>
                    <Select name="contact.service_type" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="permanent">Permanent Recruitment</SelectItem>
                        <SelectItem value="temporary">Temporary Staffing</SelectItem>
                        <SelectItem value="bulk">Bulk Hiring Project</SelectItem>
                        <SelectItem value="cfo">Fractional CFO</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role Title</Label>
                      <Input id="role" name="contact.role_title" placeholder="e.g. Operations Manager" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="start_date">Ideal Start Date</Label>
                      <Select name="contact.ideal_start_date">
                        <SelectTrigger>
                          <SelectValue placeholder="When do they need to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately (ASAP)</SelectItem>
                          <SelectItem value="1_month">Within 1 month</SelectItem>
                          <SelectItem value="3_months">1-3 months</SelectItem>
                          <SelectItem value="planning">Just planning (3+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
 
                  <div className="space-y-2">
                    <Label htmlFor="additional">Additional Information</Label>
                    <Textarea 
                      id="additional" 
                      name="contact.additional_info" 
                      placeholder="Any specific requirements, salary range, or challenges?" 
                      rows={4} 
                    />
                  </div>
 
                  <Button type="submit" className="w-full bg-primary hover:bg-[#A00000] text-white font-bold h-14 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Request..." : "Submit Brief"}
                  </Button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Your information is kept strictly confidential. Read our <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
 
      {/* 5. GUARANTEES SECTION */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-[#2C2C2C] mb-2">12-Month Guarantee</h4>
              <p className="text-sm text-secondary">Free replacement if they don't work out within the first year.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-[#2C2C2C] mb-2">No Poaching Policy</h4>
              <p className="text-sm text-secondary">We never recruit from active clients. Your team is safe.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-[#2C2C2C] mb-2">Quality Promise</h4>
              <p className="text-sm text-secondary">You only see candidates we would hire ourselves.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-[#2C2C2C] mb-2">4-Hour Response</h4>
              <p className="text-sm text-secondary">We move fast. You'll hear from us within 4 business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
