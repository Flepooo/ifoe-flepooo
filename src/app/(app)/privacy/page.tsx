"use client";

import { useTranslate } from "@/hooks/use-translate";

export default function PrivacyPage() {
  const translate = useTranslate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {translate("privacyTitle")}
        </h1>

        <div className="prose prose-lg max-w-none text-justify text-gray-700">
          <section className="mb-8">
            <p className="mb-4">{translate("privacyIntro")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("informationWeCollect")}
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              {translate("voluntaryInfo")}
            </h3>
            <ul className="list-disc space-y-2 pl-6 mb-4">
              <li>{translate("registrationData")}</li>
              <li>{translate("contactRequests")}</li>
            </ul>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              {translate("autoCollectedInfo")}
            </h3>
            <ul className="list-disc space-y-2 pl-6 mb-4">
              <li>{translate("usageData")}</li>
              <li>{translate("cookiesData")}</li>
            </ul>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              {translate("thirdPartyInfo")}
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>{translate("marketingData")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("howWeUseInfo")}
            </h2>
            <p className="mb-2">{translate("usePurposes")}</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>{translate("serviceProvision")}</li>
              <li>{translate("communication")}</li>
              <li>{translate("marketing")}</li>
              <li>{translate("analysis")}</li>
              <li>{translate("legalCompliance")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("infoSharing")}
            </h2>
            <p className="mb-4">{translate("noSelling")}</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>{translate("techPartners")}</li>
              <li>{translate("officialPartners")}</li>
              <li>{translate("authorities")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("cookiesPolicy")}
            </h2>
            <p>{translate("cookiesUsage")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("dataProtection")}
            </h2>
            <p className="mb-4">{translate("protectionMeasures")}</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>{translate("encryption")}</li>
              <li>{translate("accessControls")}</li>
              <li>{translate("backups")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("yourRights")}
            </h2>
            <ul className="list-disc space-y-2 pl-6 mb-4">
              <li>{translate("accessCorrection")}</li>
              <li>{translate("deletion")}</li>
              <li>{translate("objection")}</li>
              <li>{translate("consentWithdrawal")}</li>
            </ul>
            <p>{translate("exerciseRights")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("policyUpdates")}
            </h2>
            <p>{translate("updatesInfo")}</p>
          </section>

          <section className="mt-12 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {translate("contactForPrivacy")}
            </h2>
            <p className="mb-4">{translate("privacyContactInfo")}</p>
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

          <section className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-lg">
              {translate(
                "by using our site and services, you agree to the collection and use of your data in accordance with this policy"
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
