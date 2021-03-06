/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/relationshipsMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a Relationships. */
export class Relationships {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a Relationships.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a relationship or updates an existing relationship within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param relationshipName The name of the Relationship.
   * @param parameters Parameters supplied to the CreateOrUpdate Relationship operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RelationshipsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, hubName: string, relationshipName: string, parameters: Models.RelationshipResourceFormat, options?: msRest.RequestOptionsBase): Promise<Models.RelationshipsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,hubName,relationshipName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RelationshipsCreateOrUpdateResponse>;
  }

  /**
   * Gets information about the specified relationship.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param relationshipName The name of the relationship.
   * @param [options] The optional parameters
   * @returns Promise<Models.RelationshipsGetResponse>
   */
  get(resourceGroupName: string, hubName: string, relationshipName: string, options?: msRest.RequestOptionsBase): Promise<Models.RelationshipsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param relationshipName The name of the relationship.
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, relationshipName: string, callback: msRest.ServiceCallback<Models.RelationshipResourceFormat>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param relationshipName The name of the relationship.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, relationshipName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RelationshipResourceFormat>): void;
  get(resourceGroupName: string, hubName: string, relationshipName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RelationshipResourceFormat>, callback?: msRest.ServiceCallback<Models.RelationshipResourceFormat>): Promise<Models.RelationshipsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        relationshipName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RelationshipsGetResponse>;
  }

  /**
   * Deletes a relationship within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param relationshipName The name of the relationship.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, hubName: string, relationshipName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,hubName,relationshipName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets all relationships in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.RelationshipsListByHubResponse>
   */
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase): Promise<Models.RelationshipsListByHubResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, callback: msRest.ServiceCallback<Models.RelationshipListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RelationshipListResult>): void;
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RelationshipListResult>, callback?: msRest.ServiceCallback<Models.RelationshipListResult>): Promise<Models.RelationshipsListByHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      listByHubOperationSpec,
      callback) as Promise<Models.RelationshipsListByHubResponse>;
  }

  /**
   * Creates a relationship or updates an existing relationship within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param relationshipName The name of the Relationship.
   * @param parameters Parameters supplied to the CreateOrUpdate Relationship operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, hubName: string, relationshipName: string, parameters: Models.RelationshipResourceFormat, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hubName,
        relationshipName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a relationship within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param relationshipName The name of the relationship.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, hubName: string, relationshipName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hubName,
        relationshipName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets all relationships in the hub.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RelationshipsListByHubNextResponse>
   */
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RelationshipsListByHubNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RelationshipListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RelationshipListResult>): void;
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RelationshipListResult>, callback?: msRest.ServiceCallback<Models.RelationshipListResult>): Promise<Models.RelationshipsListByHubNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHubNextOperationSpec,
      callback) as Promise<Models.RelationshipsListByHubNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.relationshipName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RelationshipResourceFormat
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RelationshipListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.relationshipName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RelationshipResourceFormat,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RelationshipResourceFormat
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.relationshipName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RelationshipListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
