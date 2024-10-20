# Tags

![Tags Icon](/images/panestructtree.png) __Tags__ side panel displays a hierarchical tree of all content in the document. This tag tree reflects the typical structural elements of the page, organized in the sequence that a screen reader should interpret. Content not present in the Tags tree may not be accessible to screen readers.

![Tags screenshot](/images/image-20.png)

## How to define Tags

Define the __Tags__ to which the specific action is applied. There are multiple options how to do that.

- In the combobox, select predefined annotations sets defined by regex
- In the combobox, check the desired tags
- Define the tags types using a regular expression format [https://regex101.com/](https://regex101.com/)
- Define by the tag by the template

## Tag Actions

### Set Alternate Description

PDF documents accessibility can be improved by offering alternative descriptions for Figure, Formula, and other non-textual elements. These text alternatives are crucial for accessibility, as they enable users with vision disabilities to understand the content. Alternate descriptions can be set with ![Alternate description icon](/images/tagalternate.png) __Set Alternate Description__ semi automation process.

1. Select ![Alternate description icon](/images/tagalternate.png) __Set Alternate Description__.
2. Select the __Tags__ types for which an alternative description will be generated, separated by commas.
3. Check the __Exclude__ option if processing is required for tags other than the specified ones.
4. Define a source for detecting the alternative text in __Alternative Text__ combobox.
    - __Define the Custom Alternative text__
      - Fill the custom text into the Alternative Text edit. This text will be used for all selected tags as the annotation Alt key.
    - __Use the first Description Tag above__
      - Fill Description Tag type. PDFix finds the nearest tag of this type above the processing one and utilizes its content as an alternative description for processing tags.
    - __Use the first Description Tag below__
      - Fill Description Tag type. PDFix finds the nearest tag of this type __below__ the processing one and utilizes its content as an alternative description for processing tags.
    - __Use the first Description Tag from children__
      - Fill __Description Tag__ type. PDFix finds the first tag from the processing tag’s children and utilizes its content as an alternative description for processing tags.
    - __Use the associated tag content__
      - PDFix gathers all text content from the children of the processing tag. If there is an Annotation among the children, its __Contents__ key is utilized.
5. Check Overwrite if an existing alternative description needs to be replaced.
6. Run Command Set Alternate Description.

If you want to assign an alternative description of annotations to the Alt key instead of the Contents key, you can use this command for annotation tags. Afterwards, you can clean the Contents key of these annotations with setting __Set Contents->Define the Custom Contents text->Custom Contents__ to empty.

![Set Altenative Description](/images/image-18.png)

## Tags panel manual tagging

In the Tags panel you can manually __Add__, __Edit__, __Delete__ and __Move__ tags. Click on the ![Menu Icon](/images/menu.png) __Options__ menu (or right click) at the panel toolbar to see all available actions that works for the current tag selection.

![Manual tagging menu](/images/image-71.png)