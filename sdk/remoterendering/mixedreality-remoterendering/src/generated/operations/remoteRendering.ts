/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RemoteRenderingRestClientContext } from "../remoteRenderingRestClientContext";
import {
  CreateConversionSettings,
  RemoteRenderingCreateConversionResponse,
  RemoteRenderingGetConversionResponse,
  RemoteRenderingListConversionsResponse,
  RenderingSessionSettings,
  RemoteRenderingCreateSessionResponse,
  RemoteRenderingGetSessionResponse,
  UpdateSessionSettings,
  RemoteRenderingUpdateSessionResponse,
  RemoteRenderingStopSessionResponse,
  RemoteRenderingListSessionsResponse,
  RemoteRenderingListConversionsNextResponse,
  RemoteRenderingListSessionsNextResponse
} from "../models";

/** Class representing a RemoteRendering. */
export class RemoteRendering {
  private readonly client: RemoteRenderingRestClientContext;

  /**
   * Initialize a new instance of the class RemoteRendering class.
   * @param client Reference to the service client
   */
  constructor(client: RemoteRenderingRestClientContext) {
    this.client = client;
  }

  /**
   * Creates a conversion using an asset stored in an Azure Blob Storage account.
   * @param accountId The Azure Remote Rendering account ID.
   * @param conversionId An ID uniquely identifying the conversion for the given account. The ID is case
   *                     sensitive, can contain any combination of alphanumeric characters including hyphens and underscores,
   *                     and cannot contain more than 256 characters.
   * @param body Request body configuring the settings for an asset conversion.
   * @param options The options parameters.
   */
  createConversion(
    accountId: string,
    conversionId: string,
    body: CreateConversionSettings,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingCreateConversionResponse> {
    return this.client.sendOperationRequest(
      { accountId, conversionId, body, options },
      createConversionOperationSpec
    );
  }

  /**
   * Gets the status of a particular conversion.
   * @param accountId The Azure Remote Rendering account ID.
   * @param conversionId An ID uniquely identifying the conversion for the given account. The ID is case
   *                     sensitive, can contain any combination of alphanumeric characters including hyphens and underscores,
   *                     and cannot contain more than 256 characters.
   * @param options The options parameters.
   */
  getConversion(
    accountId: string,
    conversionId: string,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingGetConversionResponse> {
    return this.client.sendOperationRequest(
      { accountId, conversionId, options },
      getConversionOperationSpec
    );
  }

  /**
   * Gets a list of all conversions.
   * @param accountId The Azure Remote Rendering account ID.
   * @param options The options parameters.
   */
  listConversions(
    accountId: string,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingListConversionsResponse> {
    return this.client.sendOperationRequest(
      { accountId, options },
      listConversionsOperationSpec
    );
  }

  /**
   * Creates a new rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param body Settings of the session to be created.
   * @param options The options parameters.
   */
  createSession(
    accountId: string,
    sessionId: string,
    body: RenderingSessionSettings,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingCreateSessionResponse> {
    return this.client.sendOperationRequest(
      { accountId, sessionId, body, options },
      createSessionOperationSpec
    );
  }

  /**
   * Gets the properties of a particular rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param options The options parameters.
   */
  getSession(
    accountId: string,
    sessionId: string,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingGetSessionResponse> {
    return this.client.sendOperationRequest(
      { accountId, sessionId, options },
      getSessionOperationSpec
    );
  }

  /**
   * Updates the max lease time of a particular rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param body Settings used to update the session.
   * @param options The options parameters.
   */
  updateSession(
    accountId: string,
    sessionId: string,
    body: UpdateSessionSettings,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingUpdateSessionResponse> {
    return this.client.sendOperationRequest(
      { accountId, sessionId, body, options },
      updateSessionOperationSpec
    );
  }

  /**
   * Stops a particular rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param options The options parameters.
   */
  stopSession(
    accountId: string,
    sessionId: string,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingStopSessionResponse> {
    return this.client.sendOperationRequest(
      { accountId, sessionId, options },
      stopSessionOperationSpec
    );
  }

  /**
   * Gets a list of all rendering sessions.
   * @param accountId The Azure Remote Rendering account ID.
   * @param options The options parameters.
   */
  listSessions(
    accountId: string,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingListSessionsResponse> {
    return this.client.sendOperationRequest(
      { accountId, options },
      listSessionsOperationSpec
    );
  }

  /**
   * ListConversionsNext
   * @param accountId The Azure Remote Rendering account ID.
   * @param nextLink The nextLink from the previous successful call to the ListConversions method.
   * @param options The options parameters.
   */
  listConversionsNext(
    accountId: string,
    nextLink: string,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingListConversionsNextResponse> {
    return this.client.sendOperationRequest(
      { accountId, nextLink, options },
      listConversionsNextOperationSpec
    );
  }

  /**
   * ListSessionsNext
   * @param accountId The Azure Remote Rendering account ID.
   * @param nextLink The nextLink from the previous successful call to the ListSessions method.
   * @param options The options parameters.
   */
  listSessionsNext(
    accountId: string,
    nextLink: string,
    options?: coreClient.OperationOptions
  ): Promise<RemoteRenderingListSessionsNextResponse> {
    return this.client.sendOperationRequest(
      { accountId, nextLink, options },
      listSessionsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createConversionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/conversions/{conversion_id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Conversion,
      headersMapper: Mappers.RemoteRenderingCreateConversionHeaders
    },
    201: {
      bodyMapper: Mappers.Conversion,
      headersMapper: Mappers.RemoteRenderingCreateConversionHeaders
    },
    400: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    401: {
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    409: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.conversionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getConversionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/conversions/{conversion_id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Conversion,
      headersMapper: Mappers.RemoteRenderingGetConversionHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.conversionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConversionsOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/conversions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConversionList,
      headersMapper: Mappers.RemoteRenderingListConversionsHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.accountId],
  headerParameters: [Parameters.accept],
  serializer
};
const createSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SessionProperties
    },
    201: {
      bodyMapper: Mappers.SessionProperties,
      headersMapper: Mappers.RemoteRenderingCreateSessionHeaders
    },
    400: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    401: {
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    409: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionProperties
    },
    401: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SessionProperties
    },
    401: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    422: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const stopSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}/:stop",
  httpMethod: "POST",
  responses: {
    204: {
      headersMapper: Mappers.RemoteRenderingStopSessionHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSessionsOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionsList
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.accountId],
  headerParameters: [Parameters.accept],
  serializer
};
const listConversionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConversionList,
      headersMapper: Mappers.RemoteRenderingListConversionsNextHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSessionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionsList
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
