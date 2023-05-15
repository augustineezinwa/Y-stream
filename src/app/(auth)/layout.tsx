import Footer from "@/app/footer/footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col bg-cover bg-center bg-sign-up-background min-h-screen">
        <div className="flex flex-col bg-cover bg-center min-h-screen bg-gray-413/20">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
