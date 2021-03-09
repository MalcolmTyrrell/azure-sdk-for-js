# Azure Example TypeScript Protocol Layer

> see https://aka.ms/autorest

## Configuration

```yaml
v3: true
package-name: "@azure/mixedreality-remoterendering"
title: RemoteRenderingRestClient
description: Azure Remote Rendering Client
generate-metadata: false
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src/generated
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/2a65b0a2bbd9113b91c889f187d8778c2725c0b9/specification/mixedreality/data-plane/Microsoft.MixedReality/stable/2021-01-01/mr-arr.json
add-credentials: false
package-version: 1.0.0-beta.1
disable-async-iterators: true
hide-clients: true
use-extension:
  "@autorest/typescript": "6.0.0-dev.20210121.2"
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion
    transform: >
      $["x-ms-client-name"] = "AssetConversion";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion.properties.id
    transform: >
      $["x-ms-client-name"] = "conversionId";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion.properties.settings
    transform: >
      $["x-ms-client-name"] = "options";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion.properties.creationTime
    transform: >
      $["x-ms-client-name"] = "createdOn";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions
    transform: >
      $["AssetConversionOutput"] = $.conversion.properties.output;
      $.conversion.properties["output"] = {"$ref": "#/definitions/AssetConversionOutput"};
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_settings
    transform: >
      $["x-ms-client-name"] = "AssetConversionOptions";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_settings.properties.inputLocation
    transform: >
      $["x-ms-client-name"] = "inputOptions";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_settings.properties.outputLocation
    transform: >
      $["x-ms-client-name"] = "outputOptions";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_input_settings
    transform: >
      $["x-ms-client-name"] = "AssetConversionInputOptions";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_input_settings.properties.storageContainerUri
    transform: >
      $["x-ms-client-name"] = "storageContainerUrl";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_output_settings
    transform: >
      $["x-ms-client-name"] = "AssetConversionOutputOptions";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_output_settings.properties.storageContainerUri
    transform: >
      $["x-ms-client-name"] = "storageContainerUrl";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.conversion_status
    transform: >
      $["x-ms-enum"].name = "AssetConversionStatus";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.AssetConversionOutput.properties.outputAssetUri
    transform: >
      $["x-ms-client-name"] = "outputAssetUrl";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.error
    transform: >
      $["x-ms-client-name"] = "RemoteRenderingServiceError";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.session_properties
    transform: >
      $["x-ms-client-name"] = "RenderingSession";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.session_properties.properties.id
    transform: >
      $["x-ms-client-name"] = "sessionId";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.session_properties.properties.hostname
    transform: >
      $["x-ms-client-name"] = "host";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.session_properties.properties.creationTime
    transform: >
      $["x-ms-client-name"] = "createdOn";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.session_size
    transform: >
      $["x-ms-enum"].name = "RenderingServerSize";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.create_session_settings
    transform: >
      $["x-ms-client-name"] = "RenderingSessionOptions";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.session_status
    transform: >
      $["x-ms-enum"].name = "RenderingSessionStatus";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.update_session_settings
    transform: >
      $["x-ms-client-name"] = "UpdateSessionOptions";
```