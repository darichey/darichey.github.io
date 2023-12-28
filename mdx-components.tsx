import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => <pre className="not-prose">{children}</pre>,
    ...components,
  };
}
