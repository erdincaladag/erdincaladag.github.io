---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
## PUBLISHED JOURNAL ARTICLES INDEXED BY SCI, SSCI, AND AHCI

<strong>The Influence of Meteorological Factors on Air Quality in the Province of Van, Turkey</strong>
Aladag, E. (2023). The Influence of Meteorological Factors on Air Quality in the Province of Van, Turkey. Water, Air, & Soil Pollution, 234(4), 1-23.
<a href="https://doi.org/10.1007/s11270-023-06265-0" class="fas fa-link"></a> <a href="#" class="fa fa-file-pdf-o"></a>
Abstract

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
