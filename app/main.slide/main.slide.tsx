"use client";

import type { ReactNode } from "react";
import ContactInfo from "./contact.info/layout";
import ProfileInfo from "./profile.info/layout";

export default function RefreshButton() {
  const [loading, setLoading] = useState(false);

  async function handleRefresh () {
    setLoading(true);

    try {
      // Call an API or trigger a refresh here.
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleRefresh}
      disabled={loading}
      className="rounded bg-blue-600 px-4 py-2 text-white"
    >
      {loading ? "Refreshing..." : "Refresh"}
    </button>
  );
}



export default function MainSlide ({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <ContactInfo />
      </div>
    </div>
  );
}