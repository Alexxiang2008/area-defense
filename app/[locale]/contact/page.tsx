import { Suspense } from 'react';
import ContactForm from './ContactForm';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-atd-black" />}>
      <ContactForm />
    </Suspense>
  );
}
