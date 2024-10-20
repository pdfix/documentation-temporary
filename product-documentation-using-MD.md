# Creating product documentation using Markdown on GitHub

Creating product documentation using Markdown on GitHub is a great way to maintain readable and accessible documentation. Here’s a step-by-step guide to help you create and organize product documentation using Markdown on GitHub:

### Step 1: Set Up a Repository
1. **Create a GitHub Repository**:
   - Log in to GitHub and click on the **+** sign at the top-right corner.
   - Select **New Repository**.
   - Name your repository, add a description, and choose whether you want it to be public or private.
   - Optionally, initialize the repository with a README file.

### Step 2: Write Documentation in Markdown
Markdown is a lightweight markup language that's easy to write and read. Here are the common elements of Markdown you'll use to create documentation.

#### Common Markdown Syntax:
1. **Headings**:
   Use `#` for headers. The number of `#` indicates the heading level.
   ```markdown
   # Heading 1
   ## Heading 2
   ### Heading 3
   ```

2. **Paragraphs**:
   Just write text normally. Leave a blank line between paragraphs for separation.

3. **Bold and Italics**:
   - *Italic*: Use one asterisk or underscore: `*italic*` or `_italic_`.
   - **Bold**: Use two asterisks or underscores: `**bold**` or `__bold__`.

4. **Lists**:
   - **Unordered list**: Use dashes or asterisks:
     ```markdown
     - Item 1
     - Item 2
     ```
   - **Ordered list**: Use numbers followed by a period:
     ```markdown
     1. First
     2. Second
     ```

5. **Links**:
   ```markdown
   [Link text](https://example.com)
   ```

6. **Images**:
   ```markdown
   ![Alt text](https://example.com/image.jpg)
   ```

7. **Code Blocks**:
   For inline code, use backticks (\`):
   ```markdown
   Here is some `inline code`.
   ```

   For code blocks, use triple backticks (```):
   ```markdown
   ```
   def hello_world():
       print("Hello, World!")
   ```
   ```

8. **Tables**:
   ```markdown
   | Column 1 | Column 2 | Column 3 |
   | -------- | -------- | -------- |
   | Row 1    | Data     | More data|
   ```

9. **Blockquotes**:
   ```markdown
   > This is a quote.
   ```

10. **Task Lists**:
   ```markdown
   - [x] Task 1 completed
   - [ ] Task 2 not completed
   ```

11. **Images**:

   - This is an image:  
   ![alt text](../../images/sample.png)
   ```
   ![alt text](../../images/sample.png)
   ```
- This is inline image:
This is some text with an image ![alt text](../../images/appfiles.png) right in the middle of the sentence.
```
This is some text with an image ![alt text](../../images/appfiles.png) right in the middle of the sentence.

```


### Step 3: Add Documentation Files to Your Repository
1. **Create Markdown Files**:
   - You can create multiple Markdown files for different parts of your product documentation (e.g., `README.md`, `INSTALL.md`, `USER_GUIDE.md`).
   - GitHub automatically displays `README.md` on the main page of the repository.

2. **Organize Files**:
   - For larger projects, you may want to organize your documentation into folders:
     - `/docs/` for documentation
     - `/images/` for images used in the documentation

3. **Edit Files Directly on GitHub**:
   - Navigate to the repository.
   - Click the **Add file** button, then select **Create new file**.
   - Name the file (e.g., `README.md`) and write your Markdown content.
   - Commit your changes by providing a commit message, then click **Commit new file**.

### Step 4: Preview and Collaborate
1. **Preview Markdown**:
   - GitHub automatically renders Markdown when you view `.md` files in your repository. You can see how your documentation will look in real-time.

2. **Collaborate**:
   - If working with a team, others can contribute by forking the repository or using pull requests. You can discuss changes, review documentation, and approve updates before merging them.

### Step 5: Set Up a GitHub Pages Site (Optional)
If you want a more formal website for your documentation, you can use **GitHub Pages** to host it:
1. Go to your repository's **Settings**.
2. Scroll down to the **GitHub Pages** section.
3. Select the branch and folder (e.g., `/docs/` folder) where your documentation is stored.
4. Your documentation will be available at `https://yourusername.github.io/yourrepository`.

### Best Practices for Documentation:
- **Be Clear and Concise**: Write straightforward and easy-to-understand instructions.
- **Organize by Topic**: Use multiple Markdown files for different sections or features.
- **Include Visuals**: Use images and code examples to make the documentation more user-friendly.
- **Keep It Updated**: Ensure your documentation stays up-to-date with your product’s latest features.

