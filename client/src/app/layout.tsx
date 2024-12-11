import Header from "@/component/header";
import Footer from "@/component/footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <script src="https://cdn.tailwindcss.com"></script>
    
        <Header/>
        {children}
        <Footer/>
      </body>
    </html  >
  )
}