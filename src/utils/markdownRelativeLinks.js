import { visit } from 'unist-util-visit';

export default function markdownRelativeLinks() {
  function visitor(node) {
    if (node.url.startsWith('http') || node.url.startsWith('/images/')) {
      return;
    }

    if (!node.url.startsWith('/')) {
      node.url = './' + node.url;
    }
  }

  function transform(tree) {
    visit(tree, 'image', visitor);
  }

  return transform;
}
