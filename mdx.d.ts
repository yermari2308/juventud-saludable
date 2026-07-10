declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
    author: string;
    province?: string;
    readingTime: string;
    tags: string[];
    bio?: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
