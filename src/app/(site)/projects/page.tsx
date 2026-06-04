import PageHero from "@/components/ui/PageHero";
import { fetchAllProjects } from "@/lib/data/projects";
import { fetchProjectsPage } from "@/lib/data/pageSettings";
import ProjectsClient from "./_ProjectsClient";

export async function generateMetadata() {
  const page = await fetchProjectsPage();
  return {
    title: page.seoTitle ?? "Projects | Creatomat Engineering",
    description: page.seoDescription ?? undefined,
  };
}

export default async function ProjectsPage() {
  const [projects, page] = await Promise.all([
    fetchAllProjects(),
    fetchProjectsPage(),
  ]);

  return (
    <main>
      <PageHero
        overline={page.hero.overline ?? "Our Projects"}
        title={page.hero.title ?? "Projects That Power Progress"}
        description={page.hero.description ?? "Real installations, real results. Browse our portfolio of completed projects across India."}
      />
      <ProjectsClient
        projects={projects}
        portfolioStats={page.portfolioStats}
        cta={page.cta}
      />
    </main>
  );
}
