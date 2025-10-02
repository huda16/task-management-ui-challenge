"use client";

import { Suspense } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/react-query";

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

const ReactQueryDevtoolsProduction = dynamic(() =>
  import("@tanstack/react-query-devtools/production").then((mod) => ({
    default: mod.ReactQueryDevtools,
  })),
);

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const pathname = usePathname();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Suspense>
        {process.env.BUILD_STANDALONE !== "true" &&
          !pathname.startsWith("/print") && (
            <ReactQueryDevtoolsProduction
              initialIsOpen={false}
              buttonPosition="bottom-left"
            />
          )}
      </Suspense>
    </QueryClientProvider>
  );
}
