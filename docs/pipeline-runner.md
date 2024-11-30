# PDFix Pipeline Runner #

The **PDFix Pipeline Runner** is a command-line tool designed to execute automated workflows, or "pipelines," for processing PDF documents. It leverages modular actions, each defined in a configuration JSON file, to perform various tasks such as OCR, language detection, and compliance checks (e.g., PDF/UA standards). These actions can either run locally or inside Docker containers, making the tool flexible and adaptable across different environments.

The application supports custom pipelines by chaining actions with input/output dependencies, allowing for seamless file transformation and metadata updates. It also includes logging capabilities and version display options for better control and debugging.

### Key Features:
- **Flexible Pipelines:** Define and execute workflows using a JSON-based configuration.
- **Modular Actions:** Support for both local CLI tools and Docker-based operations.
- **Dynamic Arguments:** Use macros for referencing outputs between actions.
- **Cross-Platform Support:** Compatible with Windows, macOS, and Linux.
- **Error Handling:** Customizable acceptable return codes for robust error management.
- **Logging:** Configurable directories for storing execution logs.

## Download

Please contact support for the download link. 


## Pipeline execution

Minimal pipeline-runner execution:
```bash
./pipeline-runner -p <pipeline.json> 
```

Parameter description:
```
-p,--pipeline <pipeline_config>   Path to the pipeline configuration JSON
-w,-workingdir <working-dir>      A directory to store any input files and files generated during the 
                                  execution of a pipeline. A system temporary folder is used 
                                  if no folder is provided. (optional)
--log <log-location>              A directory or file path where execution log files will be written.
--log_level <level>               A level of logged information [none, critical, error, warning, info, debug]
--version                         Display the application version only
```

## Pipeline configuration

The configuration is a JSON document with an array of actions to be executed. 

### Defining actions

The structure of this JSON is as follows:
```
{
  "title": "The command name",
  "actions": [
    {
      "name": "action-1",
      "path": "<path to program>",
      "program": "<program CLI>",
      "args": []
    },
    {
      "name": "action-2",
      "path": "<path to program>",
      "program": "<program CLI>",
      "args": []
    }
  ]
}
```

## Action definition

Each action is identified by a JSON node with necessary instructions for execution of the action. 

Supported action types are:
- **local** which is a command-line application installed on a system
- **docker** which is embedded in a docker image with the support of a command-line interface (*docker must be installed on a system to execute such action*)

