"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { protectedRoutes } from "@/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@once-ui-system/core";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const isPasswordRequired = Boolean(protectedRoutes[pathname as keyof typeof protectedRoutes]);
  const [password, setPassword] = useState("");
  const [authenticatedPath, setAuthenticatedPath] = useState<string | null>(null);
  const isAuthenticated = authenticatedPath === pathname;
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performChecks = async () => {
      setLoading(true);
      setAuthenticatedPath(null);

      if (protectedRoutes[pathname as keyof typeof protectedRoutes]) {
        const response = await fetch("/api/check-auth");
        if (response.ok) {
          setAuthenticatedPath(pathname);
        }
      }

      setLoading(false);
    };

    performChecks();
  }, [pathname]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setAuthenticatedPath(pathname);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  // Render public content in the initial server HTML, before hydration.
  if (!isPasswordRequired) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
