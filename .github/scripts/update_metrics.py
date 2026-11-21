"""Refresh _data/metrics.yml from OpenAlex (free API, author matched by ORCID).
Runs weekly from .github/workflows/update-metrics.yml. Standard library only."""
import json, re, sys, datetime, urllib.request, pathlib

cfg = pathlib.Path("_config.yml").read_text(encoding="utf-8")
m = re.search(r'^\s*orcid\s*:\s*"?([0-9X-]{19})"?', cfg, re.M)
if not m:
    sys.exit("ORCID not found in _config.yml")
orcid = m.group(1)

url = f"https://api.openalex.org/authors/orcid:{orcid}"
with urllib.request.urlopen(url, timeout=30) as r:
    a = json.load(r)
s = a.get("summary_stats", {})
data = {
    "citations": a.get("cited_by_count"),
    "h_index": s.get("h_index"),
    "i10_index": s.get("i10_index"),
    "works": a.get("works_count"),
}
path = pathlib.Path("_data/metrics.yml")
old = path.read_text(encoding="utf-8")
header = "".join(l for l in old.splitlines(True) if l.startswith("#"))
body = "".join(f"{k}: {'' if v is None else v}\n" for k, v in data.items())
body += f"source: OpenAlex\nupdated: {datetime.date.today().isoformat()}\n"
path.write_text(header + body, encoding="utf-8")
print(body)
