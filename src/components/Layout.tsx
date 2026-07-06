import { Outlet } from 'react-router-dom';

import FooterSimple from '@/components/sections/footer/FooterSimple';
import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarInline from "@/components/ui/NavbarInline";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarInline
                logo="Luxury Dental"
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "About", href: "#about" },
                  { name: "Features", href: "#features" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Schedule", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimple
                brand="Luxury Dental Care"
                columns={[
                  {
                    title: "Services",
                    items: [
                      { label: "Cosmetic Dentistry", href: "#services" },
                      { label: "Dental Implants", href: "#services" },
                      { label: "Orthodontics", href: "#services" },
                      { label: "Restorative Care", href: "#services" },
                    ],
                  },
                  {
                    title: "Practice",
                    items: [
                      { label: "About Us", href: "#about" },
                      { label: "Our Team", href: "#testimonials" },
                      { label: "Technology", href: "#features" },
                      { label: "Contact Us", href: "#contact" },
                    ],
                  },
                  {
                    title: "Connect",
                    items: [
                      { label: "Instagram", href: "#" },
                      { label: "Facebook", href: "#" },
                      { label: "Google Reviews", href: "#" },
                      { label: "Smile Gallery", href: "#" },
                    ],
                  },
                ]}
                copyright="© 2025 Luxury Dental Care | Premium Dentistry Since 2005"
                links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
              />
    </StyleProvider>
  );
}
