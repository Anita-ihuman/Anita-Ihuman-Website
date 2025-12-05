import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BlogCard } from "@/components/cards/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const tags = ["All", "AI/ML", "DevRel", "Platform Engineering", "Cloud-Native", "Kubernetes", "OSS", "Community", "DEI", "Python", "Developer Experience"];

const blogs = [
  {
    title: "Using GitHub MCP With Continue to Review PRs and Issues 5 Faster",
    excerpt: "Learn how to integrate Continuous AI directly with GitHub using the Model Context Protocol (MCP) to intelligently triage issues, suggest PR fixes.",
    date: "Nov 28th 2025",
    tags: ["Developer Experience", "DevRel", "AI/ML"],
    link: "https://dev.to/anita_ihuman/using-github-mcp-with-continue-to-review-prs-and-issues-5x-faster-1p8a",
  },
  {
    title: "Building a Custom MCP Server in Continue: A Step-by-Step Guide",
    excerpt: "Understand what MCPs and how to build your custom MCP server in TypeScript  using Continuous AI.",
    date: "Oct 10th 2025",
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/building-a-custom-mcp-server-in-continue-a-step-by-step-guide-1p71",
  },
  {
    title: "How to Deploy and Configure Hugo for Fast and SEO-Friendly Static Websites`",
    excerpt: "A guide on how to build a Hugo static site, configure it for optimal performance and SEO, and deploy it to UpCloud for fast delivery.",
    date: "Aug 27, 2025",
    tags: ["Kubernetes", "Cloud-Native"],
    link: "https://medium.com/@Anita-ihuman/how-to-deploy-and-configure-hugo-for-fast-and-seo-friendly-static-websites-8744eecace14",
  },
  {
    title: "Setting Up a Secure Ruby on Rails Environment on UpCloud: Best Practices",
    excerpt: "Understanding how to set up a secure Ruby on Rails environment, while digging into the best security tricks for today’s web apps..",
    date: "July, 10th 2025",
    tags: ["Kubernetes", "Cloud-Native", "Security"],
    link: "https://upcloud.com/resources/tutorials/setting-up-a-secure-ruby-on-rails-environment-on-upcloud-best-practices/",
  },
   {
    title: "Local or Cloud: Choosing the Right Dev Environment",
    excerpt: "Learn the key trade-offs between local, personal remote, and shared cloud environments.",
    date: "Apr 9th 2025",
    tags: ["Kubernetes", "Cloud-Native"],
        link: "https://thenewstack.io/local-or-cloud-choosing-the-right-dev-environment/",
  },
  {
    title: "Deploying a React App using AWS S3 and Cloud Front",
    excerpt: "A detailed guide on deploying your React app on AWS. From setting up your development environment to hosting the application using an AWS S3 bucket and completely setting up HTTPS and a custom domain.",
    date: "Sep 4th 2023",
    tags: ["Cloud-Native", "Kubernetes"],
    link: "https://medium.com/@Anita-ihuman/deploying-a-react-app-using-aws-s3-and-cloud-front-c0950808bf03",
  },
  {
    title: "Comparison of Internal Developer Platforms",
    excerpt: "A comprehensive comparison of IDP vendors and tools, and details the features they offer. ",
    date: "Nov 27th 2024",
    tags: ["Cloud-Native", "Platform Engineering"],
    link: "https://medium.com/@Anita-ihuman/comparison-of-internal-developer-platforms-90de61db00e1",
  },
  {
    title: "Unveiling the Impact: DEI Metrics Overcoming Social Barriers in Open Source",
    excerpt: "A report that explore how these DEI metrics can contribute to overcoming social barriers and create more welcoming environments for contributors from all backgrounds",
    date: "November 14 2023",
    tags: ["OSS", "Community", "DEI"],
    link: "https://chaoss.community/unveiling-the-impact-dei-metrics-overcoming-social-barriers-in-open-source/",
  },
  {
    title: "Microservice Service Discovery: API Gateway or Service Mesh?",
    excerpt: "Understand the drifference between Service Mesh and API gateway and which best aligns with your project needs.",
    date: "Apr 4 2022",
    tags: ["Cloud-Native", "Kubernetes"],
    link: "https://blog.getambassador.io/microservice-service-discovery-api-gateway-or-service-mesh-77c468167025",
  },
];

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredBlogs = activeTag === "All" 
    ? blogs 
    : blogs.filter(blog => blog.tags.some(tag => tag.toLowerCase().includes(activeTag.toLowerCase())));

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Blog"
            title="Technical Writing & Thoughts"
            description="Articles on DevRel, cloud-native technologies, open source, and community building."
          />

          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.title} {...blog} index={index} />
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No articles found for this tag.</p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
