/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

export type KubeResource =
  "namespaces" | "nodes" | "resourcequotas" | "services" | "limitranges" | "leases" |
  "secrets" | "configmaps" | "ingresses" | "ingressclasses" | "networkpolicies" | "storageclasses" |
  "pods" | "daemonsets" | "deployments" | "statefulsets" | "replicasets" | "jobs" | "cronjobs" |
  "endpoints" | "customresourcedefinitions" | "horizontalpodautoscalers" | "verticalpodautoscalers" | "poddisruptionbudgets" |
  "priorityclasses" | "runtimeclasses";

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
  configmaps: {
    kind: "ConfigMap",
    group: "",
    namespaced: true,
  },
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
  endpoints: {
    kind: "Endpoint",
    group: "",
    namespaced: true,
  },
  horizontalpodautoscalers: {
    kind: "HorizontalPodAutoscaler",
    group: "autoscaling",
    namespaced: true,
  },
  ingresses: {
    kind: "Ingress",
    group: "networking.k8s.io",
    namespaced: true,
  },
  ingressclasses: {
    kind: "IngressClass",
    group: "networking.k8s.io",
    namespaced: false,
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
  limitranges: {
    kind: "LimitRange",
    group: "",
    namespaced: true,
  },
  leases: {
    kind: "Lease",
    group: "",
    namespaced: true,
  },
  networkpolicies: {
    kind: "NetworkPolicy",
    group: "networking.k8s.io",
    namespaced: true,
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
  poddisruptionbudgets: {
    kind: "PodDisruptionBudget",
    group: "policy",
    namespaced: true,
  },
  priorityclasses: {
    kind: "PriorityClass",
    group: "scheduling.k8s.io",
    namespaced: false,
  },
  runtimeclasses: {
    kind: "RuntimeClass",
    group: "node.k8s.io",
    namespaced: false,
  },
  resourcequotas: {
    kind: "ResourceQuota",
    group: "",
    namespaced: true,
  },
  replicasets: {
    kind: "ReplicaSet",
    group: "apps",
    namespaced: true,
  },
  secrets: {
    kind: "Secret",
    group: "",
    namespaced: true,
  },
  services: {
    kind: "Service",
    group: "",
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
  verticalpodautoscalers: {
    kind: "VerticalPodAutoscaler",
    group: "autoscaling.k8s.io",
    namespaced: true,
  },
};
