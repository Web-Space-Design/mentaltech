"use client";

import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={() => router.back()}
      sx={{
        color: "#bbb",
        mb: 4,
        textTransform: "none",
        "&:hover": { color: "#fff" },
      }}
    >
      Powrót
    </Button>
  );
}
