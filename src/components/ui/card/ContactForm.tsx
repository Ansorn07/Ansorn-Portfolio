"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const templateID = process.env.template_key;
  const serviceID = process.env.service_key;
  const PublicKey = process.env.user_key;

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formValues, setFormValues] = useState({
    senderName: "",
    senderEmail: "",
    subject: "General inquries",
    message: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(`${serviceID}`, `${templateID}`, formValues, {
        publicKey: PublicKey,
      })
      .then((res) => {
        setIsSending(false);
        setIsSent(true);
        console.log("Email sent successfully!", res);
        setFormValues({
          senderName: "",
          senderEmail: "",
          subject: "General inquries",
          message: "",
        });
      })
      .catch((err) => {
        setIsSending(false);
        setIsSent(false);
        console.error("Email failed to send", err);
      });
  };

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }
  }, [isSent]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f0f0f] border border-slate-700 shadow-[0_0_30px_rgba(255,0,0,0.06)] p-6 rounded-xl backdrop-blur-sm"
    >
      <form onSubmit={sendEmail} className="space-y-4">
        {/* Name */}
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }}
          required
          type="text"
          placeholder="Name"
          name="senderName"
          onChange={handleChange}
          value={formValues.senderName}
          className="w-full bg-black bg-opacity-40 border border-slate-700 focus:outline-red-500 placeholder-gray-400 text-white rounded-md py-3 px-4 text-sm"
        />

        {/* Email */}
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.4 }}
          required
          type="email"
          placeholder="Email"
          name="senderEmail"
          onChange={handleChange}
          value={formValues.senderEmail}
          className="w-full bg-black bg-opacity-40 border border-slate-700 focus:outline-red-500 placeholder-gray-400 text-white rounded-md py-3 px-4 text-sm"
        />

        {/* Dropdown */}
        <motion.select
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }}
          required
          name="subject"
          onChange={handleChange}
          value={formValues.subject}
          className="w-full bg-black bg-opacity-40 border border-slate-700 focus:outline-red-500 text-white rounded-md py-3 px-4 text-sm"
        >
          <option className="bg-[#1a1a1a] text-white" value="General inquries">General inquries</option>
          <option className="bg-[#1a1a1a] text-white" value="Project inquiries">Project inquiries</option>
          <option className="bg-[#1a1a1a] text-white" value="Collaboration request">Collaboration request</option>
          <option className="bg-[#1a1a1a] text-white" value="Feedback/Question">Feedback/Question</option>
          <option className="bg-[#1a1a1a] text-white" value="Bug report">Bug report</option>
          <option className="bg-[#1a1a1a] text-white" value="Feature request">Feature request</option>
        </motion.select>

        {/* Message */}
        <motion.textarea
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.4 }}
          placeholder="Message"
          rows={6}
          required
          name="message"
          onChange={handleChange}
          value={formValues.message}
          className="w-full bg-black bg-opacity-40 border border-slate-700 focus:outline-red-500 placeholder-gray-400 text-white rounded-md px-4 pt-3 text-sm"
        ></motion.textarea>

        {/* Button */}
        <motion.button
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold rounded-md px-4 py-3 w-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 548.244 548.244"
          >
            <path d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" />
          </svg>
          {isSending ? "Sending..." : isSent ? "Sent!" : "Send"}
        </motion.button>
      </form>
    </motion.div>
  );
};
