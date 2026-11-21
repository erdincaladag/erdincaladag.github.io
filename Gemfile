source "https://rubygems.org"

# Same Jekyll + plugin versions that GitHub Pages uses.
# Local preview:  bundle install  &&  bundle exec jekyll serve
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-redirect-from"
end

gem "webrick"                                   # needed for `jekyll serve` on Ruby 3+
gem "wdm", "~> 0.1" if Gem.win_platform?
gem "tzinfo-data" if Gem.win_platform?
