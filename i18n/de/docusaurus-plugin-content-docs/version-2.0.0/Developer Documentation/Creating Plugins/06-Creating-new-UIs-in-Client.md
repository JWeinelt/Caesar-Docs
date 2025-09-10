# Creating UIs for the client

:::warning

This feature is **work in progress.** It will be added **after** the first release.

:::

## Example
With Caesar, you're able to create Caesar client pages just with JSON.
The following JSON shows almost every possibility of this framework:

```JSON
{
    "tabName": "ExampleModule",
    "icon": {
        "enableIcon": true,
        "iconURL": "https://example.com/icon.png"
    },
    "version": "1.0-SNAPSHOT",
    "tabContent": {
        "columnAmount": 1,
        "column1": {
            "permissionNeeded": true,
            "components": [
                {
                    "type": "header",
                    "size": 1,
                    "value": "Test Column 1",
                    "viewCondition": "true",
                    "minX": 100,
                    "minY": 50
                },
                {
                    "type": "container",
                    "dataSource": {
                        "type": "mysql",
                        "username": "root",
                        "password": "$config.mysql.password$",
                        "host": "localhost",
                        "port": 3306,
                        "dbName": "test",
                        "tableName": "test_table"
                    },
                    "viewCondition": "true",
                    "minX": 100,
                    "minY": 200
                },
                {
                    "type": "label",
                    "value": "That's a test",
                    "viewCondition": "true",
                    "minX": 100,
                    "minY": 50
                },
                {
                    "type": "button",
                    "value": "That's a test",
                    "viewCondition": "true",
                    "disableCondition": "false",
                    "minX": 100,
                    "minY": 50,
                    "toolTip": "Nothing to see here.",
                    "disabled": false,
                    "action": "example.button1"
                },
                {
                    "type": "image",
                    "url": "local::modules/example/image.png",
                    "alt": "Alternatie Text",
                    "viewCondition": "true",
                    "minX": 100,
                    "minY": 50
                },
                {
                    "type": "panel",
                    "direction": "HORIZONTAL",
                    "viewCondition": "true",
                    "minX": 300,
                    "minY": 100,
                    "content": "panel1"
                }
            ]
        },
        "panel1": {
            "components": [
                {
                    "type": "header",
                    "size": 2,
                    "value": "Panel header",
                    "viewCondition": "true",
                    "minX": 100,
                    "minY": 50
                }
            ],
            "viewCondition": "true"
        }
    },
    "actions": [
        {
            "name": "button1",
            "type": "display",
            "display": {
                "type": "dialog_info",
                "title": "Example Dialog",
                "description": "This is just an example",
                "acceptOK": true,
                "acceptDeny": true,
                "buttons": [
                    {
                        "name": "otherbutton",
                        "value": "Another Option",
                        "minX": 200,
                        "action": "button1.display.other"
                    }
                ]
            }
        },
        {
            "name": "button1.display.other",
            "type": "execute",
            "execution": {
                "type": "database",
                "statement": "INSERT INTO example.example (ID) VALUES('Test');",
                "awaitResponse": true,
                "onlyDisplayResponseError": true
            }
        }
    ]
}
```

## JSON Documentation
### Important general definitions

| Name            | Description                                | Possible values |
|-----------------|--------------------------------------------|-----------------|
| ``pageName``    | The name of the page                       | `String`        |
| ``icon``        | Sets an icon for your page in the sidebar. | Icon            |
| ``version``     | Important for versioning.                  | `String`        |
| ``pageContent`` | Content of the page goes here.             | PageDefinition  |
| ``actions``     | Actions to perform are going here          | List of actions |

### ``pageContent``
Here we define all the content displayed in the page.
With ``columnAmount`` we define, how much columns should be used.
Depending on the amount, you **must** define ``column`` elements.
Example: We define a `columnAmount` of `3`. ``pageContent`` must have these child nodes:
- `column1`
- `column2`
- `column3`

**In addition,** you can define panels.
They get the following options:

``Components`` - A list of components to display.

## Components
### Default definition
**Every** object (component) needs specific settings.

| Name             | Description                                 | Type    | Default Value |
|------------------|---------------------------------------------|---------|---------------|
| type             | The type of the component.                  | String  | none          |
| minX             | Minimum component size (X)                  | Integer | 100           |
| minY             | Minimum component size (Y)                  | Integer | 100           |
| viewCondition    | Condition for the object to be displayed    | String  | true          |
| Text Components  |                                             |         |               |
| value            | Display value                               | String  | Empty text    |
| Input Components |                                             |         |               |
| disableCondition | Condition when user input should be blocked | String  | false         |


