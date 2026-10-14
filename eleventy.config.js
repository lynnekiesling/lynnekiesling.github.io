import fs from "node:fs";
import yaml from "js-yaml";

export default function (eleventyConfig) {
  // Inline an SVG from src/assets/img so it can take its color from CSS (currentColor).
  // Usage: {% svg "mark", "mark" %}  (decorative)  or  {% svg "lockup", "lockup", "Lynne Kiesling" %}  (labelled)
  eleventyConfig.addShortcode("svg", (name, cls = "", label = "") => {
    let s = fs.readFileSync(`src/assets/img/${name}.svg`, "utf8");
    s = s.replace(/ role="img"/, "").replace(/ aria-label="[^"]*"/, "");
    const a = label
      ? `role="img" aria-label="${label}"`
      : `aria-hidden="true" focusable="false"`;
    return s.replace("<svg ", `<svg class="${cls}" ${a} `);
  });

  // Content lives in src/_data/*.yaml so entries can be added without touching layouts.
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Group a list of entries by year (newest first) for the publication lists.
  eleventyConfig.addFilter("groupByYear", (items) => {
    const groups = new Map();
    for (const item of items) {
      if (!groups.has(item.year)) groups.set(item.year, []);
      groups.get(item.year).push(item);
    }
    return [...groups.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([year, entries]) => ({ year, entries }));
  });

  // Static files copied as-is (CSS, favicon, CV PDF).
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
