import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock, Target, ArrowRight, Shield, Award, Star } from "lucide-react";
 
const HERO_IMAGE = "https://vibe.filesafe.space/1775026468277155123/assets/00ab4e49-4db0-41f6-b73f-ecbe42f289db.png";
 
const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image with strong overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="The Chilli Group team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
 
        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 [text-shadow:_0_1px_3px_rgba(0,0,0,0.3)]">
              Hire Leaders Who Actually Stick
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-200 font-medium mb-10 [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
              7 days to shortlist | 94% retention at 12 months | No poaching guarantee
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-[#A00000] text-white font-bold px-8 h-14 text-lg">
                <Link to="/employers">Start Your Search</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 h-14 text-lg">
                <Link to="/about">See How We Work</Link>
              </Button>
            </div>
            {/* Trust badge/stat bar */}
            <div className="mt-12 flex items-center space-x-6 text-sm md:text-base text-gray-300 font-medium">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Boutique.</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Personal.</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Relentless.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Why Companies Choose Chilli Over Traditional Recruiters
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">We're Actually Part of Your Team</h4>
              <p className="text-secondary leading-relaxed">
                We don't just flick resumes. We embed ourselves in your culture to find candidates who align with your vision and stay for the long haul.
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">No Hidden Costs or Surprises</h4>
              <p className="text-secondary leading-relaxed">
                Transparent pricing from day one. You'll never get a surprise invoice, and our 12-month replacement guarantee protects your investment.
              </p>
            </div>
 
            {/* Column 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">Longevity Over Quick Placements</h4>
              <p className="text-secondary leading-relaxed">
                We measure our success by how long our candidates stay, not how fast we place them. 94% of our placements are still there at 12 months.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* 3. STATS BAR */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">3,301</span>
              <span className="text-sm md:text-base font-medium text-secondary uppercase tracking-wider">Professionals Placed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">934</span>
              <span className="text-sm md:text-base font-medium text-secondary uppercase tracking-wider">National Employers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">21</span>
              <span className="text-sm md:text-base font-medium text-secondary uppercase tracking-wider">Days Brief to Contract</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">7</span>
              <span className="text-sm md:text-base font-medium text-secondary uppercase tracking-wider">Days to Shortlist</span>
            </div>
          </div>
        </div>
      </section>
 
      {/* 4. SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              What We Do (Beyond Finding Candidates)
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <Link to="/services/recruitment" className="group block p-8 rounded-xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3 group-hover:text-primary transition-colors">Chilli Recruitment</h3>
              <p className="text-secondary mb-4">
                Permanent placements for mid to senior-level roles. We find the leaders who will drive your business forward.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#2C2C2C] bg-gray-100 px-3 py-1 rounded-full">Avg 7 days to shortlist</span>
                <span className="flex items-center text-primary font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
 
            {/* Service 2 */}
            <Link to="/services/temps" className="group block p-8 rounded-xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3 group-hover:text-primary transition-colors">Chilli Temps</h3>
              <p className="text-secondary mb-4">
                High-quality temporary staff ready to hit the ground running. Perfect for projects, leave cover, or sudden growth.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#2C2C2C] bg-gray-100 px-3 py-1 rounded-full">24-48 hour turnaround</span>
                <span className="flex items-center text-primary font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
 
            {/* Service 3 */}
            <Link to="/services/bulk-hiring" className="group block p-8 rounded-xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3 group-hover:text-primary transition-colors">Chilli Bulk Hiring</h3>
              <p className="text-secondary mb-4">
                Scale your team quickly without sacrificing quality. We deploy a dedicated project team to handle high-volume needs.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#2C2C2C] bg-gray-100 px-3 py-1 rounded-full">10-100+ hires</span>
                <span className="flex items-center text-primary font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
 
            {/* Service 4 */}
            <Link to="/services/cfo" className="group block p-8 rounded-xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3 group-hover:text-primary transition-colors">Chilli CFO</h3>
              <p className="text-secondary mb-4">
                Fractional and interim CFO services for strategic financial leadership without the full-time commitment.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#2C2C2C] bg-gray-100 px-3 py-1 rounded-full">Strategic finance</span>
                <span className="flex items-center text-primary font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
 
      {/* 5. HOW WE WORK (Process) */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Our 5-Step Process: No Guesswork, Just Results
            </h2>
          </div>
 
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg border-4 border-[#F5F5F5]">1</div>
                <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Discovery Call</h4>
                <p className="text-sm text-secondary">A 30-minute deep dive into your business, culture, and exact needs.</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg border-4 border-[#F5F5F5]">2</div>
                <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Search Strategy</h4>
                <p className="text-sm text-secondary">Within 48 hours, we map the market and begin our targeted approach.</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg border-4 border-[#F5F5F5]">3</div>
                <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Candidate Delivery</h4>
                <p className="text-sm text-secondary">In 7-14 days, you receive a highly vetted shortlist of top performers.</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg border-4 border-[#F5F5F5]">4</div>
                <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Interview Support</h4>
                <p className="text-sm text-secondary">We coordinate everything, provide feedback, and guide the process.</p>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg border-4 border-[#F5F5F5]">5</div>
                <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Offer & Onboarding</h4>
                <p className="text-sm text-secondary">We handle negotiations and stay engaged through their first year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 6. TESTIMONIALS/SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              What Our Clients Actually Say
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 left-8 text-primary opacity-20 text-6xl font-serif">"</div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-secondary italic mb-6 relative z-10 leading-relaxed">
                "The Chilli Group didn't just find us a candidate; they found us a leader who completely transformed our operations team. Their 7-day shortlist promise is real, and the quality is unmatched."
              </p>
              <div>
                <p className="font-bold text-[#2C2C2C]">Sarah Jenkins</p>
                <p className="text-sm text-secondary">Operations Director, TechLogistics</p>
              </div>
            </div>
 
            {/* Testimonial 2 */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 left-8 text-primary opacity-20 text-6xl font-serif">"</div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-secondary italic mb-6 relative z-10 leading-relaxed">
                "We were struggling to fill a niche technical role for 6 months. Chilli took the brief, embedded themselves in our culture, and had the perfect hire signed within 3 weeks. Incredible."
              </p>
              <div>
                <p className="font-bold text-[#2C2C2C]">Marcus Wong</p>
                <p className="text-sm text-secondary">CEO, Innovate Solutions</p>
              </div>
            </div>
 
            {/* Testimonial 3 */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 left-8 text-primary opacity-20 text-6xl font-serif">"</div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-secondary italic mb-6 relative z-10 leading-relaxed">
                "What I love about Chilli is their honesty. They told us our salary expectations were off, helped us adjust, and found us a superstar. A true partner, not just a resume service."
              </p>
              <div>
                <p className="font-bold text-[#2C2C2C]">Emma Roberts</p>
                <p className="text-sm text-secondary">HR Lead, National Retail Co</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 bg-[#d20000] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work With a Recruitment Partner Who Actually Cares?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Stop settling for average candidates and slow processes. Let's find the people who will drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <div className="flex items-center text-lg font-medium">
                <CheckCircle className="w-6 h-6 mr-2 text-white" />
                12-Month Guarantee
              </div>
              <div className="flex items-center text-lg font-medium">
                <CheckCircle className="w-6 h-6 mr-2 text-white" />
                No Poaching Policy
              </div>
              <div className="flex items-center text-lg font-medium">
                <CheckCircle className="w-6 h-6 mr-2 text-white" />
                7-Day Shortlist
              </div>
            </div>
 
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 text-lg">
                <Link to="/employers">Book a Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 h-14 text-lg">
                <a href="tel:0871233644">Call (08) 7123 3644</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default Index;
