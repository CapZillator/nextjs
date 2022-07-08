export type TopStoriesData = {
    copyright: string,
    last_updated: string,
    num_results: number,
    results: Article[],
    section: string,
    status: string
}

export type Article = {
    abstract: string,
    byline: string,
    created_date: string,
    des_facet: string[],
    geo_facet: string,
    item_type: string,
    kicker: string,
    material_type_facet: string,
    multimedia: ArticleMultimedia[],
    org_facet: string[],
    per_facet: string[],
    published_date: string,
    section: string,
    short_url: string,
    subsection: string,
    title: string,
    updated_date: string,
    uri: string,
    url: string
}

export type ArticleMultimedia = {
    caption: string,
    copyright: string,
    format: string,
    height: number,
    subtype: string,
    type: string,
    url: string,
    width: number
}
