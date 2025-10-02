import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  const t = await getTranslations("Menu");

  return {
    title: t("Dashboard"),
  };
}

export default async function DashboardPage() {
  redirect("/tasks");
}
