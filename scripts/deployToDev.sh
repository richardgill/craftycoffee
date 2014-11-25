bundle exec jekyll build
git checkout gh-pages
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
git status
