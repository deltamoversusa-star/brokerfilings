import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — BrokerFilings",
  description: "Get in touch with the BrokerFilings team. We reply within 2 hours on business days.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
