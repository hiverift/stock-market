import React, { useState } from "react";
import { FaSearch, FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState({}); // multiple boxes ke liye object

  const toggleFAQ = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index, // har category ke liye alag toggle
    }));
  };

  // Data arrays
  const faqs = [
    {
      question: "What is CA ki Stock Market?",
      answer:
        "CA ki Stock Market is a comprehensive educational and consultancy platform led by qualified CAs...",
    },
    {
      question: "What makes CA ki Stock Market different from others?",
      answer:
        "We are uniquely positioned as we are led by qualified CAs with 12+ years of experience...",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via phone at +91 96675 20027, email at info@accountantskipathshala.com...",
    },
  ];

  const course = [
    {
      question: "How can I join a course?",
      answer:
        "You can browse our courses without login, but to enroll you need to create an account on our platform...",
    },
    {
      question: "Do you provide certification for courses?",
      answer:
        "Yes, upon successful completion of our courses, you receive certificates that validate your learning...",
    },
    {
      question: "Can I access purchased content on mobile?",
      answer:
        "Absolutely! After purchasing any course or service, you can access all content through our dedicated mobile app...",
    },
  ];

  const webinars = [
    {
      question: "How are webinars conducted?",
      answer:
        "Webinars are conducted online through our professional platform with high-quality video and audio...",
    },
    {
      question: "Can I access webinar recordings?",
      answer:
        "Yes, all registered participants can access webinar recordings for a specified period after the live session...",
    },
  ];

  const payments = [
    {
      question:
        "We support all major payment methods ",
      answer: "",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "After successful payment completion, you'll be redirected to a 'Thank You' page with instructions...",
    },
  ];

    const Groups  = [
    {
      question:
        "Is KYC mandatory for group access? ",
      answer: "Yes, KYC (Know Your Customer) verification is mandatory for accessing paid groups to ensure compliance with financial regulations and maintain a secure trading environment. This helps us verify user identity, prevent fraudulent activities, and create a trusted community of serious learners and traders.",
    },
    {
      question: "What documents are required for KYC?",
      answer:
        "For KYC verification, you need to provide: Government-issued photo ID (Aadhaar, PAN, Passport, or Driving License), Address proof (recent utility bill, bank statement, or rental agreement), and a recent passport-size photograph. All documents should be clear, legible, and valid..",
    },
  ];

  // Reusable FAQ Box
  const FAQBox = ({ title, data, category }) => (
    <div className="py-12 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-8">
          <div className="bg-yellow-100 p-2 rounded-full mr-3">
            <FaQuestionCircle className="text-yellow-600 text-xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
        </div>

        <div className="space-y-4">
          {data.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(category, index)}
                className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                {openIndex[category] === index ? (
                  <FaChevronUp className="text-yellow-600" />
                ) : (
                  <FaChevronDown className="text-yellow-600" />
                )}
              </button>
              {openIndex[category] === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer || "No additional details available."}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12 px-4 bg-white mt-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-2 mb-6">
          Find answers to common questions about CA ki Stock Market
        </p>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search FAQs"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
        </div>
      </div>

      {/* Reusable Sections */}
      <FAQBox title="General Questions" data={faqs} category="general" />
      <FAQBox title="Course" data={course} category="course" />
      <FAQBox title="Webinars" data={webinars} category="webinars" />
      <FAQBox title="Payments & Access" data={payments} category="payments" />
       <FAQBox title="Groups & KYC" data={Groups } category="Groups" />
    </div>
  );
};

export default FAQ;
