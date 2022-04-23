# MusicBeReal

## CS4550: Final Project

### Authors: Anika Rabenhorst, Dani Rowe, Shane Mitnick, Rachel Kalafos

Planning Document: [here](https://docs.google.com/document/d/18W28yWstCxFbI7fHY6392mrX5UyARRKzL5meeA_Di3A/edit#heading=h.f5hzqoikee0r)

Figma Design Board: [here](https://www.figma.com/file/SmQhPC3ucZxj1Pzso0ONeJ/MusicBeReal?node-id=0%3A1)

# BEST PRACTICES

### Prettier
I installed prettier to make the code.... prettier... type `prettier -w .` into console to auto format all the files.

### Folder organization

1. "pages" should directly correlate with a url / destination e.x. `/` correlates with `HomePage.js`, `/register` correlates with `RegisterPage.js`
2. "components" should be reusable components that we can pop in wherever, such as the `SearchBar` component.
3. "layouts" wrap pages for consistency, `<DefaultLayout>` component will just set a background and provide a header. Wrap all pages in a layout!
