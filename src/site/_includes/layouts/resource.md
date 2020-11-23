---
layout: layouts/base.njk
pageClass: resources
templateEngineOverride: njk, md
---

<h1>{{title}}</h1>
<main>
  {{ content | safe }}
</main>
<a href= "{{link}}" >"Gå til ressurs" </a>