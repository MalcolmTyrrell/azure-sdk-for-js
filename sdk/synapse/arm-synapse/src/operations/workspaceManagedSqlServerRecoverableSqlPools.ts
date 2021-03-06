/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/workspaceManagedSqlServerRecoverableSqlPoolsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a WorkspaceManagedSqlServerRecoverableSqlPools. */
export class WorkspaceManagedSqlServerRecoverableSqlPools {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a WorkspaceManagedSqlServerRecoverableSqlPools.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get list of recoverable sql pools for workspace managed sql server.
   * @summary Get list of recoverable sql pools for the server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>, callback?: msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>): Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListResponse>;
  }

  /**
   * Get recoverable sql pools for workspace managed sql server.
   * @summary Get recoverable sql pools for the server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName The name of the sql pool
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName The name of the sql pool
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.RecoverableSqlPool>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName The name of the sql pool
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableSqlPool>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableSqlPool>, callback?: msRest.ServiceCallback<Models.RecoverableSqlPool>): Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsGetResponse>;
  }

  /**
   * Get list of recoverable sql pools for workspace managed sql server.
   * @summary Get list of recoverable sql pools for the server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>, callback?: msRest.ServiceCallback<Models.RecoverableSqlPoolListResult>): Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerRecoverableSqlPoolsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/recoverableSqlPools",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoverableSqlPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/recoverableSqlPools/{sqlPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoverableSqlPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoverableSqlPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
