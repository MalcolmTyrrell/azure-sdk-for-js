/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { PhoneNumberRestClientContext } from "./phoneNumberRestClientContext";
import { PhoneNumberRestClientOptionalParams } from "./models";

class PhoneNumberRestClient extends PhoneNumberRestClientContext {
  /**
   * Initializes a new instance of the PhoneNumberRestClient class.
   * @param endpoint - The endpoint of the Azure Communication resource.
   * @param options - The parameter options
   */
  constructor(endpoint: string, options?: PhoneNumberRestClientOptionalParams) {
    super(endpoint, options);
    this.phoneNumberAdministration = new operations.PhoneNumberAdministration(this);
  }

  phoneNumberAdministration: operations.PhoneNumberAdministration;
}

// Operation Specifications

export {
  PhoneNumberRestClient,
  PhoneNumberRestClientContext,
  Models as PhoneNumberRestModels,
  Mappers as PhoneNumberRestMappers
};
export * from "./operations";
