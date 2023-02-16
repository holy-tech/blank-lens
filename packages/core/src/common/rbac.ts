/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

export type KubeResource =
  "nodes" |
  "storageclasses" |
  "customresourcedefinitions" |
  "runtimeclasses";

export interface KubeApiResource {
  kind: string;
  group: string; // api-group, if empty then "core"
  apiName: string;
  namespaced: boolean;
}

export interface KubeApiResourceDescriptor {
  apiName: string;
  group: string; // api-group, if empty then "core"
}

export const formatKubeApiResource = (desc: KubeApiResourceDescriptor) => (
  desc.group
    ? `${desc.group}/${desc.apiName}`
    : desc.apiName
);

export interface KubeApiResourceData {
  kind: string; // resource type (e.g. "Namespace")
  group: string; // api-group, if empty then "core"
  namespaced: boolean;
}

export const apiResourceRecord: Record<KubeResource, KubeApiResourceData> = {
  customresourcedefinitions: {
    kind: "CustomResourceDefinition",
    group: "apiextensions.k8s.io",
    namespaced: false,
  },
  nodes: {
    kind: "Node",
    group: "",
    namespaced: false,
  },
  runtimeclasses: {
    kind: "RuntimeClass",
    group: "node.k8s.io",
    namespaced: false,
  },
  storageclasses: {
    kind: "StorageClass",
    group: "storage.k8s.io",
    namespaced: false,
  },
};
