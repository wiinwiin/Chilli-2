import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Clock, ArrowRight } from "lucide-react";
 
export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center bg-[#F5F5F5] overflow-hidden">
        <div className="container px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] leading-tight mb-6">
                Specialized Recruitment Solutions
              </h1>
              <p className="text-xl text-secondary font-medium mb-10">
                Whether you need a single executive or an entire project team, we have a specialized approach to deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-[#A00000] text-white font-bold px-8 h-14 text-lg">
                  <Link to="/employers">Discuss Your Needs</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative z-10">
              <img 
                src="https://vibe.filesafe.space/1775026468277155123/assets/30911905-4f94-43ea-bc1b-64008b254b11.png" 
                alt="Professional team meeting" 
                className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary">
                <p className="font-bold text-[#2C2C2C] text-lg">4 Specialized Divisions</p>
                <p className="text-sm text-secondary">One unified standard of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service 1 */}
            <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">Chilli Recruitment</h2>
              <p className="text-lg text-secondary mb-8 flex-grow">
                Our core permanent recruitment service for mid to senior-level roles. We find the leaders who will drive your business forward and stick around for the long haul.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">7 days to qualified shortlist</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">12-month replacement guarantee</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Full market mapping</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
                <Link to="/employers">Start Search <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
 
            {/* Service 2 */}
            <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">Chilli Temps</h2>
              <p className="text-lg text-secondary mb-8 flex-grow">
                High-quality temporary staff ready to hit the ground running. Perfect for project work, leave cover, or periods of sudden growth.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">24-48 hour turnaround</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Fully vetted and compliant</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Temp-to-perm options available</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
                <Link to="/employers">Request Temp <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
 
            {/* Service 3 */}
            <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">Chilli Bulk Hiring</h2>
              <p className="text-lg text-secondary mb-8 flex-grow">
                Scale your team quickly without sacrificing quality. We deploy a dedicated project team to handle high-volume needs seamlessly.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">10 to 100+ hires per project</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Dedicated project manager</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Streamlined assessment centers</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
                <Link to="/employers">Discuss Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
 
            {/* Service 4 */}
            <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="text-primary font-bold text-xl">CFO</span>
              </div>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">Chilli CFO</h2>
              <p className="text-lg text-secondary mb-8 flex-grow">
                Fractional and interim CFO services for strategic financial leadership without the full-time commitment or cost.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Strategic financial planning</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Retainer or project basis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">Significant ROI vs full-time hire</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
                <Link to="/employers">Meet CFOs <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
 
      {/* FINAL CTA */}
      <section className="py-24 bg-[#d20000] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's have a quick chat about your business goals, and we'll recommend the most efficient and cost-effective approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 text-lg">
              <Link to="/employers">Book a Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 h-14 text-lg">
              <a href="tel:0871233644">Call (08) 7123 3644</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
