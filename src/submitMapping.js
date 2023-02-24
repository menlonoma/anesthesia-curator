import { ArticleFull } from "./ui-components";

function submitMapping({ content }) {
  const overrides = {
    titleText: {
      children: content.title,
    },
    contentText: {
      children: content.text,
    },
    URL: {
      children: content.link,
    },
  };

  return <ArticleFull overrides={overrides} />;
}
