import type { ReactNode } from "react";
import ContactInfo from "./contact.info/layout";
import ProfileInfo from "./profile.info/layout";

export default function ProfileInfo({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="flex">
        { "Profile Info" }
      </div>
    </div>
  );
}