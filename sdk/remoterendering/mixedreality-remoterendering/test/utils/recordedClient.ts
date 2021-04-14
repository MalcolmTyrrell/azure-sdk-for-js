// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Context } from "mocha";

import { AzureKeyCredential } from "@azure/core-auth";
import { env, record, Recorder, RecorderEnvironmentSetup } from "@azure/test-utils-recorder";

import { RemoteRenderingClient } from "../../src";
//import "./env";

// When the recorder observes the values of these environment variables
// in any recorded HTTP request or response, it will replace them with
// the values they are mapped to below, which are not real account details.
const replaceableVariables: Record<string, string> = {
  REMOTERENDERING_ARR_ACCOUNT_DOMAIN: "eastus2.mixedreality.azure.com",
  REMOTERENDERING_ARR_ACCOUNT_ID: "arr_account_id",
  REMOTERENDERING_ARR_ACCOUNT_KEY: "arr_account_key",
  REMOTERENDERING_ARR_BLOB_CONTAINER_NAME: "test",
  REMOTERENDERING_ARR_SAS_TOKEN: "arr_sas_token",
  REMOTERENDERING_ARR_SERVICE_ENDPOINT: "https://remoterendering.eastus2.mixedreality.azure.com",
  REMOTERENDERING_ARR_STORAGE_ACCOUNT_KEY: "arr_storage_account_key",
  REMOTERENDERING_ARR_STORAGE_ACCOUNT_NAME: "sdktest"
};

export const environmentSetup: RecorderEnvironmentSetup = {
  replaceableVariables,
  queryParametersToSkip: [],
  customizationsOnRecordings: [
    // Replace the recorded AccessToken value with a fake one.
    (recording: string): string =>
      recording.replace(/"AccessToken":"[^"]*"/g, `"AccessToken":"<access_token>"`)
  ]
};

export function getEnv(name: string): string {
  // If a value exists on the real environment, use it,
  // otherwise, try to use the default values from
  // replaceableVariables
  return env[name] ?? replaceableVariables[name];
}

export function createClient(): RemoteRenderingClient {
  const serviceEndpoint = getEnv("REMOTERENDERING_ARR_SERVICE_ENDPOINT");
  const accountDomain = getEnv("REMOTERENDERING_ARR_ACCOUNT_DOMAIN");
  const accountId = getEnv("REMOTERENDERING_ARR_ACCOUNT_ID");
  const accountKey = getEnv("REMOTERENDERING_ARR_ACCOUNT_KEY");

  const keyCredential = new AzureKeyCredential(accountKey);

  return new RemoteRenderingClient(serviceEndpoint, accountId, accountDomain, keyCredential);
}

/**
 * Creates the recorder and reads the environment variables from the `.env` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */
export function createRecorder(context: Context): Recorder {
  return record(context, environmentSetup);
}
