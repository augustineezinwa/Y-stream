import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function CustomUserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}
