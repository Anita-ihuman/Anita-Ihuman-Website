import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArticleRow } from "@/components/shared/ArticleRow";
import { articleTags, articles, groupArticlesByYear } from "@/data/articles";

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredArticles =
    activeTag === "All"
      ? articles
      : articles.filter((article) => article.tags.includes(activeTag));

  const grouped = groupArticlesByYear(filteredArticles);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Writing"
            title="Everything I've written"
            description="All of it, by year: DevRel, AI agents, cloud-native tooling, open source, and community."
          />

          {/* Tag filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {articleTags.map((tag) => (
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

          {/* Articles by year */}
          <div className="max-w-4xl mx-auto space-y-16">
            {grouped.map(([year, yearArticles]) => (
              <div key={year}>
                <div className="flex items-baseline gap-4 mb-2">
                  <h2 className="heading-3 text-primary">{year}</h2>
                  <span className="text-sm text-muted-foreground">
                    {yearArticles.length} {yearArticles.length === 1 ? "article" : "articles"}
                  </span>
                </div>
                <div>
                  {yearArticles.map((article, index) => (
                    <ArticleRow key={article.link} article={article} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {grouped.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                Nothing tagged “{activeTag}” yet. Try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
