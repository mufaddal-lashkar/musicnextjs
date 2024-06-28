import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
    return (
        <main className="min-h-screen w-full overflow-hidden bg-black/[0.96] text-white antialiased bg-grid-white/[0.02]">
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <MusicSchoolTestimonial />
            <UpcomingWebinars />
            <Instructors />
            <Footer />
        </main>
    );
}