### `Type`: Database
With the action type `Database`, SQL queries can be executed on a database. The database connection settings are not passed directly, but rather a `DatabaseConnection`. This connection is server-side and controlled there. Here's an example of a simple database operation that modifies a value:
```json
{
	"database": {
		"connection": "exampleConnection",
		"database": "example",
		"table": "process_validation",
		"sql": "UPDATE {tbl} SET valid = 1 WHERE {var1} = 0",
		"variables": [
			{
				"short": "tbl",
				"replace": "var$table"
			},
			{
				"short": "var1",
				"replace": "valid"
			}
		]
	}
}
```
This example shows the configuration of a database query.
**Important:** `Variables` are used here. They are inserted into the text as `{VarName}` and defined in `variables`.
They can be replaced by a string (like the variable `var1` in the example) or dynamically.

---

### Header
Definition type: ``header``

A header. In addition to the standard definitions, it also has these values:

| Name      | Description                                        | Type        | Default Value  |
|-----------|----------------------------------------------------|-------------|----------------|
| ``size``  | Title size                                         | ``Integer`` | 1-5            |

### Label
Definition type: ``label``

A simple text. It has no additional values beyond the standard definitions.

### Button
Definition type: ``button``

A button. In addition to the standard definitions, it also has these values:

| Name         | Description                                                                                                                           | Type        | Default Value      |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| ``theme``    | Display theme path                                                                                                                    | ``String``  | ``themes/default`` |
| ``toolTip``  | Tooltip shown when hovering with the mouse                                                                                            | ``String``  | *empty*            |
| ``disabled`` | Defines the button as ``not interactable`` regardless of ``disableCondition``. State can be updated by changing the condition result. | ``boolean`` | ``false``          |
| ``action``   | Action to be executed. The name is defined in ``actions``.                                                                            | ``String``  | *empty*            |

### Container

Definition type: ``container``
Displays data as a table. In addition to the standard definitions, it also has these values:

| Name                | Description                                                              | Type                                               | Default Value |
|---------------------|--------------------------------------------------------------------------|----------------------------------------------------|---------------|
| ``dataSource``      | Specifies the data source                                                | ``DataSource``                                     | *empty*       |
| **`DataSource`**    |                                                                          |                                                    |               |
| ``type``            | Specifies the data source type                                           | `String`, - ``"mysql"`` - ``"mssql"`` - ``"json"`` | *empty*       |
| ``username``        | Database username                                                        | ``String``                                         | *empty*       |
| `password`          | Database user password                                                   | ``String``                                         | *empty*       |
| `host`              | Database server IP                                                       | ``String``                                         | `localhost`   |
| `port`              | Database server port                                                     | ``Integer``                                        | 3306          |
| `dbName`            | Database name                                                            | ``String``                                         | `tabula`      |
| `tableName`         | Table/View name to access                                                | ``String``                                         | *empty*       |
| ``customStatement`` | A custom statement for data queries. The statement **must** be `SELECT`. | ``String``                                         | *empty*       |
| ``whereConditions`` | List of ``WHERE`` conditions                                             | List of ``String``                                 | *empty*       |
| ``whereCondition``  | Custom ``WHERE`` condition                                               | ``String``                                         | *empty*       |

### Panel

Definition type: ``panel``
A panel. In addition to the standard definitions, it also has these values:

| Name          | Description                                                 | Type       | Default Value  |
|---------------|-------------------------------------------------------------|------------|----------------|
| ``direction`` | Panel layout. Possible values: ``HORIZONTAL``; ``VERTICAL`` | ``String`` | ``HORIZONTAL`` |
| ``content``   | The name of the defined panel                               | ``String`` | *empty*        |

### Image

Definition type: ``image``
An image. In addition to the standard definitions, it also has these values:

