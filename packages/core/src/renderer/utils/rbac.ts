/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { KubeResource } from "../../common/rbac";
import { apiResourceRecord } from "../../common/rbac";
import { object } from "../../common/utils";

export const ResourceNames: Record<KubeResource, string> = {
  "namespaces": "Namespaces",
  "nodes": "Nodes",
  "leases": "Leases",
  "resourcequotas": "Resource Quotas",
  "secrets": "Secrets",
  "configmaps": "Config Maps",
  "storageclasses": "Storage Classes",
  "pods": "Pods",
  "daemonsets": "Daemon Sets",
  "deployments": "Deployments",
  "statefulsets": "Stateful Sets",
  "replicasets": "Replica Sets",
  "jobs": "Jobs",
  "cronjobs": "Cron Jobs",
  "customresourcedefinitions": "Custom Resource Definitions",
  "horizontalpodautoscalers": "Horizontal Pod Autoscalers",
  "poddisruptionbudgets": "Pod Disruption Budgets",
  "priorityclasses": "Priority Classes",
  "runtimeclasses": "Runtime Classes",
  "limitranges": "Limit Ranges",
  "verticalpodautoscalers": "Vertical Pod Autoscalers",
};

export const ResourceKindMap = object.fromEntries(
  object.entries(apiResourceRecord)
    .map(([resource, { kind }]) => [kind, resource]),
);
