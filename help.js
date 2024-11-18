<script>
const pdfix_queries = {
  "not_found": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Not processed yet
  "kPvActionClearRecentDoc": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSave": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSaveAs": "https://pdfix.net/user-guide-not-supported/",
  
  "kPvActionClose": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionMinimize": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionMinimizeAll": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionBringToFront": "https://pdfix.net/user-guide-not-supported/",

  "kPvActionImportActions": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionValidate": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionValidateWith": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionAutoFix": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionQuickFix": "https://pdfix.net/user-guide-not-supported/",
  
  "kPvActionSelCopy": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelCopyWithFormatting": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelCut": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelPaste": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelEdit": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelDelete": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelSelectAll": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelDeselectAll": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelMoveUp": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelMoveDown": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelPasteChild": "https://pdfix.net/user-guide-not-supported/",

  "kPvActionCancel": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionHelp": "https://pdfix.net/user-guide-not-supported/",

  "kPvActionSelFindChar": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelFindContent": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelFindTag": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelFindAnnot": "https://pdfix.net/user-guide-not-supported/",
  
  "kPvActionProperties": "https://pdfix.net/user-guide-not-supported/",

  "kPvActionShowShortcuts": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // PDFix Desktop Product links
  "product_change_log": "https://pdfix.net/pdfix-desktop-changelog/",
  "product_upgrade": "https://pdfix.net/pricing/",
  "kPvActionAbout": "https://pdfix.net/",

  "kPvActionCheckForUpdate": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionCheckForUpdate": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionLicense": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionUpgradeToPro": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Preferences
  "kPvActionSettings": "https://pdfix.net/user-guide-preferences/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // App View
  "kPvActionAddTab": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionRemoveTab": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionRenameTab": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionNextTab": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionPrevTab": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionSortFiles": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionAddFiles": "https://pdfix.net/user-guide-workspace/#Add-and-remove-files",
  "kPvActionOpenFile": "https://pdfix.net/user-guide-workspace/#Add-and-remove-files",
  "kPvActionOpenFileLocation": "https://pdfix.net/user-guide-workspace/#Add-and-remove-files",
  "kPvActionManageActions": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionRunAction": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionCancelBatch": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionCancelAllBatches": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionGetDocInfo": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionViewFiles": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionViewPac": "https://pdfix.net/user-guide-workspace/#Application-view",
  "kPvActionViewPdfua": "https://pdfix.net/user-guide-workspace/#Application-view",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Doc View
  "kPvActionDocHome": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionFirstPage": "https://pdfix.net/user-guide-workspace/#Page-navigation",
  "kPvActionPrevPage": "https://pdfix.net/user-guide-workspace/#Page-navigation",
  "kPvActionNextPage": "https://pdfix.net/user-guide-workspace/#Page-navigation",
  "kPvActionLastPage": "https://pdfix.net/user-guide-workspace/#Page-navigation",
  "kPvActionZoomIn": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionZoomOut": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionRotateClockwise": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionRotateCounterClockwise": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionPrevView": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionNextView": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionFit": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionFitWidth": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionUndo": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionRedo": "https://pdfix.net/user-guide-workspace/#Document-view",
  "kPvActionToolDefault": "https://pdfix.net/user-guide-selection-tools/",
  "kPvActionToolObject": "https://pdfix.net/user-guide-selection-tools/",
  "kPvActionToolTag": "https://pdfix.net/user-guide-tag-tool/",
  "kPvActionToolHand": "https://pdfix.net/user-guide-selection-tools/",
  "kPvActionToolTable": "https://pdfix.net/user-guide-table-tool",
  "kPvActionFind": "https://pdfix.net/user-guide-workspace/#Page-navigation",

  "kPvActionFindPrev": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionFindNext": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionPrint": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionDocumentProperties": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Tag Tool
  "kPvActionToolTag": "https://pdfix.net/user-guide-tag-tool",
  "kPvActionShowAllTags": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowFillBackground": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowReadingOrder": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowReadingOrderGroup": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowReadingOrderCentre": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowCellScope": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowCellSpan": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowCellMissingHeader": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowTagName": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowTagContent": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowTableSummary": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowAssociatedHeaders": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowAssociatedChildren": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionShowConjugatedNote": "https://pdfix.net/user-guide-tag-tool/#Tag-View",
  "kPvActionSelSelectAssociatedSimple": "https://pdfix.net/user-guide-tag-tool/#Edit-Table-Headers",
  "kPvActionSelSelectAssociated": "https://pdfix.net/user-guide-tag-tool/#Edit-Table-Headers",
  "kPvActionSelSelectAsMoveAfter": "hhttps://pdfix.net/user-guide-tag-tool/#Move-Tag",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Deafult Tool
  "kPvActionShowLinks": "https://pdfix.net/user-guide-workspace/#Selection-tools",
  "kPvActionShowWidgets": "https://pdfix.net/user-guide-workspace/#Selection-tools",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Table Tool
  "kPvActionSelTableAddRow": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableAddColumn": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableRemoveRow": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableRemoveColumn": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableMergeCells": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableSplitCells": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableSetRowHeader": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableSetColHeader": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableClearHeader": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableAssignHeader": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableDeassignHeader": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableClose": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableProperties": "https://pdfix.net/user-guide-table-tool",
  "kPvActionSelTableCellReindex": "https://pdfix.net/user-guide-table-tool",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Template general
  "pdf_template": "https://pdfix.net/user-guide-template/",
  "pdf_template_settings": "https://pdfix.net/user-guide-template/#Settings",
  "pdf_template_pagemap": "https://pdfix.net/user-guide-template/#threshold-values",
  "pdf_template_pagemap_regex": "https://pdfix.net/user-guide-template/#regular-expressions",
  "pdf_template_path_object_process": "https://pdfix.net/user-guide-template/#path_object_process",
  "pdf_template_image_object_process": "https://pdfix.net/user-guide-template/#image_object_process",
  "pdf_template_line_update": "https://pdfix.net/user-guide-template/#line_update",  
  "pdf_template_rect_update": "https://pdfix.net/user-guide-template/#rect_update",  
  "pdf_template_word_update": "https://pdfix.net/user-guide-template/#word_update",  
  "pdf_template_word_spacing": "https://pdfix.net/user-guide-template/#word_spacing",  
  "pdf_template_text_line_add_word": "https://pdfix.net/user-guide-template/#text_line_add_word",  
  "pdf_template_text_line_update": "https://pdfix.net/user-guide-template/#text_line_update",  
  "pdf_template_text_line_split_filling": "https://pdfix.net/user-guide-template/#text_line_split_filling",  
  "pdf_template_text_line_neighbours": "https://pdfix.net/user-guide-template/#text_line_neighbours",  
  "pdf_template_text_updatee": "https://pdfix.net/user-guide-template/#text_update",  
  "pdf_template_element_create": "https://pdfix.net/user-guide-template/#element_create",  
  "pdf_template_element_update": "https://pdfix.net/user-guide-template/#element_update",  
  "pdf_template_table_recognize": "https://pdfix.net/user-guide-template/#table_recognize",  
  "pdf_template_caption_join": "https://pdfix.net/user-guide-template/#caption_join",  
  "pdf_template_table_update": "https://pdfix.net/user-guide-template/#table_update",  
  "pdf_template_table_detect_header": "https://pdfix.net/user-guide-template/#table_detect_header",  
  "pdf_template_table_split": "https://pdfix.net/user-guide-template/#table_split",  
  "pdf_template_single_instance_detect": "https://pdfix.net/user-guide-template/#single_instance_detect",  
  "pdf_template_alt_update": "https://pdfix.net/user-guide-template/#alt_update",  
  "pdf_template_actual_text_update": "https://pdfix.net/user-guide-template/#actual_text_update",  
  "pdf_template_artifact_update": "https://pdfix.net/user-guide-template/#artifact_update",  
  "pdf_template_reading_order_detect": "https://pdfix.net/user-guide-template/#reading_order_detect",  
  "pdf_template_label_update": "https://pdfix.net/user-guide-template/#label_update",  
  "pdf_template_list_update": "https://pdfix.net/user-guide-template/#list_update",  
  "pdf_template_tag_list": "https://pdfix.net/user-guide-template/#tag_list",  
  "pdf_template_tag_image": "https://pdfix.net/user-guide-template/#tag_image",  
  "pdf_template_tag_table": "https://pdfix.net/user-guide-template/#tag_table",  
  "pdf_template_tag_annot": "https://pdfix.net/user-guide-template/#tag_annot",  
  "pdf_template_tag_update": "https://pdfix.net/user-guide-template/#tag_update",  
  "pdf_template_annot_update": "https://pdfix.net/user-guide-template/#annot_update",  

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Template panel
  "Template_panel": "https://pdfix.net/user-guide-template/",
  "kPvActionNewTemplate": "https://pdfix.net/user-guide-template/",
  "kPvActionOpenTemplate": "https://pdfix.net/user-guide-template/",
  "kPvActionOpenTemplateRecent": "https://pdfix.net/user-guide-template/",
  "kPvActionMergeTemplate": "https://pdfix.net/user-guide-template/",
  "kPvActionClearTemplate": "https://pdfix.net/user-guide-template/",
  "kPvActionTemplateAdd": "https://pdfix.net/user-guide-template/",
  "kPvActionTemplateRaw": "https://pdfix.net/user-guide-template/",
  "kPvActionTemplateDisabledNode": "https://pdfix.net/user-guide-template/",
  "kPvActionTemplateResetValue": "https://pdfix.net/user-guide-template/",

  "kPvActionSelPreflight": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelPreflightMerge": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionDocPreflight": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionDocPreflightMerge": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSaveMetaData": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSaveTemplate": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSaveAsTemplate": "https://pdfix.net/user-guide-not-supported/",

  "kPvActionSelTemplateAsHeader": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsFooter": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsArtifact": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsH1": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsH2": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsH3": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsH4": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsL1": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsL2": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelTemplateAsL3": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Bookmark panel
  "Bookmarks_panel": "https://pdfix.net/user-guide-bookmarks/#Bookmarks-panel",
  "kPvActionSelBmkAdd": "https://pdfix.net/user-guide-bookmarks/#Add-Bookmark",
  "kPvActionProperties_bmk": "https://pdfix.net/user-guide-bookmarks/#Bookmark-Properties",
  "kPvActionSelEdit_bmk": "https://pdfix.net/user-guide-bookmarks/#Edit-Bookmark",
  "kPvActionSelDelete_bmk": "https://pdfix.net/user-guide-bookmarks/#Delete-Bookmark",
  "kPvActionBmkAddFromTags": "https://pdfix.net/user-guide-basic-actions/#create-bookmarks",
  "kPvActionBmkRootDelete": "https://pdfix.net/user-guide-basic-actions/#clear-document-structure",
  
  "kPvActionSelBmkAdd": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Thumbnail panel
  "Thumbnails_panel": "https://pdfix.net/user-guide-not-supported/",

  "kPvActionDocRotatePages": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelRotatePages": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Content Panel
  "Content_panel": "https://pdfix.net/user-guide-content/#Content-panel",
  "kPvActionDocFlattenFormXObjects": "https://pdfix.net/user-guide-basic-actions/#flatten-form-xobjects",
  "kPvActionSelFlattenFormXObjects": "https://pdfix.net/user-guide-basic-actions/#flatten-form-xobjects",
  "kPvActionDocClearMcStructure": "https://pdfix.net/user-guide-basic-actions/#remove-content-marks",
  "kPvActionSelClearMcStructure": "https://pdfix.net/user-guide-basic-actions/#remove-content-marks",
  "kPvActionDocArtifactUntagged": "https://pdfix.net/user-guide-basic-actions/#artifact-content",
  "kPvActionSelArtifactUntagged": "https://pdfix.net/user-guide-basic-actions/#artifact-content",
  "kPvActionShowArtifacts": "https://pdfix.net/user-guide-content/#Show-Artifacts",
  "kPvActionShowUnmarkedContent": "https://pdfix.net/user-guide-content/#Show-Unmarked-Content",
  "kPvActionShowMc": "https://pdfix.net/user-guide-content/#Show-Tagged-Content",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Annotation Panel
  "Annotations_panel": "https://pdfix.net/user-guide-annotations/#Annotations-panel",
  "kPvActionDocSetTabsKeys": "https://pdfix.net/user-guide-basic-actions/#set-tab-order",
  "kPvActionDocTagAnnot": "https://pdfix.net/user-guide-basic-actions/#tag-annotations",
  "kPvActionSelTagAnnot": "https://pdfix.net/user-guide-basic-actions/#tag-annotations",
  "kPvActionDocSetAnnotsContents": "https://pdfix.net/user-guide-basic-actions/#set-contents",
  "kPvActionSelSetAnnotsContents": "https://pdfix.net/user-guide-basic-actions/#set-contents",
  "kPvActionDocFlattenAnnots": "https://pdfix.net/user-guide-basic-actions/#flatten-annotations",
  "kPvActionSelFlattenAnnots": "https://pdfix.net/user-guide-basic-actions/#flatten-annotations",
  "kPvActionDocCreateWebLinks": "https://pdfix.net/user-guide-basic-actions/#create-web-links",
  "kPvActionSelCreateWebLinks": "https://pdfix.net/user-guide-basic-actions/#create-web-links",
  "kPvActionDocDeleteAnnots": "https://pdfix.net/user-guide-basic-actions/#delete-annotations",
  "kPvActionDocFixMediaClipKeys": "https://pdfix.net/user-guide-basic-actions/#fix-media-clip",

  "kPvActionSelCreateLink": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelCreateLinkFromClipboard": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelCreateHighlight": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelCreateStrikethrough": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////  
  // PDF Actions
  "kPvActionSelActionAdd": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelActionAddGoTo": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelActionAddUri": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////  
  "Tags_panel": "https://pdfix.net/user-guide-tags/",
  "kPvActionDocApplyStandardTags": "https://pdfix.net/user-guide-basic-actions/#apply-standard-tags",
  "kPvActionSelApplyStandardTags": "https://pdfix.net/user-guide-basic-actions/#apply-standard-tags",
  "kPvActionDocDeleteTags": "https://pdfix.net/user-guide-basic-actions/#delete-tags",
  "kPvActionSelDeleteTags": "https://pdfix.net/user-guide-basic-actions/#delete-tags",
  "kPvActionDocFixDocumentTag": "https://pdfix.net/user-guide-basic-actions/#fix-document-tag",
  "kPvActionDocFixHeadings": "https://pdfix.net/user-guide-basic-actions/#fix-headings",
  "kPvActionDocFixListTag": "https://pdfix.net/user-guide-basic-actions/#fix-list-tag",
  "kPvActionSelFixListTag": "https://pdfix.net/user-guide-basic-actions/#fix-list-tag",
  "kPvActionDocFixPlacement": "https://pdfix.net/user-guide-basic-actions/#fix-placement",
  "kPvActionSelFixPlacement": "https://pdfix.net/user-guide-basic-actions/#fix-placement",
  "kPvActionDocRemoveTagData": "https://pdfix.net/user-guide-basic-actions/#remove-tag-properties",
  "kPvActionSelRemoveTagData": "https://pdfix.net/user-guide-basic-actions/#remove-tag-properties",
  "kPvActionDocRenameTags": "https://pdfix.net/user-guide-basic-actions/#rename-tags",
  "kPvActionSelRenameTags": "https://pdfix.net/user-guide-basic-actions/#rename-tags",
  "kPvActionDocSetTagActual": "https://pdfix.net/user-guide-basic-actions/#set-actual-text",
  "kPvActionSelSetTagActual": "https://pdfix.net/user-guide-basic-actions/#set-actual-text",
  "kPvActionDocSetTagAlt": "https://pdfix.net/user-guide-basic-actions/#set-alternate-description",
  "kPvActionSelSetTagAlt": "https://pdfix.net/user-guide-basic-actions/#set-alternate-description",
  "kPvActionDocFixStructureSpaces": "https://pdfix.net/user-guide-basic-actions/#fix-spaces",
  "kPvActionSelFixStructureSpaces": "https://pdfix.net/user-guide-basic-actions/#fix-spaces",
  "kPvActionDocSetTableSummary": "https://pdfix.net/user-guide-basic-actions/#set-table-summary",
  "kPvActionSelSetTableSummary": "https://pdfix.net/user-guide-basic-actions/#set-table-summary",
  "kPvActionDocSetTagAttributes": "https://pdfix.net/user-guide-basic-actions/#set-tag-attributes",
  "kPvActionSelSetTagAttributes": "https://pdfix.net/user-guide-basic-actions/#set-tag-attributes",
  "kPvActionDocSetTagBBox": "https://pdfix.net/user-guide-basic-actions/#set-tag-bbox",
  "kPvActionSelSetTagBBox": "https://pdfix.net/user-guide-basic-actions/#set-tag-bbox",
  "kPvActionDocSetTagId": "https://pdfix.net/user-guide-basic-actions/#set-tag-id",
  "kPvActionSelSetTagId": "https://pdfix.net/user-guide-basic-actions/#set-tag-id",
  "kPvActionDocCloneXObject": "https://pdfix.net/user-guide-basic-actions/#clone-xobjects",
  "kPvActionSelCloneXObject": "https://pdfix.net/user-guide-basic-actions/#clone-xobjects",
  "kPvActionDocFixTableTag": "https://pdfix.net/user-guide-basic-actions/#fix-table-tag",
  "kPvActionSelFixTableTag": "https://pdfix.net/user-guide-basic-actions/#fix-table-tag",
  "kPvActionDocSetTableHeaders": "https://pdfix.net/user-guide-basic-actions/#set-table-headers",
  "kPvActionSelSetTableHeaders": "https://pdfix.net/user-guide-basic-actions/#set-table-headers",
  "kPvActionSelStructTreeAdd": "https://pdfix.net/user-guide-tags/#Tags-panel-manual-tagging",
  "kPvActionSelStructTreeEditTag": "https://pdfix.net/user-guide-tags/#Tags-panel-manual-tagging",
  "kPvActionShowMoveTarget": "https://pdfix.net/user-guide-tags/#Tags-panel-manual-tagging",
  "kPvActionShowRoleMaps": "https://pdfix.net/user-guide-tags/#Tags-panel-manual-tagging",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "LayoutRecognition_panel": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "Fonts_panel": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionDocEmbedFonts": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelFontEmbed": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionDocAddMissingUnicode": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelAddMissingUnicode": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionDocFontReplace": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelFontReplace": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionShowGlyphsWithoutChar": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "Accessibility_panel": "https://pdfix.net/user-guide-accessibility/#Accessibility-panel",
  "kPvActionMakeAccessible": "https://pdfix.net/user-guide-workflow-for-creating-an-accessible-pdf/#Make-Accessible",
  "kPvActionAddTags": "https://pdfix.net/user-guide-basic-actions/#autotag",
  "kPvActionDeleteDocStructure": "https://pdfix.net/user-guide-basic-actions/#clear-document-structure",
  "kPvActionUpdateParentTree": "https://pdfix.net/user-guide-basic-actions/#fix-parent-tree",
  "kPvActionUpdateIdTree": "https://pdfix.net/user-guide-basic-actions/#fix-id-tree",
  "kPvActionSetPdfStandard": "https://pdfix.net/user-guide-basic-actions/#set-pdf/ua-standard",
  "kPvActionSetPdfVersion": "https://pdfix.net/user-guide-basic-actions/#set-pdf-version",
  "kPvActionSetLanguage": "https://pdfix.net/user-guide-basic-actions/#set-language",
  "kPvActionSetTitle": "https://pdfix.net/user-guide-basic-actions/#set-titles",
  "kPvActionSetDisplayDocTitle": "https://pdfix.net/user-guide-basic-actions/#fix-display-document-title",
  "kPvActionSetDocInfo": "https://pdfix.net/user-guide-basic-actions/#set-document-properties",
  "kPvActionSetSuspectValue": "https://pdfix.net/user-guide-basic-actions/#set-suspect-value",
  "kPvActionFixOC": "https://pdfix.net/user-guide-basic-actions/#fix-optional-content",
  "kPvActionRemoveTagMapping": "https://pdfix.net/user-guide-basic-actions/#remove-standard-tags-mapping",
  "kPvActionRoleMapCreate": "https://pdfix.net/user-guide-accessibility/#Role-Map",
  "kPvActionRoleMapDelete": "https://pdfix.net/user-guide-accessibility/#Role-Map",
  "kPvActionClassMapCreate": "https://pdfix.net/user-guide-accessibility/#Class-Map",
  "kPvActionClassMapDelete": "https://pdfix.net/user-guide-accessibility/#Class-Map",

  "kPvActionSelAddToTag": "https://pdfix.net/user-guide-selection-tools/",
  "kPvActionSelTagAs": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsP": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsH1": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsH2": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsH3": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsH4": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsH5": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsH6": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsNote": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsFigure": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsFormula": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsCaption": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTable": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsL": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelMarkAsHeader": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelMarkAsFooter": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelArtifact": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsAnnot": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsArt": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsLink": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsBibEntry": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsBlockQuote": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsCode": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsDiv": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsDocument": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsForm": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsH": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsIndex": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsLBody": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsLI": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsLbl": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsNonStruct": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsPart": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsPrivate": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsQuote": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsRB": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsRP": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsRT": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsReference": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsRuby": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsSect": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsSpan": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTBody": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTD": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTFoot": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTH": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTHead": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTOC": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTOCI": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTR": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsWP": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsWT": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsWarichu": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsFENote": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsEm": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsAside": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsTitle": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsDocumentFragment": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsStrong": "https://pdfix.net/user-guide-accessibility/#TagAs-view",
  "kPvActionSelTagAsSub": "https://pdfix.net/user-guide-accessibility/#TagAs-view",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "Validation_panel": "https://pdfix.net/user-guide-validation/",
  
  "kPvActionSaveValidation": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSaveValidationReport": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionValidationShow": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelValidationFix": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionValidationProfiles": "https://pdfix.net/user-guide-not-supported/",
 
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "Conversion_panel": "https://pdfix.net/user-guide-conversion/",
  "kPvActionSelHtml": "https://pdfix.net/user-guide-conversion/#Export-Selection",
  "kPvActionSelHtmlFixed": "https://pdfix.net/user-guide-conversion/#Export-Selection",
  "kPvActionSelSnapshot": "https://pdfix.net/user-guide-conversion/#Snapshot",
  "kPvActionSelCopyWithFormatting": "https://pdfix.net/user-guide-conversion/#Copy-with-Formatting",
  "kPvActionDocHtml": "https://pdfix.net/user-guide-conversion/#Convert-to-HTML",
  "kPvActionDocHtmlFixed": "https://pdfix.net/user-guide-conversion/#Convert-to-Fixed-HTML",
  "kPvActionDocDerivation": "https://pdfix.net/user-guide-conversion/#Derivation",
  "kPvActionDocJson": "https://pdfix.net/user-guide-basic-actions/#pdf-to-json",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "Format_panel": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "Browser_panel": "https://pdfix.net/user-guide-browser/",
  "kPvActionSelObjTreeAdd": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelObjTreeEdit": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelObjTreeEditStream": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelReload": "https://pdfix.net/user-guide-not-supported/",
  "kPvActionSelObjTreeConvertDictToArray": "https://pdfix.net/user-guide-not-supported/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  "Destinations_panel": "https://pdfix.net/user-guide-destinations/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Action custom dialog ui components 
  "pdf_action_tag_names": "https://pdfix.net/user-guide-tags-define/",
  "pdf_action_annot_types": "https://pdfix.net/user-guide-annotations-define/",
  "pdf_action_objects_types": "https://pdfix.net/user-guide-content-define/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Pipeline actions 
  "pdf_action_default": "https://pdfix.net/user-guide-action-manager/#Default-Actions",
  "pdf_action_custom": "https://pdfix.net/user-guide-action-manager/#Custom-Actions",
  "pdf_action_extern": "https://pdfix.net/actions-marketplace/",
  "pdf_action_validation": "https://pdfix.net/user-guide-basic-actions/#validation",
  "pdf_action_validation_report": "https://pdfix.net/user-guide-basic-actions/#validation",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Base actions
  "pdf_action_set_pdf_ua_standard": "https://pdfix.net/user-guide-basic-actions/#set_pdf_ua_standard",
  "pdf_action_set_suspect_value": "https://pdfix.net/user-guide-basic-actions/#set_suspect_value",
  "pdf_action_fix_oc_name": "https://pdfix.net/user-guide-basic-actions/#fix_oc_name",
  "pdf_action_set_display_doc_title": "https://pdfix.net/user-guide-basic-actions/#set_display_doc_title",
  "pdf_action_remove_standard_tags_mapping": "https://pdfix.net/user-guide-basic-actions/#remove_standard_tags_mapping",
  "pdf_action_set_language": "https://pdfix.net/user-guide-basic-actions/#set_language",
  "pdf_action_set_title": "https://pdfix.net/user-guide-basic-actions/#set_title",
  "pdf_action_add_tags": "https://pdfix.net/user-guide-basic-actions/#add_tags",
  "pdf_action_clear_structure": "https://pdfix.net/user-guide-basic-actions/#clear_structure",
  "pdf_action_fix_id_tree": "https://pdfix.net/user-guide-basic-actions/#fix_id_tree e",
  "pdf_action_fix_parent_tree": "https://pdfix.net/user-guide-basic-actions/#fix_parent_tree",
  "pdf_action_fix_media_clip_keys": "https://pdfix.net/user-guide-basic-actions/#fix_media_clip_keys",
  "pdf_action_set_tabs_key": "https://pdfix.net/user-guide-basic-actions/#set_tabs_key",
  "pdf_action_tag_annot": "https://pdfix.net/user-guide-basic-actions/#tag_annot",
  "pdf_action_set_annot_contents": "https://pdfix.net/user-guide-basic-actions/#set_annot_contents",
  "pdf_action_flatten_annot": "https://pdfix.net/user-guide-basic-actions/#flatten_annot",
  "pdf_action_create_web_links": "https://pdfix.net/user-guide-basic-actions/#create_web_links",
  "pdf_action_delete_annot": "https://pdfix.net/user-guide-basic-actions/#delete_annot",
  "pdf_action_create_bookmarks": "https://pdfix.net/user-guide-basic-actions/#create_bookmarks",
  "pdf_action_artifact_content": "https://pdfix.net/user-guide-basic-actions/#artifact_content",
  "pdf_action_flatten_xobject": "https://pdfix.net/user-guide-basic-actions/#flatten_xobject",
  "pdf_action_remove_content_marks": "https://pdfix.net/user-guide-basic-actions/#remove_content_marks",
  "pdf_action_pdf_to_html": "https://pdfix.net/user-guide-basic-actions/#pdf_to_html",
  "pdf_action_pdf_to_json": "https://pdfix.net/user-guide-basic-actions/#pdf_to_json",
  "pdf_action_embed_font": "https://pdfix.net/user-guide-basic-actions/#embed_font",
  "pdf_action_replace_font": "https://pdfix.net/user-guide-basic-actions/#replace_font",
  "pdf_action_add_missing_unicode": "https://pdfix.net/user-guide-basic-actions/#add_missing_unicode",
  "pdf_action_set_doc_info": "https://pdfix.net/user-guide-basic-actions/#set_doc_info",
  "pdf_action_rotate_pages": "https://pdfix.net/user-guide-basic-actions/#rotate_pages",
  "pdf_action_delete_tags": "https://pdfix.net/user-guide-basic-actions/#delete_tags",
  "pdf_action_apply_standard_tags": "https://pdfix.net/user-guide-basic-actions/#apply_standard_tags",
  "pdf_action_set_tag_id": "https://pdfix.net/user-guide-basic-actions/#set_tag_id",
  "pdf_action_set_tag_bbox": "https://pdfix.net/user-guide-basic-actions/#set_tag_bbox",
  "pdf_action_set_alt": "https://pdfix.net/user-guide-basic-actions/#set_alt s",
  "pdf_action_fix_placement": "https://pdfix.net/user-guide-basic-actions/#fix_placement",
  "pdf_action_remove_tag_data": "https://pdfix.net/user-guide-basic-actions/#remove_tag_data",
  "pdf_action_set_table_summary": "https://pdfix.net/user-guide-basic-actions/#set_table_summary",
  "pdf_action_set_structure_attribute": "https://pdfix.net/user-guide-basic-actions/#set_structure_attribute",
  "pdf_action_fix_structure_spaces": "https://pdfix.net/user-guide-basic-actions/#fix_structure_spaces",
  "pdf_action_fix_headings": "https://pdfix.net/user-guide-basic-actions/#fix_headings",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // PipelineActionsDialog
  "PipelineActionsDialog_add": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_edit": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_run": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_remove": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_reset": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_export": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_import": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_import_extern": "https://pdfix.net/user-guide-action-manager/",
  "PipelineActionsDialog_clone": "https://pdfix.net/user-guide-action-manager/",
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // CustomActionDialog
  "CustomActionDialog_save": "https://pdfix.net/user-guide-action-manager/",
  "CustomActionDialog_reset": "https://pdfix.net/user-guide-action-manager/",
  "CustomActionDialog_move_up": "https://pdfix.net/user-guide-action-manager/",
  "CustomActionDialog_move_down": "https://pdfix.net/user-guide-action-manager/",
  "CustomActionDialog_add": "https://pdfix.net/user-guide-action-manager/",
  "CustomActionDialog_remove": "https://pdfix.net/user-guide-action-manager/",
  "CustomActionDialog_export": "https://pdfix.net/user-guide-action-manager/",

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ImportActionsDialog
  "ImportActionsDialog_add": "https://pdfix.net/user-guide-external-actions/",
  "ImportActionsDialog_remove": "https://pdfix.net/user-guide-external-actions/",

};

function pdfix_doHelpQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");
  if (query && pdfix_queries[query]) {
    window.location.href = pdfix_queries[query];
  }
  else {
    window.location.href = "https://pdfix.net/user-guide-not-supported/?q=" + query;
  }
}

pdfix_doHelpQuery();
</script>
