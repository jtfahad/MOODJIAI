'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface FaqSectionProps {
  imageSrc?: string;
  headingColor?: string;
}


const faqData = [
  {
    question: 'Apakah aplikasi ini sudah dapat izin dari MUI?',
    answer:
      'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah  masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah  masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
  },
  {
    question: 'Apakah aplikasi ini gratis?',
    answer:
      'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
  },
  {
    question: 'Apakah aplikasi ini gratis?',
    answer:
      'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
  },
  {
    question: 'Apakah data saya akan dijual ke agen khusus US?',
    answer:
      'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
},
  {
    question: 'Kenapa bumi muter? Apa karena di depan ada yang nikah?',
    answer:
      'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
  },
  {
    question: 'Kenapa bumi muter? Apa karena di depan ada yang nikah?',
    answer:
      'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
  },
];

export default function FaqSection({ imageSrc = '/dragons/Nariko.svg', headingColor = '#984A2E' }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="w-full mx-auto flex flex-col items-center text-center">
        <Image
          src={imageSrc}
          alt="Cute dragon"
          width={154}
          height={177}
          className="mx-auto mb-6"
        />
        <h2
          className="text-[45px] font-[500] leading-[120%] tracking-[0.41px] mb-4"
          style={{ color: headingColor }}
        >
          Frequently asked questions
        </h2>
        <p className="text-[#000000] text-[18px] font-[400] leading-[160%] text-center">
          Sebenarnya pertanyaan-pertanyaannya ini kagak ada yang nanya sih,
        </p>
        <p className="text-[#000000] text-[18px] font-[400] leading-[160%] mb-10 text-center">
          tapi yaudahlah, biar keliatan profesional aja gitu.
        </p>

        <div className="w-full sm:w-[80%] space-y-1 text-left ">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border-b border-[#0C1B4D1A]/10 ${
                openIndex === index ? 'bg-white/60 backdrop-blur-[40px]' : 'hover:bg-white/60'
              } transition-all duration-300`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-10 py-8 text-left font-semibold text-gray-800 transition-all duration-300"
              >
                {item.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && item.answer && (
                <div className="px-10 text-gray-700 text-sm pt-4 pb-6 border-t border-[#0C1B4D1A]/10">
                  <p className="w-[80%]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}