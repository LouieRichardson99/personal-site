---
title: How To Fetch Siblings Using The Umbraco Content Delivery API
description: A solution to how we can fetch sibling nodes using the Umbraco Content Delivery API.
publishDate: 2024-10-28
---

# How To Fetch Siblings Using The Umbraco Content Delivery API

I stumbled across a problem when trying to fetch sibling nodes in an Astro site using the Content Delivery API in Umbraco. Unfortunately, there didn’t seem to be any straight forward way to retrieve them using the available query parameters. 

Not to worry, I have a solution! 🙌

You may have a different way of interacting with the Content Delivery API but for this example we will do a standard fetch request.

```js
const UMBRACO_DOMAIN = 'https://example.com';
const id = '59e00b11-23d7-4d8d-af38-df7e74132036'; // id of the current node

const ancestor = await fetch(
  `${UMBRACO_DOMAIN}/umbraco/delivery/api/v2/content?fetch=ancestors:${id}&take=1`
).then(async (res) => {
  const data = await res.json();
  return data.items[0];
});

const siblings = await fetch(
  `${UMBRACO_DOMAIN}/umbraco/delivery/api/v2/content?fetch=children:${ancestor.id}`
).then(async (res) => {
  const data = await res.json();
  return data.items.filter((node) => node.id !== id);
});
```

We use the ID of the current node to fetch the ancestors, and only take 1 as that’s all we’ll need to retrieve the siblings. Then we get the siblings by fetching the children by passing in the `ancestor.id`.

We can choose not to return the current node by filtering the result.

I hope this helps you understand how we can fetch sibling nodes using the Umbraco Content Delivery API!