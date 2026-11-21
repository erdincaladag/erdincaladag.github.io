---
# HOW TO PUBLISH A NOTE
# 1. Copy this file to _posts/ and rename it YYYY-MM-DD-short-title.md (e.g. 2026-12-01-pm10-trends.md)
# 2. Edit the fields below and write the text in Markdown
# 3. Put images in /images/notes/ and code/data files in /files/notes/
title: "Example note: plotting a PM10 time series"
category: code          # figures | code | writing
description: "One-sentence summary shown on the Notes page."
image: /images/favicon.svg   # optional thumbnail for the Notes page
---

Short introduction in Markdown. You can use **bold**, *italics*, [links](https://example.org) and lists.

## A figure

![Caption text for the figure](/images/favicon.svg)
*Figure 1. Figure caption.*

## Some code

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("pm10.csv", parse_dates=["date"])
df.set_index("date")["pm10"].resample("M").mean().plot()
plt.ylabel("PM$_{10}$ (µg/m³)")
plt.show()
```

Download the script: [plot_pm10.py](/files/notes/plot_pm10.py)
