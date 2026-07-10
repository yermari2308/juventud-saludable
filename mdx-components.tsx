import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 {...props} />,
    p: (props) => <p {...props} />,
    ul: (props) => <ul {...props} />,
    li: (props) => <li {...props} />,
    ...components
  };
}
