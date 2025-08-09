"use client";

import { useTranslate } from "@/hooks/use-translate";

export default function TermsPage() {
  const translate = useTranslate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {translate("termsTitle")}
        </h1>

        <div className="prose prose-lg max-w-none text-justify text-gray-700">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("definitionsTitle")}
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>{translate("site")}:</strong>{" "}
                {translate("homeDescription")} ({translate("homeTitle")}).
              </li>
              <li>
                <strong>{translate("user")}:</strong>{" "}
                {translate(
                  "any person who visits, browses, or uses the site and its services"
                )}
                .
              </li>
              <li>
                <strong>{translate("content")}:</strong>{" "}
                {translate(
                  "all texts, images, videos, data, and materials published on the site"
                )}
                .
              </li>
              <li>
                <strong>{translate("services")}:</strong>{" "}
                {translate(
                  "exhibition registration, ticket booking, workshop subscription, and communication methods available on the site"
                )}
                .
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("acceptanceTitle")}
            </h2>
            <p>
              {translate(
                "by using the site and its services, you agree to comply with these terms. if you do not agree to any of them, please refrain from using the site or registering for any service"
              )}
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("allowedUseTitle")}
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              {translate("personalUse")}
            </h3>
            <p className="mb-4">
              {translate(
                "the user has the right to browse the site and view content for personal or professional purposes only, without reselling, distributing, or modifying the content for any commercial purpose"
              )}
              .
            </p>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              {translate("legalCompliance")}
            </h3>
            <p className="mb-4">
              {translate(
                "the user must not publish or upload any content that violates the rights of others or applicable laws"
              )}
              .
            </p>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              {translate("harmfulBehavior")}
            </h3>
            <p>
              {translate(
                "it is prohibited to use the site to harm our technical systems (hacking, malware, etc.) or harass other users"
              )}
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("userAccountTitle")}
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>{translate("accountRegistration")}:</strong>{" "}
                {translate(
                  "some services require account creation; your data must be accurate and up-to-date"
                )}
                .
              </li>
              <li>
                <strong>{translate("accountSecurity")}:</strong>{" "}
                {translate(
                  "you are responsible for maintaining the confidentiality of your login credentials"
                )}
                .
              </li>
              <li>
                <strong>{translate("accountCancellation")}:</strong>{" "}
                {translate(
                  "the organizer reserves the right to suspend or delete user accounts for violations of these terms"
                )}
                .
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("intellectualPropertyTitle")}
            </h2>
            <p className="mb-4">
              {translate(
                "all rights related to content (texts, images, logos, trademarks) are owned by Event Maker or its licensors"
              )}
              .
            </p>
            <p>
              {translate(
                "the user may not copy, reproduce, or publish any part of the content without prior written permission"
              )}
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("disclaimerTitle")}
            </h2>
            <p className="mb-4">
              {translate(
                "the site is provided 'as is' without any express or implied warranty"
              )}
              .
            </p>
            <p>
              {translate(
                "the organizer is not responsible for any direct or indirect damages resulting from using the site or relying on its information"
              )}
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("externalLinksTitle")}
            </h2>
            <p className="mb-4">
              {translate(
                "the site may contain links to external sites. these links are for convenience only and do not imply endorsement by the organizer"
              )}
              .
            </p>
            <p>{translate("use of any external site is at your own risk")}.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("modificationsTitle")}
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                {translate(
                  "the organizer reserves the right to modify these terms at any time"
                )}
                .
              </li>
              <li>
                {translate(
                  "the updated version will be published on the site and becomes effective immediately upon publication"
                )}
                .
              </li>
              <li>
                {translate("users are advised to review the terms regularly")}.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("governingLawTitle")}
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                {translate(
                  "these terms are governed by and interpreted according to the laws of saudi arabia"
                )}
                .
              </li>
              <li>
                {translate(
                  "any disputes arising from these terms shall be under the jurisdiction of saudi courts"
                )}
                .
              </li>
            </ul>
          </section>

          <section className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-lg">
              {translate(
                "by using the site and our services, you acknowledge reading, understanding, and agreeing to these terms"
              )}
              . {translate("contactForQuestions")}:
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center">
                <span className="mr-2">✉️</span> info@ifoe-sa.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span> +966565414847
              </p>
              <p>{translate("mainAddress")}.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
