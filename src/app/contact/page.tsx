'use client'
import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/Spotlight";

function Page() {
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
        };
    return (
        <div className="h-[100vh] w-full bg-black text-white flex justify-center relative items-center">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <BackgroundBeams />
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                {' '}
                {/* Add relative and z-10 to bring content to the front */}
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                Contact Us
                </h1>
                <p className="text-white/50 max-w-lg mx-auto my-2 text-sm text-center">
                We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="rounded-lg border border-text-white/50 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-white/50"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="rounded-lg border border-text-white/50 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-white/50"
                    rows={5}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
                </form>
            </div>
        </div>
    )
}

export default Page