import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMappingTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MappingTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly labels?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMappingTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MappingTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly labels?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MappingTable = LazyLoading extends LazyLoadingDisabled ? EagerMappingTable : LazyMappingTable

export declare const MappingTable: (new (init: ModelInit<MappingTable>) => MappingTable) & {
  copyOf(source: MappingTable, mutator: (draft: MutableModel<MappingTable>) => MutableModel<MappingTable> | void): MappingTable;
}

type EagerNewContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly link?: string | null;
  readonly text?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNewContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly link?: string | null;
  readonly text?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NewContent = LazyLoading extends LazyLoadingDisabled ? EagerNewContent : LazyNewContent

export declare const NewContent: (new (init: ModelInit<NewContent>) => NewContent) & {
  copyOf(source: NewContent, mutator: (draft: MutableModel<NewContent>) => MutableModel<NewContent> | void): NewContent;
}

type EagerContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly link?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly link?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Content = LazyLoading extends LazyLoadingDisabled ? EagerContent : LazyContent

export declare const Content: (new (init: ModelInit<Content>) => Content) & {
  copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}