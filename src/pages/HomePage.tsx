import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import ProductRatingCards from "@/components/sections/product/ProductRatingCards";
import AboutText from "@/components/sections/about/AboutText";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import TestimonialMarqueeCards from "@/components/sections/testimonial/TestimonialMarqueeCards";
import ContactSplitEmail from "@/components/sections/contact/ContactSplitEmail";

export default function HomePage() {
  return (
<StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
        <SiteBackgroundSlot />

        

        <div id="hero" data-section="hero">
          <HeroSplitKpi
            textAnimation="slide-up"
            tag="Emergency Dental Service"
            title="Emergency Dentist Orlando"
            description="Experience fast, reliable emergency dental care in Orlando, FL. We provide immediate relief for toothaches, broken teeth, and other urgent dental needs."
            primaryButton={{ text: "View Our Services", href: "#services" }}
            secondaryButton={{ text: "Book Your Visit", href: "#contact" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/hero/hero1.avif"
            kpis={[
              { value: "5000+", label: "Satisfied Patients" },
              { value: "99.8%", label: "Satisfaction Rate" },
              { value: "15+", label: "Industry Awards" },
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <ProductRatingCards
            textAnimation="slide-up"
            tag="Premium Dental Services"
            title="Our Signature Services"
            description="From cosmetic enhancement to restorative excellence, our comprehensive services transform smiles and improve oral health with precision and artistry."
            primaryButton={{ text: "Schedule Consultation", href: "#contact" }}
            products={[
              {
                brand: "Cosmetic",
                name: "Smile Design & Whitening",
                price: "From $500",
                rating: 5,
                reviewCount: "234",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service1.avif",
              },
              {
                brand: "Restorative",
                name: "Dental Implants & Crowns",
                price: "From $1,200",
                rating: 5,
                reviewCount: "312",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif",
              },
              {
                brand: "Advanced",
                name: "Orthodontics & Aligners",
                price: "From $800",
                rating: 5,
                reviewCount: "289",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif",
              },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <AboutText
            textAnimation="slide-up"
            title="For over two decades, we've been California's trusted destination for luxury dental care, combining advanced technology with artistic precision to create beautiful, healthy smiles that transform lives"
            primaryButton={{ text: "Meet Our Team", href: "#testimonials" }}
            secondaryButton={{ text: "Learn More", href: "#contact" }}
          />
        </div>

        <div id="features" data-section="features">
          <FeaturesMediaCards
            textAnimation="slide-up"
            tag="Premium Dental Excellence"
            title="Why Choose Our Luxury Practice"
            description="We combine artistic excellence with scientific precision, utilizing the latest technology and techniques to deliver transformative results that exceed expectations."
            items={[
              {
                title: "Digital Technology",
                description: "3D imaging, intraoral cameras, and computer-aided design for precise diagnostics and treatment planning.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about1.avif",
              },
              {
                title: "Master Craftsmanship",
                description: "Award-winning dentists with decades of experience in cosmetic and restorative excellence.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about2.avif",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialMarqueeCards
            textAnimation="slide-up"
            tag="Patient Reviews"
            title="What Our Patients Say"
            description="Discover why hundreds of Orlando's discerning patients trust us for their dental care and smile transformations."
            testimonials={[
              {
                name: "Tracy Gooden",
                role: "Patient",
                quote: "I had a dental emergency and they were able to get me in right away. The staff was very friendly and the dentist was very gentle. I would highly recommend them.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/testimonial/testimonial1.webp",
              },
              {
                name: "Donyelle Vallee",
                role: "Patient",
                quote: "I had a great experience here. The staff was very friendly and the dentist was very knowledgeable. I would definitely recommend them to anyone looking for a new dentist.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/testimonial/testimonial2.webp",
              },
              {
                name: "James Durrell",
                role: "Patient",
                quote: "I had a great experience here. The staff was very friendly and the dentist was very knowledgeable. I would definitely recommend them to anyone looking for a new dentist.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/testimonial/testimonial3.webp",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitEmail
            textAnimation="slide-up"
            tag="Get In Touch"
            title="Schedule Your Emergency Dentist Orlando Experience"
            description="Visit us at 7259 International Dr Ste a, Orlando, FL 32819 (Floor 1, Dowdy Plaza) or call +1 407-256-9694. Our facility features wheelchair-accessible parking and entrances. We accept credit cards, debit cards, and NFC mobile payments."
            inputPlaceholder="Enter your email"
            buttonText="Get Started"
            imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/contact/contact.avif"
          />
        </div>

        
      </StyleProvider>
  );
}
