import type { ReactNode } from "react";

type Field = {
    id: string;
    name: string;
    description: string;
    hint?: string;
    warning?: string; 
}

async function getFields(): Promise<Field[]> {
  // In a real app, fetch from your database or API.
  return [
    {
      id: "email",
      name: "email",
      description: "Please enter email address",
    },
    {
      id: "email",
      name: "email",
      description: "Please enter email address",
    },
  ];
}


export default function ContactInfo({
  children,
}: {
  children: ReactNode;
}) {
    const fields = await getFields();
    return (
        <div className="min-h-screen">
            {
                fields.map(field => 
                    <div>
                        <div>{field.name}</div>
                        <div>{field.description}</div>
                    </div>
                )
            }
        </div>
    );
}