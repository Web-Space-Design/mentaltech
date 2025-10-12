"use client";

import { useMediaQuery } from "@mui/material";
import Cursor from "./Cursor";

export default function CursorWrapper() {
  const isDesktop = useMediaQuery("(min-width:768px)");
  if (!isDesktop) return null;
  return <Cursor />;
}