Would you like more specific examples or help setting up a particular document?


## Multiple Files in Help

Yes, you can create an index or a **table of contents (TOC)** on the left side when using multiple `.md` files for documentation on GitHub, but it will require using some form of static site generation or customization. Here are a few ways you can achieve this:

### 1. Use GitHub Wiki (Simple and Built-in)
GitHub provides a **Wiki** feature in every repository that allows you to organize documentation with a sidebar for navigation.

#### Steps to Use GitHub Wiki:
1. Go to your repository, and you'll see a **Wiki** tab.
2. Create pages using Markdown (just like `.md` files in the repository).
3. You can structure the Wiki with a sidebar and a table of contents, which appears on the left side. GitHub automatically generates this based on the pages you create.
4. You can manually link different pages in the sidebar and organize them.

#### How to Create Sidebar in Wiki:
1. Click on **Create a new page**.
2. Name the page `_Sidebar.md`. The content of this file will appear as the left-hand index for your Wiki.
3. In `_Sidebar.md`, add links to your documentation pages like so:
   ```markdown
   - [Home](Home)
   - [Installation Guide](Installation-Guide)
   - [User Guide](User-Guide)
   ```
   
### 2. Use GitHub Pages with a Static Site Generator (Advanced)
To create a more structured and professional index on the left side, you can use **GitHub Pages** with static site generators like **Jekyll** or **Docusaurus**. These allow you to create a sidebar with links to different Markdown files, offering more customization options.

#### Steps to Set Up with Jekyll:
1. **Enable GitHub Pages**:
   - Go to your repository’s **Settings** > **GitHub Pages** and select a branch and folder (usually `main` or `/docs/` folder).
   
2. **Install Jekyll**:
   - Create a `_config.yml` file in the root of your repository.
   - Install a theme that supports sidebars, such as **Minima** or **Just the Docs**.

3. **Create a Sidebar**:
   - In `_config.yml`, set up navigation like this:
     ```yaml
     theme: "just-the-docs"
     just_the_docs:
       aux_links:
         Installation Guide: /docs/INSTALL.md
         User Guide: /docs/USER_GUIDE.md
       collections:
         docs:
           output: true
     ```

4. **Organize your `.md` files**:
   - Put your documentation files in a folder (e.g., `/docs/`) and link them to the sidebar through `_config.yml`.
   
#### Example of Sidebar Layout:
Using **Just the Docs** theme:
```yaml
just_the_docs:
  navigation:
    - title: "Documentation"
      children:
        - title: "Introduction"
          url: "/docs/introduction"
        - title: "Installation Guide"
          url: "/docs/installation"
        - title: "User Guide"
          url: "/docs/user-guide"
```

This creates an automatically generated sidebar on the left with links to the different sections of your documentation.

#### Benefits of Using GitHub Pages and Jekyll:
- You can customize the sidebar and make it automatically appear on all pages.
- It supports more advanced layouts and themes.
- Markdown files are easily converted to a static documentation site.

### 3. Use Docusaurus (React-based Static Site Generator)
Docusaurus is another great tool for generating documentation sites with a sidebar. It provides more flexibility than GitHub Pages alone.

#### Steps to Use Docusaurus:
1. Set up a Docusaurus project and host it on GitHub Pages.
2. Define the sidebar in `sidebars.js`:
   ```javascript
   module.exports = {
     docs: [
       {
         type: 'category',
         label: 'Documentation',
         items: [
           'introduction',
           'installation-guide',
           'user-guide',
         ],
       },
     ],
   };
   ```

### 4. Manual Linking in README.md (Simple but No Sidebar)
If you don’t want to use GitHub Pages or the Wiki, you can create an index or table of contents manually within your `README.md` or another Markdown file:

1. **Create a Table of Contents**:
   ```markdown
   ## Table of Contents
   - [Installation Guide](INSTALL.md)
   - [User Guide](USER_GUIDE.md)
   ```

2. **Link to Other Files**:
   Each link points to another `.md` file in the repository. This won’t give you a sidebar, but it will allow you to have a TOC within the main file.

---

### Summary of Options:
1. **GitHub Wiki**: Simple, built-in sidebar for organizing multiple `.md` files.
2. **GitHub Pages with Jekyll/Docusaurus**: More advanced static site generators that create a proper sidebar navigation.
3. **Manual Linking**: Create an index in your `README.md` without a sidebar.

Would you like to explore one of these options in more detail?
