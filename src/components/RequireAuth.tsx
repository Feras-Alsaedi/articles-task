"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectIsAuthenticated } from "@/redux/features/authSlice";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login");
    } else {
      setAuthChecked(true);
    }
  }, [isAuthenticated]);

  if (!authChecked) {
    // Optional: show a loader/spinner
    return null;
  }

  return <>{children}</>;
}
