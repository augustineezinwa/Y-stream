import CustomUserProvider from "../user-provider";

export default function SecuredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
