"use client";

import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { Header } from "@/components/common/header";

import { MaterialUiProvider } from "@/providers/material-ui-provider";

import { ApiConfig } from "../api-config";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <MaterialUiProvider>
      <Stack direction="row" spacing={1}>
        <AppBar
          position="fixed"
          sx={(theme) => ({
            backgroundColor: theme.palette.background.paper,
            zIndex: theme.zIndex.drawer + 1,
          })}
        >
          <Toolbar sx={{ pr: "1.5rem" }}>
            <Typography
              component="h1"
              variant="h6"
              color="primary"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Task Management UI
            </Typography>
            <Stack direction="row" spacing={0.1} alignItems="center">
              <ApiConfig />
              <Header />
            </Stack>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{ minHeight: "100vh", flexGrow: 1, overflow: "auto" }}
        >
          <Toolbar />
          <Container maxWidth={false} sx={{ my: 4 }}>
            {children}
          </Container>
        </Box>
      </Stack>
    </MaterialUiProvider>
  );
}
