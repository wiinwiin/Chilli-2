import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Target, Users, Award, Briefcase, Heart, Clock } from "lucide-react";
 
export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://vibe.filesafe.space/1775026468277155123/assets/8ff2f680-ccec-4d7c-88c4-8ff2b8bfe00b.png"
            alt="The Chilli Group team"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
 
        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
              Built on Results, Not Promises
            </h1>
            <p className="text-2xl text-primary font-bold mb-6 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
              Boutique. Personal. Relentless.
            </p>
            <p className="text-lg text-gray-200 font-medium mb-10 leading-relaxed max-w-xl">
              Since 2008, we've been the boutique alternative to traditional recruitment agencies. We don't flick resumes; we build long-term partnerships.
            </p>
          </div>
        </div>
      </section>
 
      {/* 2. STATS SHOWCASE */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">3,301</span>
              <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">Professionals Placed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">934</span>
              <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">National Employers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">21</span>
              <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">Days Brief to Contract</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">7</span>
              <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">Days to Shortlist</span>
            </div>
          </div>
        </div>
      </section>
 
      {/* 3. ORIGIN STORY */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                How We Grew From Adelaide to Australia
              </h2>
              <div className="space-y-6 text-secondary text-lg leading-relaxed">
                <p>
                  The Chilli Group started in 2008 with a simple observation: the recruitment industry was broken. It was transactional, slow, and focused on volume rather than quality.
                </p>
                <p>
                  We set out to be different. We wanted to be the agency that actually partnered with businesses, understood their culture deeply, and delivered candidates who didn't just look good on paper, but stayed for years.
                </p>
                <p>
                  What started as a boutique agency in Adelaide has grown into a national partner for some of Australia's most respected brands. But our core philosophy hasn't changed: we are still boutique in our approach, personal in our relationships, and relentless in our pursuit of the right fit.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#F5F5F5] p-6 rounded-xl border border-gray-100 h-40 flex flex-col justify-center">
                  <span className="text-primary font-bold text-xl mb-2">2008</span>
                  <span className="text-secondary font-medium">Founded in Adelaide</span>
                </div>
                <div className="bg-[#F5F5F5] p-6 rounded-xl border border-gray-100 h-40 flex flex-col justify-center">
                  <span className="text-primary font-bold text-xl mb-2">National Reach</span>
                  <span className="text-secondary font-medium">Placing talent across 5 major cities</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-primary text-white p-6 rounded-xl shadow-lg h-40 flex flex-col justify-center">
                  <span className="font-bold text-xl mb-2">94%</span>
                  <span className="font-medium text-white/90">Retention rate at 12 months</span>
                </div>
                <div className="bg-[#F5F5F5] p-6 rounded-xl border border-gray-100 h-40 flex flex-col justify-center">
                  <span className="text-primary font-bold text-xl mb-2">3,000+</span>
                  <span className="text-secondary font-medium">Careers transformed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 4. MEET THE FOUNDER */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img 
                src="https://vibe.filesafe.space/1775026468277155123/assets/f70493ff-fa24-482c-a8f9-c460cb91cb25.png" 
                alt="Pina Stojko - Founder" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover aspect-square"
              />
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-2">Pina Stojko</h2>
              <p className="text-xl text-primary font-semibold mb-6">Founder & Managing Director</p>
              
              <div className="space-y-6 text-secondary text-lg leading-relaxed mb-8">
                <p>
                  "I started Chilli because I was tired of seeing companies settle for 'okay' hires just because they needed a warm body in a seat. I knew there was a better way."
                </p>
                <p>
                  With over two decades in recruitment, Pina has built a reputation as the go-to partner for complex, high-stakes hires. She doesn't just fill roles; she acts as a strategic advisor to CEOs and business leaders, helping them structure their teams for long-term growth.
                </p>
                <p>
                  Her approach is direct, honest, and fiercely protective of her clients' time and resources. If your expectations are off, she'll tell you. If a candidate isn't right, she won't send them. It's this transparency that has built 15+ year relationships with some of Australia's top employers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm inline-block">
                <p className="font-semibold text-[#2C2C2C] mb-1">Coffee Order:</p>
                <p className="text-secondary italic">Strong Almond Latte</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 5. WHY CHOOSE CHILLI */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Why Directors Choose Us Over Larger Agencies
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Quality Over Quantity</h4>
                <p className="text-secondary">We don't play the numbers game. You receive a curated shortlist of 3-5 exceptional candidates, not a stack of 20 average resumes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Speed Without Compromise</h4>
                <p className="text-secondary">Our dedicated search methodology means we deliver a qualified shortlist within 7 days, reducing your time-to-hire significantly.</p>
              </div>
            </div>
 
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Deep Market Knowledge</h4>
                <p className="text-secondary">We know who the top performers are, even if they aren't actively looking. We have the networks to reach passive talent.</p>
              </div>
            </div>
 
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Honest Advice</h4>
                <p className="text-secondary">If your salary is too low, or your expectations are unrealistic, we'll tell you. We're partners, not just order-takers.</p>
              </div>
            </div>
 
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Employer Branding</h4>
                <p className="text-secondary">We act as brand ambassadors for your company, pitching your opportunity compellingly to the market's best talent.</p>
              </div>
            </div>
 
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Long-Term Focus</h4>
                <p className="text-secondary">We care about what happens after the placement. We stay in touch to ensure the candidate thrives in their new role.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 6. FINAL CTA */}
      <section className="py-24 bg-[#d20000] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience the Chilli Difference?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you build a high-performing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 text-lg">
              <Link to="/employers">Start Your Search</Link>
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
