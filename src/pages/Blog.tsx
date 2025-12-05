import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BlogCard } from "@/components/cards/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const tags = ["All", "DevRel", "Cloud-Native", "Kubernetes", "OSS", "Community", "Python", "Developer Experience"];

const blogs = [
  {
    title: "Building Sustainable Open Source Communities: A Practical Guide",
    excerpt: "Learn the key strategies for creating thriving, inclusive open-source communities that stand the test of time.",
    date: "Nov 2024",
    tags: ["OSS", "Community"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "The Developer Advocate's Handbook: From Zero to Hero",
    excerpt: "A comprehensive guide to breaking into Developer Relations and making an impact in your first year.",
    date: "Oct 2024",
    tags: ["DevRel", "Career"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "Kubernetes Policy Management with Kyverno: Getting Started",
    excerpt: "An introduction to Kubernetes-native policy management and how Kyverno simplifies cluster governance.",
    date: "Sep 2024",
    tags: ["Kubernetes", "Cloud-Native"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "Measuring Community Health: CHAOSS Metrics Explained",
    excerpt: "Understanding how to measure and improve the health of your open-source community using CHAOSS metrics.",
    date: "Aug 2024",
    tags: ["OSS", "Community"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "Developer Experience: Why It Matters and How to Improve It",
    excerpt: "Exploring the importance of developer experience and practical ways to enhance it in your products.",
    date: "Jul 2024",
    tags: ["Developer Experience", "DevRel"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "Cloud-Native Security Best Practices for Startups",
    excerpt: "Essential security practices every startup should implement when building on cloud-native technologies.",
    date: "Jun 2024",
    tags: ["Cloud-Native", "Security"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "The Art of Technical Writing: Tips for Developer Documentation",
    excerpt: "How to write documentation that developers actually want to read and find useful.",
    date: "May 2024",
    tags: ["DevRel", "Technical Writing"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "Python for DevOps: Automating Your Infrastructure",
    excerpt: "A practical guide to using Python for infrastructure automation and DevOps workflows.",
    date: "Apr 2024",
    tags: ["Python", "Cloud-Native"],
    link: "https://medium.com/@anitaihuman",
  },
  {
    title: "Inclusive Open Source: Building Communities for Everyone",
    excerpt: "Strategies and best practices for creating welcoming, inclusive open-source projects.",
    date: "Mar 2024",
    tags: ["OSS", "Community", "DEI"],
    link: "https://medium.com/@anitaihuman",
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
