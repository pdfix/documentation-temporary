# Workspace

The PDFix Desktop application offers two different views

- [Application view](#application-view)
- [Document view](#document-view)

PDFix allows you to customize both workspaces within the Preferences dialog. For example you can customize the application theme or you can set keyboard Shortcuts for any commands.

In the Help->[License](license.md) menu you can manage your licenses and the product version.

## Application View

Application view displays the list of files on your system you’ve worked on. It is primarily designed for Batch Processing. PDFix provides batch processing commands to examine, validate, and repair PDFs in bulk.

### Application Main Toolbar
- Add and remove files
- Files view
- Manage and run commands

#### Add and remove files

Click ![Add Files](../../images/add.png) Add to add new files into the file view. To remove already listed, click ![Remove Files](../../images/bin.png)Remove.

#### Files view
To view the list of working files, click ![Files View](../../images/appfiles.png) Files View. To view batch validation results, you can click on either the ![PAC View](../../images/apppac.png) PAC View or the ![Clause View](../../images/apppdfua1.png) Clause View.

PDFix allows you to customize the File View columns within the [Preferences](preferences.md) dialog or with the right click on the file view header.

#### Manage and run commands

Access the ![Commands](../../images/command.png) Commands dialog to manage all available commands and their parameters.

Click [Run Command](#) to execute a specific command on the selected files.

*![Warning](../../images/warning.png) Be carefull when using commands in the application view, as all changes are made directly to the file on the disk and cannot be undone!*

![alt text](../../images/image-37.png)

## Document view

Each PDF document can be opened in Document view. When you open multiple documents, each document opens as a new Document view window.

- __A__ – [Main toolbar](#main-toolbar)
- __B__ – [Side panels](#side-panels)
- __C__ – [Quick access menu](#quick-access-menu)
- __D__ – [Quick access toolbar](#quick-access-toolbar)

![alt text](../../images/image-38.png)

## Main toolbar

### Page navigation

- ![Search](../../images/search.png) __Find__ function enables searching within the document.
- ![Arrow Up](../../images/arrowup.png) __Previous Page__ and ![Arrow Down](../../images/arrowdown.png) __Next Page__ tool buttons facilitate navigation through the pages. You can enter a page number into the text box to navigate directly to that page.
- __Previous View__ reverses the last navigation and __Next View__ navigates back to latest views
- ![Ft Width](../../images/pagefitwidth.png) __Fit Page Width__, ![Fit Page](../../images/pagefit.png) __Fit Page__ & ![Zoom In](../../images/zoomin.png) ![Zoom Out](../../images/zoomout.png) __Zoom__ tool buttons adjust the page magnification, allowing you to customize the zoom level for better readability.

### Selection tools

[Selection tools](selection-tools.md) manage the selection within the document view.

- ![Derault Tool](../../images/toolrect.png) __Default Tool__ is used to select page text or any rectangular area within the document.
- ![Object Tool](../../images/toolobject.png) __Object Tool__ allows you to select page content objects within the document.
- ![Table Tool](../../images/tooltable.png) __Table Tool__ is great for editing Table tags.
- ![Hand Tool](../../images/toolhand.png) __Hand Tool__ navigates through different page areas or allows you to change the page zoom. It allows you to click to documents __Links__.

### Side panels

Side panels contain a set of tools for specific PDF features. Each side panel has its [Quick access menu](workspace.md#quick-access-menu). Commands from this menu can be easily added to side panel toolbars for fast access. Manage these toolbars in the same manner as as [Quick access toolbars](workspace.md#quick-access-toolbars).

PDFix enables you to customize the side panel in the [Preferences](preferences.md) dialog.

- ![Search](../../images/panethumbnail.png) [Thumbnails](thumbnails.md)
- ![Search](../../images/panebookmark.png) [Bookmarks](bookmarks.md)
- ![Search](../../images/panecontent.png) [Content](content.md)
- ![Search](../../images/paneannotation.png) [Annotations](annotations.md)
- ![Search](../../images/panestructtree.png) [Tags](tags.md)
- ![Search](../../images/paneelement.png) [Layout Recognition](layout-recognition.md)
- ![Search](../../images/panefonts.png) [Fonts](fonts.md)
- ![Search](../../images/template.png) [Template](template.md)
- ![Search](../../images/accessible.png) [Accessibility](accessibility.md)
- ![Search](../../images/validation.png) [Validation](validation.md)
- ![Search](../../images/toolconversion.png) [Conversion](conversion.md)
- ![Search](../../images/toolformat.png) [Format](format.md)
- ![Search](../../images/toolbrowser.png) [Browser](browser.md)
- ![Search](../../images/panelocation.png) [Destinations](destinations.md)


### Quick access menu

The ![Menu](../../images/menu.png) __Quick access menu__ is associated with a side panel, containing [commands](commands.md) that are logically connected to that specific side panel. These commands operate on the entire document.

### Quick access toolbar
PDFix allows you to customize the quick access toolbars for commands you want to quickly access while working on a document.

1. Right click on the quick access toolbar
2. Check the command you wand to add to the quick access toolbar
3. Check __Show Text__ if you want to see the button title

![Menu](../../images/image-40.png)