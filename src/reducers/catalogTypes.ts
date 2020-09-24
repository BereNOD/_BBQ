export interface ICatalogItem {
    id: number
    slug: string
    title: string
    composition: string[]
    weight: number
    weightUnit: 'грамм'
    price: number
    currency: 'грн'
    src: string
}