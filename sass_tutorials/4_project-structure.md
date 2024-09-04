# Sass Project Structure: The 7-1 Pattern

The **7-1 Pattern** is a popular way to structure your Sass project, which organizes your files into seven folders and one main file. This method is highly recommended for scalability and maintainability in larger projects.

## The 7-1 Folder Structure:

1. **Base**:  
   This folder contains the foundational styles such as resets, typography, and global elements like HTML and body styles.

2. **Components**:  
   Small, reusable parts of the layout, such as buttons, forms, and navigation bars, are housed here.

3. **Layout**:  
   This is where you define the global layout of your site, including grid systems, headers, footers, and sidebars.

4. **Pages**:  
   Specific page styles that are unique to one page or set of pages should be placed here.

5. **Themes**:  
   For projects with multiple themes, this folder stores styles related to different themes, such as light and dark mode.

6. **Abstracts (or Utilities)**:  
   This folder includes Sass tools like variables, functions, and mixins. These do not output any CSS themselves.

7. **Vendors**:  
   Any third-party code or external libraries go here.

## Main File:

- **Main.scss**:  
  This file imports all the partials from the above folders. It is the only Sass file compiled into CSS.

By organizing your project in this way, you can maintain a clear and scalable architecture that helps in both development and future updates.

For more details, you can refer to the original source at [Sass Guidelines](https://sass-guidelin.es/).
