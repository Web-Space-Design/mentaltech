import { notFound } from "next/navigation";
import { Box, Typography, Chip } from "@mui/material";
import { projectsData } from "@/app/data/projectsData";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";

interface Props {
  params: Promise<{ slug: string }>; // ⬅️ ważne — params jest Promise
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; // ⬅️ trzeba poczekać na params
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <Box
      sx={{
        color: "white",
        bgcolor: "#000",
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* GŁÓWNY BLOK TREŚCI */}
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "calc(100% - 200px)", // o 100px mniejsze marginesy po bokach
          },
          maxWidth: "1400px",
          px: { xs: 2, md: 0 },
        }}
      >
        <BackButton />
        {/* GŁÓWNY TYTUŁ I TECHNOLOGIE */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="h3" fontWeight={700}>
            {project.title}
          </Typography>
          <Typography variant="h6" color="gray" sx={{ mt: 1 }}>
            {project.subtitle}
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{ bgcolor: "#222", color: "#fff" }}
              />
            ))}
          </Box>
        </Box>

        {/* WIDEO */}
        {project.video && (
          <Box
            sx={{
              mb: 8,
              width: "100%",
            }}
          >
            <video
              src={project.video}
              style={{
                width: "100%",
                borderRadius: "24px",
                display: "block",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
              autoPlay
              muted
              loop
              playsInline
            />
          </Box>
        )}

        {/* OPIS I SZCZEGÓŁY */}
        <Box sx={{ display: "grid", gap: 4 }}>
          {project.client && (
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Klient
              </Typography>
              <Typography color="gray">{project.client}</Typography>
            </Box>
          )}

          {project.year && (
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Rok realizacji
              </Typography>
              <Typography color="gray">{project.year}</Typography>
            </Box>
          )}

          {project.industry && (
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Branża
              </Typography>
              <Typography color="gray">{project.industry}</Typography>
            </Box>
          )}

          {project.scope && (
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Zakres prac
              </Typography>
              <Typography color="gray">{project.scope.join(", ")}</Typography>
            </Box>
          )}

          {project.challenges && (
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Wyzwania
              </Typography>
              <Typography color="gray">{project.challenges}</Typography>
            </Box>
          )}

          {project.solution && (
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Rozwiązanie
              </Typography>
              <Typography color="gray">{project.solution}</Typography>
            </Box>
          )}

          {project.results && (
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Rezultaty
              </Typography>
              <Typography color="gray">{project.results}</Typography>
            </Box>
          )}
        </Box>

        {/* GALERIA */}
        {project.gallery && (
          <Box
            sx={{
              mt: 8,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 3,
            }}
          >
            {project.gallery.map((src, i) => (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={src}
                  alt={`Zrzut ekranu ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
