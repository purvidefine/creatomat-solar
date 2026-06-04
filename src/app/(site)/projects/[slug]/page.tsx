import { notFound } from "next/navigation";
import { fetchAllProjectSlugs, fetchProjectBySlug, fetchRelatedProjects } from "@/lib/data/projects";
import ProjectDetailTemplate from "@/components/templates/ProjectDetailTemplate";

export async function generateStaticParams() {
  const slugs = await fetchAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Creatomat Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);
  if (!project) notFound();
  const related = await fetchRelatedProjects(slug, project.serviceSlug, 3);
  return <ProjectDetailTemplate data={project} relatedProjects={related} />;
}
