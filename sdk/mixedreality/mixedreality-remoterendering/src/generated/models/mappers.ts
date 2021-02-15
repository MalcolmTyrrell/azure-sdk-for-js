/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const CreateConversionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateConversionSettings",
    modelProperties: {
      settings: {
        serializedName: "settings",
        type: {
          name: "Composite",
          className: "ConversionSettings"
        }
      }
    }
  }
};

export const ConversionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConversionSettings",
    modelProperties: {
      inputLocation: {
        serializedName: "inputLocation",
        type: {
          name: "Composite",
          className: "ConversionInputSettings"
        }
      },
      outputLocation: {
        serializedName: "outputLocation",
        type: {
          name: "Composite",
          className: "ConversionOutputSettings"
        }
      }
    }
  }
};

export const ConversionInputSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConversionInputSettings",
    modelProperties: {
      storageContainerUri: {
        serializedName: "storageContainerUri",
        required: true,
        type: {
          name: "String"
        }
      },
      storageContainerReadListSas: {
        serializedName: "storageContainerReadListSas",
        type: {
          name: "String"
        }
      },
      blobPrefix: {
        serializedName: "blobPrefix",
        type: {
          name: "String"
        }
      },
      relativeInputAssetPath: {
        serializedName: "relativeInputAssetPath",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConversionOutputSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConversionOutputSettings",
    modelProperties: {
      storageContainerUri: {
        serializedName: "storageContainerUri",
        required: true,
        type: {
          name: "String"
        }
      },
      storageContainerWriteSas: {
        serializedName: "storageContainerWriteSas",
        type: {
          name: "String"
        }
      },
      blobPrefix: {
        serializedName: "blobPrefix",
        type: {
          name: "String"
        }
      },
      outputAssetFilename: {
        serializedName: "outputAssetFilename",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Conversion: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Conversion",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      settings: {
        serializedName: "settings",
        type: {
          name: "Composite",
          className: "ConversionSettings"
        }
      },
      output: {
        serializedName: "output",
        type: {
          name: "Composite",
          className: "ConversionOutput"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      creationTime: {
        serializedName: "creationTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ConversionOutput: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConversionOutput",
    modelProperties: {
      outputAssetUri: {
        serializedName: "outputAssetUri",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorModel"
            }
          }
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      innerError: {
        serializedName: "innerError",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ConversionList: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConversionList",
    modelProperties: {
      conversions: {
        serializedName: "conversions",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Conversion"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateSessionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateSessionSettings",
    modelProperties: {
      maxLeaseTimeMinutes: {
        serializedName: "maxLeaseTimeMinutes",
        required: true,
        type: {
          name: "Number"
        }
      },
      size: {
        serializedName: "size",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SessionProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SessionProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      arrInspectorPort: {
        constraints: {
          InclusiveMaximum: 65534,
          InclusiveMinimum: 49152
        },
        serializedName: "arrInspectorPort",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      handshakePort: {
        constraints: {
          InclusiveMaximum: 65534,
          InclusiveMinimum: 49152
        },
        serializedName: "handshakePort",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      elapsedTimeMinutes: {
        serializedName: "elapsedTimeMinutes",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      hostname: {
        serializedName: "hostname",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      maxLeaseTimeMinutes: {
        serializedName: "maxLeaseTimeMinutes",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      size: {
        serializedName: "size",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      teraflops: {
        serializedName: "teraflops",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      },
      creationTime: {
        serializedName: "creationTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UpdateSessionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateSessionSettings",
    modelProperties: {
      maxLeaseTimeMinutes: {
        serializedName: "maxLeaseTimeMinutes",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SessionsList: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SessionsList",
    modelProperties: {
      sessions: {
        serializedName: "sessions",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SessionProperties"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingCreateConversionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingCreateConversionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingCreateConversionExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingCreateConversionExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingGetConversionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingGetConversionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RemoteRenderingGetConversionExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingGetConversionExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingListConversionsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingListConversionsHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingListConversionsExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingListConversionsExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingCreateSessionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingCreateSessionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingCreateSessionExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingCreateSessionExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingGetSessionExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingGetSessionExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingUpdateSessionExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingUpdateSessionExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingStopSessionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingStopSessionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingStopSessionExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingStopSessionExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingListSessionsExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingListSessionsExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingListConversionsNextHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingListConversionsNextHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingListConversionsNextExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingListConversionsNextExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingListSessionsNextExceptionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteRenderingListSessionsNextExceptionHeaders",
    modelProperties: {
      mscv: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};