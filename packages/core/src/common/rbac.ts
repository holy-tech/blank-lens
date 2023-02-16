/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

export type KubeResource =
  "namespaces" | "nodes" |
  "storageclasses" | "pods" | "daemonsets" |
  "deployments" | "statefulsets" | "replicasets" | "jobs" | "cronjobs" |
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
  cronjobs: {
    kind: "CronJob",
    group: "batch",
    namespaced: true,
  },
  customresourcedefinitions: {
    kind: "CustomResourceDefinition",
    group: "apiextensions.k8s.io",
    namespaced: false,
  },
  daemonsets: {
    kind: "DaemonSet",
    group: "apps",
    namespaced: true,
  },
  deployments: {
    kind: "Deployment",
    group: "apps",
    namespaced: true,
  },
  jobs: {
    kind: "Job",
    group: "batch",
    namespaced: true,
  },
  namespaces: {
    kind: "Namespace",
    group: "",
    namespaced: false,
  },
  nodes: {
    kind: "Node",
    group: "",
    namespaced: false,
  },
  pods: {
    kind: "Pod",
    group: "",
    namespaced: true,
  },
  runtimeclasses: {
    kind: "RuntimeClass",
    group: "node.k8s.io",
    namespaced: false,
  },
  replicasets: {
    kind: "ReplicaSet",
    group: "apps",
    namespaced: true,
  },
  statefulsets: {
    kind: "StatefulSet",
    group: "apps",
    namespaced: true,
  },
  storageclasses: {
    kind: "StorageClass",
    group: "storage.k8s.io",
    namespaced: false,
  },
};
