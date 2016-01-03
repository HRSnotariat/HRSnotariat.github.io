---
layout: page
permalink: /index.html
title: Dr. Hansruedi Stadler-Ineichen
description: Persönliche Beratung und massgeschneiderte Lösungen
tags: []
image:
  feature: hrs1.jpg
---

Ich bin spezialisiert auf Dienstleistungen im Notariat und in der Rechtsberatung. Ihre Bedürfnisse stehen im Zentrum. Dafür ist die passende Lösung zu finden.

Ich biete notarielle Dienstleistungen und andere Dienstleistungen in folgenden Sachgebieten an:

<ul>
{% for page in site.pages %}
  {% if page.categories contains 'dienstleistung' %}
  <li><a href="{{page.url}}">{{page.title}}</a></li>
  {% endif %}
{% endfor %}
</ul>
