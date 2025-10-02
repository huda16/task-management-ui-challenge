import { getTranslations } from "next-intl/server";

import { Button, Container, Typography } from "@mui/material";

export async function generateMetadata() {
  const t = await getTranslations("ForbiddenPage");

  return {
    title: t("forbidden"),
  };
}

export default async function Forbidden() {
  const t = await getTranslations();

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t("ForbiddenPage.403Forbidden")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("ForbiddenPage.youDoNotHavePermissionToAccessThisPage")}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} href="/">
        {t("Common.goToHomepage")}
      </Button>
    </Container>
  );
}
