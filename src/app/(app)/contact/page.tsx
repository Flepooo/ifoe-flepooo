import { type Metadata } from "next";
import { ContactForm } from "@/components/app/contact/form";
import { getLanguage } from "@/actions/app";
import translate from "@/lib/translate";
import ContactInfo from "@/components/app/contact/contact-info";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "نحن هنا للإجابة عن أسئلتك وتقديم الدعم اللازم"
};

export default async function ContactPage() {
  const language = await getLanguage();

  return (
    <main>
      <section
        className='relative bg-cover bg-center py-20'
        style={{
          backgroundImage: "url('/banners/03.jpg')"
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative container mx-auto text-center text-white px-4'>
          <h1 className='text-4xl font-bold'>{translate("contactUs", language)}</h1>
          <p className='text-lg mt-2'>{translate("contactUsTitle", language)}</p>
        </div>
      </section>

      <section className='py-12 bg-gray-50'>
        <ContactInfo language={language} />
      </section>

      <section className='py-12'>
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <ContactForm />

          <div className='rounded-lg overflow-hidden shadow-md'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14416388.212738775!2d38.640625!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038977e61dbf%3A0x861f086f7e41801a!2sSaudi%20Arabia!5e0!3m2!1sen!2s!4v1680436704277!5m2!1sen!2s'
              width='100%'
              height='520'
              style={{ border: 0 }}
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
