import type { Metadata } from "next";
import ClientPage from "./presentation/ClientPage";
import { Footer } from "./presentation/components/footer";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
};

export default function FinancialMovesPage() {  
  return (
      <>
      <ClientPage />
      <Footer />
      </>
      
  )
}