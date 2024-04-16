# Contribution rules and git flow

## Branching

- Before making any new changes make sure to go back to the `dev` branch pull and create a new branch from there
- Make sure to follow this branch naming convention
- The dev branch is where developers work on
- Always use the dev branch as the base branch of your pull requests
- The main branch is the production branch.
- Change the base branch using other methods like `git rebase` instead of using the pull request merging for the `dev`, `main`, and `staging`

### Branching model

We follow a specific branching model to organize our development process. Please adhere to the following guidelines when creating branches:

### **Main Branches**

- **main**: The main branch is the production branch and represents the latest stable version of the project.
- **dev**: The development branch where active development takes place.

### **Feature branches**

Feature branches should have one of the following prefixes: fix (bug fix), ft (feature), ht (hotfix), chore, or doc (documentation), followed by a forward slash and a descriptive name.

**Examples:**

- ft/new-section-layout
- fix/bug-fix
- ht/emergency-fix
- chore/update-dependencies
- doc/update-readme

### Commit

- Adhere to the conventions outlined in [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) when crafting your commit messages.
- Aim to produce mid-sized commits every couple of minutes or hours. However, prioritize logical consistency in your contributions. This entails breaking down extensive changes into multiple commits, ensuring each commit conveys an independent and meaningful purpose described in its commit message.

#### Examples

1. **Following Conventional Commits:**

   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve issue with..."
   ```

2. **Logical Consistency:**

   - Break down changes logically.

   ```bash
   # Good practice
   git commit -m "chore: update dependencies"
   git commit -m "doc: improve documentation"

   # Avoid combining unrelated changes
   git commit -m "chore: update dependencies and fix bug"
   ```

By adhering to these guidelines, we maintain a clean and informative commit history. Please refer to the provided examples for a better understanding of the recommended practices.

## Next.js and JavaScript rules

- Components should be placed inside the`./components` folder
- Define components following the functional component style (not the class component style).

**Example:**

```javascript
export default function Button({ children }) {
  return <button>{children}</button>;
}
```

- Component file names should be named in [PascalCase](https://techterms.com/definition/pascalcase). (eg: `SectionWrapper.jsx`)
- File names should be the same as the component. The given name of a component in its definition should be the same as its file name.
- All JS react files including components when they contain HTML (or [JSX](https://reactjs.org/docs/introducing-jsx.html)), should have a file extension of `jsx`
- Avoid having too many line blocks inside a single component instead divide it into multiple smaller components
- A single component should handle a single type of implementation (or functionality) rather than combining different non-related functionalities together.
- When editing a reusable component to adapt it to a certain page or a single usage, make sure to check that the new changes don't break other usages of the component
- When dealing with images in a Next js use [nextjs’ image](https://nextjs.org/docs/api-reference/next/image) component to render and optimize images.
- Integrate fonts using URLs rather than hardcoding them in the project, to avoid effects on the page loading speed which can be heavily affected if you are using a font file included within the project.

## Naming (file names, functions, etc.)

- File names should be the same as the component
- Component files should be named in PascalCase
- Component file names should be the same as the function name. Both should be written in PascalCase.
- Class files should also be named in PascalCase
- Class and component names are always singular
- Page files, function files, and other files should be named in kebab-case
- Function names should reflect the function's role
- Folders should be named in kebab-case
- Variables should be named in camelCase
- Global constant variables should be named in SNAKE_CASE (all-caps snake case)
- Custom CSS classes should be named in kebab-case and follow the [bem](http://getbem.com/introduction/) style
- When adding custom CSS classes, make sure their name doesn't conflict with any tailwindcss class.

## Image optimizations

- Use `webp` format to load images faster and without quality loss.
  - This is applicable for images and not icons or logos.
  - Use this tool https://cloudconvert.com/webp-converter to convert images to `web`
- Use `SVG` formats for icons and logos and everywhere where it’s applicable instead of `png`

## QA your own work-results before submitting a PR for review

- Use the browser device inspect tab and check the design on the following devices:

  - iPhone 5/SE
  - Galaxy S5/Moto G4
  - Pixel 2 XL
  - iPhone 6/7/8
  - iPhone 6/7/8 Plus
  - iPhone X, 12, 13 or 14
  - iPad
  - iPad pro
