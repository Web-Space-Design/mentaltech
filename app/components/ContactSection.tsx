"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().trim().required("Proszę podać swoje imię i nazwisko."),
  email: yup
    .string()
    .trim()
    .email("Proszę podać poprawny adres e-mail.")
    .required("Adres e-mail jest wymagany."),
  phone: yup
    .string()
    .trim()
    .matches(/^[0-9+() -]*$/, "Proszę podać poprawny numer telefonu.")
    .required("Numer telefonu jest wymagany."),
  company: yup.string().trim(),
  consent: yup
    .boolean()
    .oneOf([true], "Musisz wyrazić zgodę na kontakt, aby wysłać formularz."),
});

export default function ContactSection() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      consent: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "white",
        py: { xs: 8, md: 12 },
        px: { xs: 1, sm: 2, md: 4 },
        position: "relative",
        width: "100vw",
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={8}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Lewa kolumna */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "42px", md: "56px" },
                mb: 4,
              }}
            >
              <Box component="span">Zróbmy razem&nbsp;</Box>
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #f60a41, #d86b13)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                coś wyjątkowego
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "rgba(255,255,255,0.8)", mb: 4, lineHeight: 1.6 }}
            >
              Wypełnij formularz lub skontaktuj się z nami bezpośrednio:
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontWeight: 600 }}>Zadzwoń:</Typography>
              <Typography sx={{ color: "#aaa" }}>+48 555 123 456</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontWeight: 600 }}>Napisz:</Typography>
              <Typography sx={{ color: "#aaa" }}>
                kontakt@twojafirma.pl
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 600 }}>Odwiedź nas:</Typography>
              <Typography sx={{ color: "#aaa" }}>
                ul. Przykładowa 7, Warszawa
              </Typography>
            </Box>
          </Grid>

          {/* Prawa kolumna – formularz */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                backgroundColor: "rgba(255,255,255,0.05)",
                p: { xs: 3, md: 5 },
                borderRadius: "16px",
                boxShadow: "0 0 20px rgba(255,255,255,0.05)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  textAlign: "left",
                  color: "white",
                }}
              >
                Wprowadź swoje dane kontaktowe
              </Typography>

              <TextField
                name="name"
                label="Imię i nazwisko *"
                fullWidth
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: { color: "white" },
                }}
              />

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    name="email"
                    label="Adres e-mail *"
                    fullWidth
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    name="phone"
                    label="Telefon *"
                    fullWidth
                    variant="outlined"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                </Grid>
              </Grid>

              <TextField
                name="company"
                label="Nazwa firmy / projektu"
                fullWidth
                variant="outlined"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: { color: "white" },
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="consent"
                    color="primary"
                    checked={formik.values.consent}
                    onChange={formik.handleChange}
                    sx={{
                      color:
                        formik.touched.consent && formik.errors.consent
                          ? "#f44336"
                          : "rgba(255,255,255,0.6)",
                      "&.Mui-checked": {
                        color:
                          formik.touched.consent && formik.errors.consent
                            ? "#f44336"
                            : "#fff",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.08)",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: "#ccc", fontSize: "0.9rem" }}>
                    Wyrażam zgodę na kontakt w celu udzielenia odpowiedzi na
                    zapytanie.
                  </Typography>
                }
              />
              {formik.touched.consent && formik.errors.consent && (
                <Typography
                  sx={{ color: "#f44336", fontSize: "0.8rem", ml: "32px" }}
                >
                  {formik.errors.consent}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: "50px",
                  background:
                    "linear-gradient(90deg, #f60a41 0%, #d86b13 100%)",
                  boxShadow: "0 0 20px rgba(246,10,65,0.4)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #ff3366 0%, #ff9933 100%)",
                    boxShadow: "0 0 25px rgba(246,10,65,0.6)",
                  },
                }}
              >
                Wyślij wiadomość
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
