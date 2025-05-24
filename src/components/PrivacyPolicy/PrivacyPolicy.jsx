import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-10 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>YourAppName</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how your personal information is collected, used, and shared when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Personal Information (such as name, email address) you provide when contacting us or signing up.</li>
          <li>Usage Data (like pages visited, browser type, IP address) collected automatically.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain our service.</li>
          <li>To communicate with you (e.g., customer support, updates).</li>
          <li>To improve our website and user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell your personal information. We may share data with service providers who help us operate the website, under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
        <p className="mb-4">
          We use cookies to improve your experience and analyze site usage. You can control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You can request access to, correction of, or deletion of your personal data at any time by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy from time to time. Updates will be posted on this page with a revised date.
        </p>

        <p className="text-sm text-gray-500">Last updated: May 24, 2025</p>
      </div>
    </div>
  );
}