| Name    | Description                                                 | Type       | Default Value    |
|---------|-------------------------------------------------------------|------------|------------------|
| ``url`` | URL of the image file. See [URL Definitions](#) for details | ``String`` | ``local::empty`` |
| ``alt`` | Alt text displayed when the image file cannot be loaded     | ``String`` | *empty*          |

## Actions
In Tabula, actions can be defined that can be executed under certain conditions.

| Name            | Description                                                | Type     | Default Value |
|-----------------|------------------------------------------------------------|----------|---------------|
| ``name``        | The name/ID of the action                                  | `String` |
| `type`          | The type of the action. It can be one of the values below. | `String` |
| `[type-action]` | Values for the specific type are defined here. See below.  | `Type`   |

### Action Types
An action can have different types. These are the action types:

- `display`: Shows a dialog/message.
- `database`: Executes an action in a database instance.
- `execute`: Executes a server-side script.
- `cexecute`: Executes a client-side script.
- `http`: Executes an HTTP request to a server.
- `sound`: Plays a sound.
- `file-export`: Saves data optionally as a CSV or JSON file.

Depending on the type, an additional field section must be defined in the action declaration named after the type. Here are two examples:

```JSON
{
	"type": "display",
	"display": {
        "options": "here"
	}
}
```

```JSON
{
	"type": "database",
	"database": {
		"options": "here"
	}
}
```

#### ``Type``: Display

``Display`` has further subtypes:

- `dialog_info`
- `dialog_hint`
- `dialog_warn`
- `dialog_error`
- `dialog_critical`
- `toast_info`
- `toast_hint`
- `toast_warn`
- `toast_error`

*Dialogs* are windows that open and can be interacted with.
*Toasts* are notifications shown at the top edge of the window.

A display field contains the following fields:

| Name          | Description                                                                                                                                              | Applied To            |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| `title`       | Title displayed at the window edge of the dialog box                                                                                                     | Dialogs               |
| `description` | Description shown in the dialog window or in the notification                                                                                            | Dialogs/Notifications |
| `acceptOK`    | Creates a default "OK" button if `true`. For buttons, see [[Buttons](https://chatgpt.com/c/68109b55-1eb4-8012-9a92-d41c5ac9b100#buttons)](#buttons).     | Dialogs               |
| `acceptDeny`  | Creates a default "Cancel" button if `true`. For buttons, see [[Buttons](https://chatgpt.com/c/68109b55-1eb4-8012-9a92-d41c5ac9b100#buttons)](#buttons). | Dialogs               |
| `buttons`     | A list of buttons to display. See [[Buttons](https://chatgpt.com/c/68109b55-1eb4-8012-9a92-d41c5ac9b100#buttons)](#buttons) for more.                    | Dialogs               |
| `displayTime` | Specifies how long the notification should be visible. Values are in milliseconds. Minimum value: `500`, Default: `2000`                                 | Notifications         |

#### DButtons

DButtons are declared for dialog boxes. They are distinguished by the `D` for **D**ialog from regular button components. They still share some similarities with their fields:

| Name                | Description                                                           | Value Type             | Default Value            | Required? |
|---------------------|-----------------------------------------------------------------------|------------------------|--------------------------|-----------|
| `name`              | The **unique name** of the button                                     | `String`               | *none*                   | ✅         |
| `value`             | The text displayed on the button                                      | `String`               | *empty*                  | ✅         |
| `minX`              | The minimum horizontal size of the button                             | `Integer`              | `200`                    | ❌         |
| `position`          | The relative position of the button in the dialog                     | ``"Integer, Integer"`` | Automatically calculated | ❌         |
| `action`            | The action ID of the action to be executed when the button is clicked | `String`               | `none`                   | ✅         |
| `disable-condition` | Condition when the button can be clicked                              | `Boolean`              | `false`                  | ❌         |
| `type`              | (Optional, if another input type is requested)                        | `String`               | `button`                 | ❌         |

#### `Type`: Database

With the action type ``Database``, SQL queries can be executed on a database. The database connection settings are not passed directly, but rather a ``DatabaseConnection``. This connection is server-side and controlled there. Here's an example of a simple database operation that modifies a value:

```JSON
{
	"database": {
		"connection": "exampleConnection",
		"database": "example",
		"table": "process_validation",
		"sql": "UPDATE {tbl} SET valid = 1 WHERE {var1} = 0",
		"variables": [
			{
				"short": "tbl",
				"replace": "var$table"
			},
			{
				"short": "var1",
				"replace": "valid"
			}
		]
	}
}
```

This example shows the configuration of a database query.

:::tip

*Variables* are used here. They are inserted into the text as `{VarName}` and defined in ``variables``.
They can be replaced by a string (like the variable `var1` in the example) or dynamically calculated via a function.

:::

#### `Type`: Execute
With `execute` as an action, **server-side** scripts can be executed. A list of the system-declared scripts can be found here.
An action of type `execute` only contains one additional field: `script` with the ID of the script or a path.

#### `Type`: CExecute
With `cexecute`, client-side scripts are executed. More about Client Scripts.
An action of type `cexecute` only contains one additional field: `script` with the ID of the script or a path.
#### `Type`: HTTP
The `http` type allows requests to be sent to HTTP(S) servers. These are the fields that can be passed:

| Name          | Description                                                                | Value Type            | Default Value | Must be declared? |
|---------------|----------------------------------------------------------------------------|-----------------------|---------------|-------------------|
| method        | The HTTP method to be used for the request. See HTTP for more information. | String                | GET           | ❌                 |
| customheaders | Custom request headers                                                     | String-Array          | empty         | ❌                 |
| resulthandler | A list of ResultHandlers. See ResultHandler for more.                      | List of ResultHandler | empty         | ❌                 |
| url           | The query URL                                                              | String                | localhost     | ✅                 |

#### `Type`: Execute  
With ``execute`` as an action, **server-side** scripts can be executed. A list of the system-declared scripts can be found [[here](https://chatgpt.com/c/68109b55-1eb4-8012-9a92-d41c5ac9b100#)](#).  
An action of type `execute` only contains one additional field: `script` with the ID of the script or a path.

#### `Type`: CExecute  
With `cexecute`, client-side scripts are executed. More about [[Client Scripts](https://chatgpt.com/c/68109b55-1eb4-8012-9a92-d41c5ac9b100#)](#).  
An action of type `cexecute` only contains one additional field: `script` with the ID of the script or a path.

#### `Type`: HTTP  
The ``http`` type allows requests to be sent to HTTP(S) servers. These are the fields that can be passed:

| Name            | Description                                                                                                                                    | Value Type              | Default Value | Must be declared? |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|---------------|-------------------|
| `method`        | The [HTTP](https://chatgpt.com/c/68109b55-1eb4-8012-9a92-d41c5ac9b100#) method to be used for the request. See [HTTP](#) for more information. | `String`                | `GET`         | ❌                 |
| `customheaders` | Custom request headers                                                                                                                         | `String-Array`          | *empty*       | ❌                 |
| `resulthandler` | A list of `[ResultHandler](https://chatgpt.com/c/68109b55-1eb4-8012-9a92-d41c5ac9b100#)`s. See [`ResultHandler`](#) for more.                  | List of `ResultHandler` | *empty*       | ❌                 |
| `url`           | The query URL                                                                                                                                  | `String`                | `localhost`   | ✅                 |

`ResultHandler`  
A `ResultHandler` is specified as an element of a list, as there are many HTTP status codes. Here's an example handler:
```JSON
{
	"code": 200,
	"actions": [
		"exampleResultActionID"
	]
}
```

#### `Type`: Sound
With the `sound` type, sounds can be played. There are two types of sounds:

- **Local sounds:** Used to play sounds that are stored within the software.
- **External sounds:** These are sounds downloaded by the Tabula module.
- **Cloud sounds:** Sound files that need to be downloaded first. **Important:** Cloud sounds become external sounds after the first use. They can still be retrieved as cloud sounds, but without the `forceupdate` field, the local (external) sound file will be played automatically.

A `Sound` can also have the following additional fields:

| Name             | Description                                                                           | Value Type | Default Value | Must be declared? |
|------------------|---------------------------------------------------------------------------------------|------------|---------------|-------------------|
| `resource`       | The sound resource type. Allowed values are `local`, `external`, and `cloud`.         | `String`   |               | ✅                 |
| `path`           | The path/ID/URL of the sound file                                                     | `String`   |               | ✅                 |
| `loop`           | The number of times the sound should repeat consecutively. `-1` disables repetitions. | `Integer`  | 0             | ❌                 |
| `loop-delay`     | The pause between repetitions in milliseconds                                         | `Integer`  | 0             | ❌                 |
| `volume`         | The volume. Percentage (%).                                                           | `Float`    | 10            | ❌                 |
| `pitch`          | The playback speed                                                                    | `Float`    | 1             | ❌                 |
| `clearafterplay` | Indicates whether the sound should be unloaded after playback.                        | `Boolean`  | `true`        | ❌                 |

:::warning

Setting the ``clearafterplay`` value to false with many sounds may produce performance problems.

:::

#### `Type`: File Export  
`file-export` exports the current data as a JSON or CSV file.