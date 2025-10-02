import { InterruptLayout } from "@/components/common/layout/Interrupt-layout";

type BaseInterruptLayoutProps = {
  children: React.ReactNode;
};

export default function BaseInterruptLayout({
  children,
}: BaseInterruptLayoutProps) {
  return <InterruptLayout>{children}</InterruptLayout>;
}
