/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { KubeResource } from "../../common/rbac";
import { apiResourceRecord } from "../../common/rbac";
import { object } from "../../common/utils";

export const ResourceNames: Record<KubeResource, string> = {
  "storageclasses": "Storage Classes",
  "runtimeclasses": "Runtime Classes",
};

export const ResourceKindMap = object.fromEntries(
  object.entries(apiResourceRecord)
    .map(([resource, { kind }]) => [kind, resource]),
);
