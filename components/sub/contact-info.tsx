"use client";

import {
  DocumentArrowDownIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import { CONTACT_INFO, LINKS } from "@/constants";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: EnvelopeIcon,
  },
  {
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: "tel:+15142480144",
    icon: PhoneIcon,
  },
  {
    label: "Location",
    value: CONTACT_INFO.location,
    href: undefined,
    icon: MapPinIcon,
  },
] as const;

export const ContactInfo = () => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0a0c1a]/80 p-8 backdrop-blur-sm">
      <h2 className="mb-8 text-2xl font-semibold text-white">Let&apos;s Talk</h2>

      <div className="flex flex-col gap-6">
        {CONTACT_ITEMS.map(({ label, value, href, icon: Icon }) => {
          const content = (
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className="text-[15px] text-white">{value}</p>
              </div>
            </div>
          );

          if (href) {
            return (
              <Link
                key={label}
                href={href}
                className="transition hover:opacity-80"
              >
                {content}
              </Link>
            );
          }

          return <div key={label}>{content}</div>;
        })}
      </div>

      <Link
        href={CONTACT_INFO.resumeUrl}
        download="Uriel-Nguefack-Yefou-Resume.pdf"
        className="mt-10 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-400/50 px-5 py-2.5 text-[15px] text-blue-400 transition hover:bg-blue-400/10"
      >
        <DocumentArrowDownIcon className="h-5 w-5" />
        Download Resume
      </Link>

      <div className="mt-auto flex gap-4 pt-10">
        <Link
          href={LINKS.github}
          target="_blank"
          rel="noreferrer noopener"
          className="text-gray-400 transition hover:text-blue-400"
          aria-label="GitHub"
        >
          <RxGithubLogo className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/uriel-nguefack-yefou/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-gray-400 transition hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <RxLinkedinLogo className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};
