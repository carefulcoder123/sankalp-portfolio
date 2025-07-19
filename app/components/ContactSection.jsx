'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const response = await fetch('https://formspree.io/f/mrblbadn', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: new FormData(e.target),
        });

        if (response.ok) {
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast.error('Failed to send message. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="px-4 md:px-20 py-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get in Touch</h2>
                <p className="text-gray-300 mb-10">
                    Have a project or just want to say hi? Fill the form or reach me through socials.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="bg-transparent border border-gray-600 rounded-md p-3 text-white focus:outline-none"
                    />
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="bg-transparent border border-gray-600 rounded-md p-3 text-white focus:outline-none"
                    />
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="bg-transparent border border-gray-600 rounded-md p-3 text-white focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black font-medium py-2 px-6 rounded-md hover:scale-105 transition"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-6">
                    <a href="mailto:sankalp@example.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-6 h-6 text-gray-300 hover:text-white transition hover:scale-110" />
                    </a>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-gray-300 hover:text-white transition hover:scale-110" />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-gray-300 hover:text-white transition hover:scale-110" />
                    </a>
                </div>

                <p className="text-xs text-gray-500 mt-10">Made with ❤️ by Sankalp</p>
            </motion.div>
        </section>
    );
}
