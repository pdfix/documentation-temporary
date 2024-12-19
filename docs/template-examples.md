# Template Configuration Examples

- [Template Configuration Examples](#template-configuration-examples)
  - [Thresholds and Triggers](#thresholds-and-triggers)
    - [Create tables only with table borders](#create-tables-only-with-table-borders)
    - [Tag area with forms (widgets) in the tablelayout](#tag-area-with-forms-widgets-in-the-tablelayout)
    - [Set reading order detection algorithm](#set-reading-order-detection-algorithm)
  - [Regular expressions](#regular-expressions)
    - [Define a custom bullet](#define-a-custom-bullet)
  - [Page Object Functions](#page-object-functions)
    - [Artifact any path object with white color](#artifact-any-path-object-with-white-color)
  - [Text Functions](#text-functions)
    - [Set Heading by font name and size](#set-heading-by-font-name-and-size)
  - [Object Operators](#object-operators)
    - [Define header by position and type](#define-header-by-position-and-type)


This page discribes use cases and code examples for creating a template configuration.

For more information about the template configuration click [here](template.md)

## Thresholds and Triggers

The complete set of threshods and triggers is documented on https://github.com/pdfix/pdfix_sdk_builds/blob/main/pdf_template.md#threshold-values

Here is a set of the most common triggers

### Create tables only with table borders 
`on/off`

```json
{
  "template": {
    "pagemap": [
      {
        "table_detect_sect": 0
      }
    ]
  }
}
```

### Tag area with forms (widgets) in the tablelayout 
`on/off`

```json
{
  "template": {
    "pagemap": [
      {
        "table_detect_sect": 0
      }
    ]
  }
}
```

### Set reading order detection algorithm 
`0 - built in`
`1 - content based`
`2 - x-y sort`

```json
{
  "template": {
    "pagemap": [
      {
        "rd_sort": 2
      }
    ]
  }
}
```

## Regular expressions

Regular expressions are used to identify mark specific text content and assign properties and flags to it.

### Define a custom bullet

Define a custom bullet of the unicode "✸" \\u2738.

```json
{
  "template": {
    "pagemap_regex": [
      {
        "regex_bullet": "^[\\u2022\\u...\\u2738]$"
      }
    ]
  }
}
```

## Page Object Functions

Page Pbject Functions are executed on low level PDF page objects like paths, images, text chuns prior any layout recognition

### Artifact any path object with white color

```json
{
  "template": {
    "path_object_process": [
      {
        "query": {
          "$and": [
            {
              "$0_fill_color": [
                "255",
                "255",
                "255"
              ]
            }
          ],
          "param": [
            "pds_path"
          ]
        },
        "flag": "artifact"
      }
    ]
  }
}
```

## Text Functions

### Set Heading by font name and size

Define conditions for text on the page *1* with the mimimum font size *36* and the regular expression for the font name to match *TimesNewRomanPS-BoldMT*

```json
{
  "template": {
    "text_update": [
      {
        "heading": "h1",
        "query": {
          "$and": [
            {
              "$0_font_size": [
                {
                  "$gte": "36"
                }
              ]
            },
            {
              "$0_font_name": {
                "$regex": "TimesNewRomanPS-BoldMT"
              }
            },
            {
              "$_page_num"{
                "$eq": 1
              }
            }
          ],
          "param": [
            "pde_text"
          ]
        }
      }
    ]
  }
}
```

## Object Operators

### Define header by position and type

- any object with the bottom coordinate larger than 698.32 will be marked ar Artifact (Header)

```json
{
  "template": {
    "element_update": [
      {
        "flag": "header",
        "query": {
          "$and": [
            {
              "$0_bottom": {
                "$gte": "698.32"
              }
            }
          ],
          "param": [
            "pde_element"
          ]
        },
        "statement": "$if"
      }
    ]
  }
}
```

