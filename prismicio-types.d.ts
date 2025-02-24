// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ContentDetailDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for content detail documents
 */
interface ContentDetailDocumentData {
  /**
   * Company field in *content detail*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: content_detail.company
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company: prismic.TitleField;

  /**
   * Description field in *content detail*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_detail.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Cover field in *content detail*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_detail.cover
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover: prismic.ImageField<never>;

  /**
   * Slice Zone field in *content detail*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: content_detail.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContentDetailDocumentDataSlicesSlice> /**
   * Meta Title field in *content detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: content_detail.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *content detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: content_detail.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *content detail*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_detail.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * content detail document from Prismic
 *
 * - **API ID**: `content_detail`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContentDetailDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ContentDetailDocumentData>,
    "content_detail",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | IntegrationsSlice
  | ContentsSlice
  | ShowcaseSlice
  | BentoSlice
  | HeroSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  navigation: prismic.Repeatable<
    prismic.LinkField<
      string,
      string,
      unknown,
      prismic.FieldState,
      "Link" | "Button"
    >
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | ContentDetailDocument
  | PageDocument
  | SettingsDocument;

/**
 * Item in *Bento → Default → Primary → Bento*
 */
export interface BentoSliceDefaultPrimaryBentoItem {
  /**
   * Title field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Body field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * is_Wide? field in *Bento → Default → Primary → Bento*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: bento.default.primary.bento[].is_wide
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_wide: prismic.BooleanField;
}

/**
 * Primary content in *Bento → Default → Primary*
 */
export interface BentoSliceDefaultPrimary {
  /**
   * Heading field in *Bento → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Bento → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Bento field in *Bento → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.bento[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bento: prismic.GroupField<Simplify<BentoSliceDefaultPrimaryBentoItem>>;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BentoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault;

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSlice = prismic.SharedSlice<"bento", BentoSliceVariation>;

/**
 * Item in *Contents → Default → Primary → Content details*
 */
export interface ContentsSliceDefaultPrimaryContentDetailsItem {
  /**
   * Link field in *Contents → Default → Primary → Content details*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: contents.default.primary.content_details[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField<"content_detail">;
}

/**
 * Primary content in *Contents → Default → Primary*
 */
export interface ContentsSliceDefaultPrimary {
  /**
   * Heading field in *Contents → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: contents.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Contents → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contents.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Content details field in *Contents → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: contents.default.primary.content_details[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  content_details: prismic.GroupField<
    Simplify<ContentsSliceDefaultPrimaryContentDetailsItem>
  >;
}

/**
 * Default variation for Contents Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contents*
 */
type ContentsSliceVariation = ContentsSliceDefault;

/**
 * Contents Shared Slice
 *
 * - **API ID**: `contents`
 * - **Description**: Contents
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentsSlice = prismic.SharedSlice<
  "contents",
  ContentsSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * CTAs field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.ctas
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  ctas: prismic.Repeatable<
    prismic.LinkField<string, string, unknown, prismic.FieldState, never>
  >;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Integrations → Default → Primary → Integrations*
 */
export interface IntegrationsSliceDefaultPrimaryIntegrationsItem {
  /**
   * Icon ID field in *Integrations → Default → Primary → Integrations*
   *
   * - **Field Type**: Text
   * - **Placeholder**: simple-icons:prismic
   * - **API ID Path**: integrations.default.primary.integrations[].icon_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon_id: prismic.KeyTextField;
}

/**
 * Primary content in *Integrations → Default → Primary*
 */
export interface IntegrationsSliceDefaultPrimary {
  /**
   * Heading field in *Integrations → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Integrations → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Integrations field in *Integrations → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.default.primary.integrations[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  integrations: prismic.GroupField<
    Simplify<IntegrationsSliceDefaultPrimaryIntegrationsItem>
  >;
}

/**
 * Default variation for Integrations Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntegrationsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Integrations*
 */
type IntegrationsSliceVariation = IntegrationsSliceDefault;

/**
 * Integrations Shared Slice
 *
 * - **API ID**: `integrations`
 * - **Description**: Integrations
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSlice = prismic.SharedSlice<
  "integrations",
  IntegrationsSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Showcase → Default → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
  /**
   * Heading field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Showcase image field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.showcase_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  showcase_image: prismic.ImageField<never>;

  /**
   * Subheading field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField;

  /**
   * Body field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Subheading2 field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.subheading2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading2: prismic.TitleField;

  /**
   * Body2 field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.body2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body2: prismic.RichTextField;

  /**
   * Subheading3 field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.subheading3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading3: prismic.RichTextField;

  /**
   * Body3 field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.body3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body3: prismic.RichTextField;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ShowcaseSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Showcase → Reverse → Primary*
 */
export interface ShowcaseSliceReversePrimary {
  /**
   * Heading field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Showcase image field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.showcase_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  showcase_image: prismic.ImageField<never>;

  /**
   * Subheading field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField;

  /**
   * Body field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Subheading2 field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.subheading2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading2: prismic.TitleField;

  /**
   * Body2 field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.body2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body2: prismic.RichTextField;

  /**
   * Subheading3 field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.subheading3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading3: prismic.RichTextField;

  /**
   * Body3 field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.body3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body3: prismic.RichTextField;
}

/**
 * Reverse variation for Showcase Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceReverse = prismic.SharedSliceVariation<
  "reverse",
  Simplify<ShowcaseSliceReversePrimary>,
  never
>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault | ShowcaseSliceReverse;

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSlice = prismic.SharedSlice<
  "showcase",
  ShowcaseSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ContentDetailDocument,
      ContentDetailDocumentData,
      ContentDetailDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      BentoSlice,
      BentoSliceDefaultPrimaryBentoItem,
      BentoSliceDefaultPrimary,
      BentoSliceVariation,
      BentoSliceDefault,
      ContentsSlice,
      ContentsSliceDefaultPrimaryContentDetailsItem,
      ContentsSliceDefaultPrimary,
      ContentsSliceVariation,
      ContentsSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      IntegrationsSlice,
      IntegrationsSliceDefaultPrimaryIntegrationsItem,
      IntegrationsSliceDefaultPrimary,
      IntegrationsSliceVariation,
      IntegrationsSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ShowcaseSlice,
      ShowcaseSliceDefaultPrimary,
      ShowcaseSliceReversePrimary,
      ShowcaseSliceVariation,
      ShowcaseSliceDefault,
      ShowcaseSliceReverse,
    };
  }
}