Available actions are listed on [PDFix Actions Marketplace](https://pdfix.net/products/actions-marketplace/)

Action example:
```
{
  "name": "action-1",
  "id": "action-1-id",
  "path": "/path/to/application/",
  "program": "${action_path}/my_cli_app -i ${input_pdf} -o ${output_pdf}",
  "platform": [ "windows", "darwin" ],
  "returnCodes": [ 0 ],
  "args": []
}
```

### Action parameters

- **name** is a string identifier of an action. The action name can be referenced from argument values.
- **id** is a unique identifier of an action within the pipeline. This identifier is used when referencing values of other actions in the pipeline. If `id` is not provided the processor uses the action name as an identifier.
- **path** is used for local actions and tells the processor a path to the executable of an action. Not required if the command is available system-wide (e.g. `docker`, `java`, ...). 
- **program** is the command-line definition that contains the full command for execution including input or output parameters. It is highly recommended to put value macros into quotes `\"${input_pdf}\"`. The `program` may contain additional arguments provided by the pipeline-runner automatically. Such arguments are `${working_directory}`, `${license_name}`, `${license_key}`.
- **platform**  if provided, defines platforms supported by this action. The available values are:
  - `windows` for Windows operating systems
  - `darwin` for macOS operating systems
  - `linux` for Linux operating systems
- **return_codes** is an array of acceptable return codes the program returns. Any exit code not listed in this array is considered an error and terminates the pipeline. Devault value is `[ 0 ]`
- **stdout** handles the application output (for example, to save to a file value can be ${output_txt})
- **stderr** handles the application error (for example, to save to a file value can be ${error_txt})
- **args** defines arguments passed to the program when executing an action
- **title** is an optional user-friendly name of an action

Action example with argument referencing values from another action in the pipeline:
```
{
  "actions": [
    {
      "name": "action-1",
      "id": "action-1-id",
      "path": "<path to a local program>",
      "program": "${action_path}/my_cli_app -i ${input_pdf} -o ${output_pdf}"
      "args": [
        {
          "name: "input_pdf",
          "value": "/usr/tmp/input.pdf"
        },
        {
          "name: "output_pdf",
          "value": ""
        }
      ]
    },
    {
      "name": "action-2",
      "id": "action-2-id",
      "path": "<path to a local program>",
      "program": "${action_path}/my_cli2_app -i ${input_pdf} -o ${output_pdf}",
      "return_codes": [
        0, 1
      ],
      "args": [
        {
          "name": "input_pdf",
          "value": "${action-1-id.output_pdf}"
        },
        {
          "name": "output_pdf",
          "value": "/usr/tmp/processed.pdf"
        }
      ]
    }
}
```

### Arguments

**args** is an array of user-defined arguments used for execution and replaces macros in the `program` in the `configuration`. Similar to executing a bash command.

Each argument is defined by the required properties `name` and `value`. Other arguments may define additional information as helpful for the integration of the action into other applications or to optimize the action execution. The argument value is used as a name of macro used and replaces in the `"program"` string. For example, macro `${input_pdf}` will be replaced with the `value` of the argument with the name `input_pdf`.
`"program": "my_cli -i ${input_pdf}"` will become `"program": "my_cli -i /usr/tmp/input.pdf"`

- **name** defines the name of the argument and defines a macro which is replaced by a value in the `program` string
- **value** defines the value of the argument
- **flags** defines argument *flags*. The acceptable values are decimal values of:
  - *0x0* no flags defined for argument
  - *0x1* argument is read-only
  - *0x2* argument represents an input file of the command. If set, the argument value is *required*.
  - *0x4* argument represents an output file of the command. If set, the argument value is *optional*.
- **ext** defines the equivalent extension of value in case it represents a reference to a file name.
- **type** defines the type of argument value. Possible values are: `string`, `int`, `file_path`, 'json'. Default value is `string`.

Program arguments example:
```   
    {
      "name": "input_pdf",
      "desc": "Path to PDF document you want to proccess",
      "flags": 2,
      "ext": "pdf",
      "type": "file_path",
      "value": "/usr/tmp/input.pdf"
    }
```

## Examples
The pipeline for execution a pipeline with the fillowing steps:
- **OCR Document** with docker image `pdfix/ocr-tesseract`
- **Detect document language** with action in docker image `pdfix/lang-detect`
- **Autotag** PDF with PDFix SDK installed locally
- **Set PDF/UA Standard** in document metadata with PDFix SDK installed locally

The input file to this pipeline is */usr/tmp/this_is_input.pdf*. Output will be saved to */usr/tmp/this_is_output.pdf*.
Paths to input and output files should be set only in the first and last actions. Other actions contain references to their input and output files with macro for example `${action-id.output_pdf}`.

**Note:** Macros `${license_name}` and `${license_key}` are automatically provided by the pipeline-runner when the license is active on the system.

**An example of the full pipeline-runner configuration:**

```
{
    "actions": [
        {
            "args": [
                {
                    "name": "input_pdf",
                    "value": "/usr/tmp/this_is_input.pdf"
                },
                {
                    "name": "output_pdf",
                    "value": ""
                },
                {
                    "name": "language",
                    "value": "eng"
                }
            ],
            "configuration": {
                "path": "",
                "program": "docker run --platform linux/amd64 -v \"${working_directory}:/data\" --rm pdfix/ocr-tesseract:v0.4.4 --name \"${license_name}\" --key \"${license_key}\" ocr -i \"/data/${input_pdf}\" -o \"/data/${output_pdf}\" --lang \"${language}\"",
                "returnCodes": [
                    0
                ]
            },
            "id": "ocr_tesseract",
            "name": "ocr_tesseract",
            "title": "OCR Tesseract"
        },
        {
            "args": [
                {
                    "name": "input_pdf",
                    "value": "${ocr_tesseract.output_pdf}"
                },
                {
                    "name": "output_pdf",
                    "value": ""
                }
            ],
            "configuration": {
                "path": "",
                "program": "docker run --platform linux/amd64 -v ${working_directory}:/data -w /data --rm pdfix/lang-detect:v0.4.4 --name \"${license_name}\" --key \"${license_key}\" lang-detect -i \"/data/${input_pdf}\" -o \"/data/${output_pdf}\"",
                "returnCodes": [
                    0
                ]
            },
            "id": "language_detection",
            "name": "language_detection",
            "title": "Language Detection"
        },
        {
            "args": [
                {
                    "name": "input_pdf",
                    "value": "${language_detection.output.pdf}"
                },
                {
                    "name": "output_pdf",
                    "value": ""
                },
                {
                    "name": "config_json",
                    "type": "file_path",
                    "ext": "json",
                    "value": {
                        "name": "add_tags",
                        "params": [
                            {
                                "name": "template",
                                "value": ""
                            },
                            {
                                "name": "preflight",
                                "value": true
                            },
                            {
                                "name": "standard_attrs",
                                "value": "false"
                            },
                            {
                                "name": "sequential_headings",
                                "value": "true"
                            }
                        ]
                    }
                }
            ],
            "configuration": {
                "path": "/Applications/PDFix SDK",
                "program": "pdfix_app batch --input \"${input_pdf}\" --output \"${output_pdf}\" -c \"${config_json}\" --progress -m \"${license_name}\" -k \"${license_key}\"",
                "returnCodes": [
                    0
                ]
            },
            "id": "add_tags",
            "name": "add_tags",
            "title": "Autotag"
        },
        {
            "args": [
                {
                    "name": "input_pdf",
                    "value": "${add_tags.output_pdf}"
                },
                {
                    "name": "output_pdf",
                    "value": "/usr/tmp/this_is_output.pdf"
                },
                {
                    "name": "config_json",
                    "type": "file_path",
                    "ext": "json",
                    "value": {
                        "name": "set_pdf_ua_standard",
                        "params": [
                            {
                                "name": "part_number",
                                "value": "1"
                            }
                        ]
                      }
                }
            ],
            "configuration": {
                "path": "/Applications/PDFix SDK",
                "program": "pdfix_app batch --input \"${input_pdf}\" --output \"${output_pdf}\" -c \"${config_json}\" --progress -m \"${license_name}\" -k \"${license_key}\"",
                "returnCodes": [
                    0
                ]
            },
            "id": "set_pdf_ua_standard",
            "name": "set_pdf_ua_standard",
            "title": "Set PDF/UA Standard"
        }
    ],
    "name": "custom_action4",
    "id": "custom_action4",
    "title": "Custom Action with OCR and PDF/UA fixing",
    "type": "custom",
    "version": {
        "major": 1,
        "minor": 0,
        "patch": 0
    }
}

```
