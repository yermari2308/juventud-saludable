import BlogOne, { metadata as blogOne } from "@/content/blog/bienestar-comunitario.mdx";
import BlogTwo, { metadata as blogTwo } from "@/content/blog/liderazgo-provincial.mdx";
import OpinionOne, { metadata as opinionOne } from "@/content/opinion/tecnologia-con-proposito.mdx";
import OpinionTwo, { metadata as opinionTwo } from "@/content/opinion/ambiente-y-bienestar.mdx";
import { blogPostMeta, opinionPostMeta } from "@/content/posts";

export const blogPosts = [
  { ...blogPostMeta[0], metadata: blogOne, Component: BlogOne },
  { ...blogPostMeta[1], metadata: blogTwo, Component: BlogTwo }
];

export const opinionPosts = [
  { ...opinionPostMeta[0], metadata: opinionOne, Component: OpinionOne },
  { ...opinionPostMeta[1], metadata: opinionTwo, Component: OpinionTwo }
];

export const allPosts = [...blogPosts, ...opinionPosts];
