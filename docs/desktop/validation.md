# Validation

PDFix offers PDF accessibility checker to help you ensure that your files are truly accessible. It provides a fast way to check PDF files for compliance with PDF/UA standards and makes it easy to spot all problems.

## Run Validation

Navidate to document view __Validation__ side pane. Select ![Validate](/images/validation.png) __Validate__ to validate the document against PDF/UA1 or __Validate with__ and choose your desire [validation profile](https://pdfix.net/verapdf-industry-supported-pdf-ua-validation/).

You can check all available validation profiles in [Menu -> Validation Profiles](#validation-profiles).

![Validation results](/images/image-1.png)

## Show Error

If ![](/images/validationshow.png) __Show Errors__ is checked, selecting an issues in the validation view navigates you to the associated object in PDF. It helps you to quickly identify the issue.

If ![](/images/properties.png) __Description__ is checked, you can see complete error description below.

## Fix Error

There are multiple ways how to fix validation errors.

The first thing worth to try is to run ![Autofix](/images/validationautofixhigh.png) __Autofix__.

![Autofix](/images/image-70.png) 

After Autofix run ![Revalidate Icon](/images/revalidate.png) __Revalidate__. If any problem remains, continue with fixing individual errors.

Navigate to the error you want to fix in the Validation view. If there are multiple errors in the same category, you can select multiple errors or you can select the parent category.

Use ![Autofix](/images/validationfix.png) __Fix__ option when enabled. It offers you the most common fix for this issue.

Another option is to apply desired actions to the entire document. For general issues, you can find fixes in the [Accessibility](accessibility.md) side panel. For other object-specific issues, you can navigate to other side panels,

- ![Bookmarks Icon](/images/panebookmark.png) [Bookmarks](bookmarks.md)
- ![Content Icon](/images/panecontent.png) [Content](content.md)
- ![Annotation Icon](/images/paneannotation.png) [Annotations](annotations.md)
- ![Tags Icon](/images/panestructtree.png) [Tags](tags.md)
- ![Fonts Icon](/images/panefonts.png) [Fonts](fonts.md)
- ![Browser Icon](/images/toolbrowser.png) [Browser](browser.md)
- ![Destionations Icon](/images/panelocation.png) [Destinations](destinations.md)

Finally, when you fix all errors and ![Revalidate Icon](/images/revalidate.png) __Revalidate__ the document, you should see a confirmation, that PDF passes all machine checks from selected validation profile.

![Autofix](/images/image-2.png) 

## Validation Profiles

Go to ![Validation Icon](/images/validation.png) __Menu -> Validation__ Profiles to view all supported validation profiles. After selecting a Validation profile, a list of all validation rules is displayed. The __Command__ column contains references to the command used for semi-automated fixes.

![Autofix](/images/image-36.png) 