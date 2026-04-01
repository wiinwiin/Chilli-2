import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Shield, Zap, Flame, Users } from "lucide-react";
 
export default function HeartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://vibe.filesafe.space/1775026468277155123/assets/81e2fa7c-0de5-4bec-9895-0f7d656c4543.png"
            alt="Team collaborating"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
 
        <div className="container relative z-10 px-4 md:px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
            Chilli's ❤️
          </h1>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <p className="text-2xl md:text-3xl text-white font-serif italic mb-4 [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
              "Chilli's heart is for the company directors who lie awake at night worrying about their team."
            </p>
            <p className="text-gray-300 font-medium">— Pina Stojko, Founder</p>
          </div>
        </div>
      </section>
 
      {/* 2. LETTER TO PEOPLE LEADERS */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-[#2C2C2C] prose-p:text-secondary">
            <h2 className="text-3xl font-bold mb-8">Dear People Leader,</h2>
            
            <p>
              We know how hard it is. You're trying to build a business, hit targets, and manage operations. The last thing you need is to spend your evenings sifting through hundreds of irrelevant resumes or sitting through interviews with candidates who clearly haven't read the job description.
            </p>
            
            <p>
              You don't just need a "body in a seat." You need someone who gets your vision. Someone who will take ownership. Someone you don't have to micromanage.
            </p>
 
            <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-2xl font-medium text-[#2C2C2C]">
              We believe that the right hire doesn't just fill a gap—they transform the trajectory of your business.
            </blockquote>
 
            <p>
              That's why we don't operate like a typical agency. We don't care about hitting KPI numbers for "resumes sent." We care about finding that one person who will make you say, "How did we ever survive without them?"
            </p>
 
            <p>
              When you partner with us, your hiring problem becomes our hiring problem. And we are relentless in solving it.
            </p>
 
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="font-serif italic text-xl text-[#2C2C2C] mb-1">Sincerely,</p>
              <p className="font-bold text-primary text-2xl">The Chilli Group</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* 3. CORE VALUES */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              The Values That Drive Us
            </h2>
            <p className="text-xl text-secondary">
              These aren't just words on a wall. This is how we operate every single day.
            </p>
          </div>
 
          <div className="space-y-12">
            {/* Value 1 */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Trust</h3>
                <p className="text-lg text-secondary mb-6">
                  We tell the truth, even when it's uncomfortable. We protect your brand in the market and we never compromise on confidentiality.
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-xl">
                  <h4 className="font-bold text-[#2C2C2C] mb-3">How This Shows Up:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Telling you if your salary expectations are too low to attract top talent.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Refusing to send a candidate if we uncover a red flag during referencing.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            {/* Value 2 */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Performance</h3>
                <p className="text-lg text-secondary mb-6">
                  We are obsessed with outcomes. We don't make excuses; we find solutions. We measure ourselves by the success of our placements at 12 months.
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-xl">
                  <h4 className="font-bold text-[#2C2C2C] mb-3">How This Shows Up:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Committing to a 7-day shortlist delivery and hitting it.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Providing our 12-month replacement guarantee because we back our work.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            {/* Value 3 */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Courage</h3>
                <p className="text-lg text-secondary mb-6">
                  We challenge the status quo. We ask the hard questions. We aren't afraid to push back if we believe there's a better way to structure a role.
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-xl">
                  <h4 className="font-bold text-[#2C2C2C] mb-3">How This Shows Up:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Challenging a hiring manager's bias to present a highly capable diverse candidate.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Walking away from an assignment if we don't believe we can ethically fill it.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            {/* Value 4 */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Joy</h3>
                <p className="text-lg text-secondary mb-6">
                  We love what we do. We celebrate the wins. We bring positive energy to every interaction, making the recruitment process enjoyable rather than stressful.
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-xl">
                  <h4 className="font-bold text-[#2C2C2C] mb-3">How This Shows Up:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Celebrating offer acceptances with genuine excitement for both parties.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Creating a warm, welcoming environment for candidates who are nervous.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            {/* Value 5 */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FFE6E6] flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Connection</h3>
                <p className="text-lg text-secondary mb-6">
                  We build deep, meaningful relationships. We see the human behind the resume and the culture behind the company logo.
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-xl">
                  <h4 className="font-bold text-[#2C2C2C] mb-3">How This Shows Up:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Checking in on candidates 3, 6, and 12 months after they start.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Knowing our clients' coffee orders and their kids' names.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 4. WHAT THIS MEANS FOR YOU */}
      <section className="py-20 bg-[#d20000] text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What This Actually Means For You
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">For Employers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You get your evenings back instead of reading resumes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You only interview people who actually fit your culture.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You make hires that stay and grow with your business.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You get an honest partner who protects your brand.</span>
                </li>
              </ul>
            </div>
 
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">For Job Seekers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You get honest feedback, even if it's a "no".</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You are prepared properly for every interview.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You are placed in roles where you will actually thrive.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">You have a career advocate, not just a transactional agent.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* 5. CTA */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
            Want to Work With People Who Actually Care?
          </h2>
          <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
            If our values align with yours, we'd love to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-[#A00000] text-white font-bold px-8 h-14 text-lg">
              <Link to="/employers">I Need to Hire</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 h-14 text-lg">
              <a href="tel:0871233644">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
